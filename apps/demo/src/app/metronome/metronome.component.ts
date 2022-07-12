import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { isSupported } from 'angular-audio-context';

import { NoteResolution } from './../models/note-resolution.interface';
import { QueuedNote } from './../models/queued-note.interface';
import { AudioContext } from 'angular-audio-context';
import { IAudioContext, IOscillatorNode } from 'standardized-audio-context';

@Component({
  selector: 'ng-guitar-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetronomeComponent {
  timerWorker!: Worker;
  workerMessage = '';

  tickCount = 60;
  unlocked = false;

  current16thNote = 0; // What note is currently last scheduled?
  isPlaying = false; // Are we currently playing?
  lookahead = 25.0; // How frequently to call scheduling function
  noteLength = 0.05; // length of "beep" (in seconds)
  nextNoteTime = 0.0; // when the next note is due.
  noteResolution = 2; // 0 == 16th, 1 == 8th, 2 == quarter note
  notesInQueue: QueuedNote[] = []; // the notes that have been put into the web audio, and may or may not have played yet. {note, time}
  scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
  tempo = 60.0; // tempo (in beats per minute)
  noteResolutions: NoteResolution[] = [];

  changeMetronomeState() {
    // TODO: Use EventEmitter with form value
    this.play();
  }

  changeResolution(value: number) {
    this.noteResolution = value;
  }

  constructor(
    @Inject(isSupported) public isSupported: boolean,
    private audioContext: AudioContext
  ) {
    this.noteResolutions = this.getNoteResolutions();

    if (typeof Worker !== 'undefined') {
      console.log('Web Workers are supported!');
      this.timerWorker = new Worker(
        new URL('../metrenome.worker.ts', import.meta.url)
      );

      this.timerWorker.onmessage = this.timerOnMessageCallcack.bind(this);
      this.timerWorker.postMessage({ interval: this.lookahead });
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  getNoteResolutions(): NoteResolution[] {
    return [
      { id: 0, name: '16th Notes' },
      { id: 1, name: '8th Notes' },
      { id: 2, name: 'Quarter Notes' },
    ];
  }

  timerOnMessageCallcack(e: MessageEvent) {
    this.workerMessage = e.data;
    if (e.data == 'tick') {
      this.tickCount = +1;
      this.scheduler.call(this);
    } else {
      console.log('message: ' + e.data);
    }
  }

  scheduler(): void {
    // while there are notes that will need to play before the next interval,
    // schedule them and advance the pointer.
    while (
      this.nextNoteTime <
      this.audioContext.currentTime + this.scheduleAheadTime
    ) {
      this.scheduleNote(this.current16thNote, this.nextNoteTime);
      this.nextNote();
    }
  }

  scheduleNote(beatNumber: number, time: number): void {
    console.log(beatNumber);
    console.log(time);

    // push the note on the queue, even if we're not playing.
    this.notesInQueue.push({ note: beatNumber, time: time });

    if (this.noteResolution == 1 && beatNumber % 2) return; // we're not playing non-8th 16th notes
    if (this.noteResolution == 2 && beatNumber % 4) return; // we're not playing non-quarter 8th notes

    // create an oscillator
    this.createSound(beatNumber, time);
  }

  private createSound(beatNumber: number, time: number) {
    const osc = this.createOscillator();
    this.setOscillatorFrequency(beatNumber, osc);

    osc.start(time);
    osc.stop(time + this.noteLength);
  }

  private setOscillatorFrequency(
    beatNumber: number,
    osc: IOscillatorNode<IAudioContext>
  ) {
    if (beatNumber % 16 === 0)
      // beat 0 == high pitch
      osc.frequency.value = 880.0;
    else if (beatNumber % 4 === 0)
      // quarter notes = medium pitch
      osc.frequency.value = 440.0;
    // other 16th notes = low pitch
    else osc.frequency.value = 220.0;
  }

  private createOscillator(): IOscillatorNode<IAudioContext> {
    const osc = this.audioContext.createOscillator();
    osc.connect(this.audioContext.destination);
    return osc;
  }

  nextNote(): void {
    console.log('nextNote');

    // Advance current note and time by a 16th note...
    const secondsPerBeat = 60.0 / this.tempo; // Notice this picks up the CURRENT
    // tempo value to calculate beat length.
    this.nextNoteTime += 0.25 * secondsPerBeat; // Add beat length to last beat time

    this.current16thNote++; // Advance the beat number, wrap to zero
    if (this.current16thNote == 16) {
      this.current16thNote = 0;
    }
  }

  public async beep(): Promise<void> {
    console.log('beep');
    if (this.audioContext.state === 'suspended') {
      console.log('suspended');
      await this.audioContext.resume();
    }

    const oscillatorNode = this.audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this.audioContext.destination);

    oscillatorNode.start();
    oscillatorNode.stop(this.audioContext.currentTime + 0.5);
  }

  public async unlock(): Promise<void> {
    const _scratchBuffer = this.audioContext.createBuffer(1, 1, 22050);
    const source = this.audioContext.createBufferSource();
    source.buffer = _scratchBuffer;
    source.connect(this.audioContext.destination);
    source.start(0);

    if (typeof this.audioContext.resume === 'function') {
      this.audioContext.resume();
    }

    source.onended = () => {
      source.disconnect(0);
      this.unlocked = true;
    };
  }

  play() {
    // show loader
    this.unlock().then(() => {
      console.log('unlock');
      //hide loader

      this.isPlaying = !this.isPlaying;

      if (this.isPlaying) {
        // start playing
        this.current16thNote = 0;
        this.nextNoteTime = this.audioContext.currentTime;
        this.timerWorker.postMessage('start');
        return 'stop';
      } else {
        this.timerWorker.postMessage('stop');
        return 'play';
      }
    });
  }
}
