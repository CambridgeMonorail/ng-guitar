enum MetronomePlayType {
  Tick,
  Audio,
}

enum MetronomeNoteResolution {
  Sixteenth = 0,
  Eighth = 1,
  Quarter = 2,
  Half = 3,
  Full = 4,
}

enum MetronotePitches {
  High = 770,
  Medium = 440,
  Low = 220,
}

interface IMetronomeOptions {
  tempo?: number; // tempo (in beats per minute)
  audioUrl?: string; // specific beep or audio file url
  noteLength?: number; // length of "beep" (in seconds)
  noteResolution?: MetronomeNoteResolution; // length of note (full, half, quarter, etc..)
  playType: MetronomePlayType;
}

interface IMetronomeNote {
  position: number;
  time: number;
}

export class MetronomeSample {
  // default options
  private options: IMetronomeOptions = {
    tempo: 120,
    noteLength: 0.05,
    noteResolution: MetronomeNoteResolution.Quarter,
    playType: MetronomePlayType.Tick,
  };

  private lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
  private scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec) This is calculated from lookahead, and overlaps with next interval (in case the timer is late)

  private current16ThNote!: number; // What note is currently last scheduled?
  private nextNoteTime = 0.0; // when the next note is due.

  private audioContext: AudioContext;
  private audioBuffer!: AudioBuffer;

  private timerWorker!: Worker; // The Web Worker used to fire timer messages

  constructor(options: IMetronomeOptions) {
    Object.assign<IMetronomeOptions, IMetronomeOptions>(this.options, options);
    this.audioContext = new AudioContext();
    this.initWorker();
  }

  private initWorker(): void {
    const blob = new Blob(
      [
        `
            let timer = null;
            let interval = 100;
            self.onmessage = function (e) {
              if (e.data == 'start') {
                console.log('Metronome worker starting');
                if (timer) {
                  clearInterval(timer);
                }
                timer = setInterval(function () {
                  postMessage('tick');
                }, interval);
              } else if (e.data.interval) {
                interval = e.data.interval;
                console.log('Metronome interval = ' + interval + ' .ms');
                if (timer) {
                  clearInterval(timer);
                  timer = setInterval(function () {
                    postMessage('tick');
                  }, interval);
                }
              } else if (e.data == 'stop') {
                console.log('Metronome worker stopping');
                if (timer) {
                  clearInterval(timer);
                }
                timer = null;
              }
            };
        `,
      ],
      { type: 'text/javascript' }
    );

    this.timerWorker = new Worker(window.URL.createObjectURL(blob));

    this.timerWorker.onmessage = (e) => {
      if (e.data === 'tick') {
        while (
          this.nextNoteTime <
          this.audioContext.currentTime + this.scheduleAheadTime
        ) {
          this.scheduleNote({
            position: this.current16ThNote,
            time: this.nextNoteTime,
          });
          this.nextNote();
        }
      } else console.log(`Metronome message: ${e.data}`);
    };

    this.timerWorker.postMessage({ interval: this.lookahead });
  }

  private scheduleNote(note: IMetronomeNote): void {
    if (this.options.noteResolution === 1 && note.position % 2) return; // we're not playing non-8th 16th notes
    if (this.options.noteResolution === 2 && note.position % 4) return; // we're not playing non-quarter 8th notes
    if (this.options.noteResolution === 3 && note.position % 8) return; // we're not playing non-half quarter notes
    if (this.options.noteResolution === 4 && note.position) return; // we're not playing non-full half notes

    if (this.options.playType === MetronomePlayType.Audio && this.audioBuffer) {
      const bufferNode = this.audioContext.createBufferSource();
      bufferNode.buffer = this.audioBuffer;
      bufferNode.connect(this.audioContext.destination);
      bufferNode.start(note.time);

      bufferNode.stop(note.time + (this.options.noteLength || 0.05));
    } else {
      const oscillatorNode = this.audioContext.createOscillator();
      oscillatorNode.connect(this.audioContext.destination);

      if (note.position % 16 === 0)
        oscillatorNode.frequency.value = MetronotePitches.High;
      else if (note.position % 4 === 0)
        oscillatorNode.frequency.value = MetronotePitches.Medium;
      else oscillatorNode.frequency.value = MetronotePitches.Low;

      oscillatorNode.start(note.time);
      oscillatorNode.stop(note.time + (this.options.noteLength || 0.05));
    }
  }

  private nextNote(): void {
    const secondsPerBeat = 60.0 / (this.options.tempo || 70); // Notice this picks up the CURRENT tempo value to calculate beat length.
    this.nextNoteTime += 0.25 * secondsPerBeat; // Add beat length to last beat time

    this.current16ThNote++; // Advance the beat number, wrap to zero

    if (this.current16ThNote === 16) {
      this.current16ThNote = 0;
    }
  }

  private startWorker(): void {
    this.current16ThNote = 0;
    this.nextNoteTime = this.audioContext.currentTime;
    this.timerWorker.postMessage('start');
  }

  private startAudioMode() {
    const request = new XMLHttpRequest();
    if (this.options.audioUrl) {
      request.open('GET', this.options.audioUrl, true);
      request.responseType = 'arraybuffer';
      request.onload = () => {
        const audioData = request.response;
        this.audioContext.decodeAudioData(
          audioData,
          (buffer) => {
            this.audioBuffer = buffer;
            this.startWorker();
          },
          () => {
            throw new Error('Error with decoding audio data');
          }
        );
      };
      request.onerror = () => {
        throw new Error('An error occurred while trying to get an audio file');
      };
      request.send();
    } else {
      throw new Error('An error occurred while trying to get an audio file');
    }
  }

  start(): void {
    console.log('Metronome starting');

    if (this.options.playType === MetronomePlayType.Audio) {
      this.startAudioMode();
    } else {
      this.startWorker();
    }
  }

  stop(): void {
    this.timerWorker.postMessage('stop');
    console.log('Metronome stopping');
  }
}
