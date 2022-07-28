import { MusicNote } from './music-note';

export class MusicString {
  musicNotes: MusicNote[] = [];
  key: string;
  numFrets: number;
  length: number;

  constructor(key: string, numFrets: number) {
    if (typeof key !== 'string') {
      throw new Error('String must have a key.');
    }
    this.key = MusicNote.resolve(key);
    this.numFrets = numFrets ? numFrets : 20;
    this.length = this.numFrets;
    for (let i = 0; i <= this.numFrets; i++) {
      this.musicNotes[i] = new MusicNote(MusicNote.up(key, i));
    }
  }

  find(note: string) {
    const resolved = MusicNote.resolve(note);
    const frets: number[] = [];
    this.musicNotes.forEach((n, i) => {
      if (n.note === resolved) {
        frets.push(i);
      }
    });
    return frets;
  }

  tuneTo(note: string) {
    const steps = MusicNote.diff(this.key, note);
    this.musicNotes.forEach((n) => {
      n.note = n.tuned(steps);
    });
    this.key = MusicNote.resolve(note);
    return this;
  }

  tune(steps: number) {
    this.musicNotes.forEach((n) => {
      n.note = n.tuned(steps);
    });
    this.key = this.musicNotes[0].note;
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forEach(func: any) {
    for (let i = 0; i <= this.numFrets; i++) {
      func.call(this.musicNotes, this.musicNotes[i], i, this);
    }
  }
}
