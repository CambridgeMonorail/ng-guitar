import { Injectable } from '@angular/core';

import { MusicNote } from './music-note';
import { MusicString } from './music-string';

@Injectable({
  providedIn: 'root',
})
export class FretboardService {
  musicStrings: MusicString[] = [];
  tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E'];
  numFrets = 22;

  public length: number;
  public numStrings: number;

  constructor() {
    this.length = this.tuning.length;
    this.numStrings = this.tuning.length;
    this.numFrets = this.numFrets ? this.numFrets : 20;

    // create array of MusicStrings
    for (let s = 0; s < this.tuning.length; s++) {
      this.musicStrings[s] = new MusicString(this.tuning[s], this.numFrets);
    }
  }

  static parseTuningString(tuning: string) {
    if (typeof tuning !== 'string') {
      throw new Error(`Expectedthis.tuning to be string. Found ${tuning}`);
    }
    const arr = [];
    let current = '';
    for (let s = 0; s < tuning.length; s++) {
      current += tuning[s];
      if (tuning[s + 1] !== '#' && tuning[s + 1] !== 'b') {
        arr.push(MusicNote.resolve(current));
        current = '';
      }
    }
    return arr;
  }

  // getthis.tuning() {
  //   constthis.tuning: string[] = [];
  //   this.musicStrings.forEach((string) => {
  //    this.tuning.push(string.key);
  //   });
  //   returnthis.tuning;
  // }

  find(note: string) {
    const notes: number[][] = [];
    this.musicStrings.forEach((string, i) => {
      notes[i] = string.find(note);
    });
    return notes;
  }

  retune(tuneArr: string[]) {
    if (tuneArr.length !== self.length) {
      throw new Error(
        `Not enough notes given to retune. Expected ${self.length}, found ${tuneArr.length}`
      );
    }

    tuneArr.forEach((note, string) => {
      this.musicStrings[string].tuneTo(note);
    });
    return this.musicStrings;
  }

  tuneAll(steps: number) {
    this.musicStrings.forEach((string) => string.tune(steps));
    return this.musicStrings;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forEach(func: any) {
    // console.log(this);
    for (let i = 0; i < this.numStrings; i++) {
      func.call(this.musicStrings, this.musicStrings[i], i, this.musicStrings);
    }
  }
}
