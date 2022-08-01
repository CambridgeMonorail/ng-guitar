import { FretboardKey } from './../models/fretboard-key.enum';
import { Injectable } from '@angular/core';

import { MusicNote } from './music-note';
import { MusicString } from './music-string';

/**
 * Create and manage a fretboard.
 *
 * @export
 * @class FretboardService
 */
@Injectable({
  providedIn: 'root',
})
export class FretboardService {
  length: number;

  /**
   * Strings of the Fretboard.
   *
   * @type {MusicString[]}
   * @memberof FretboardService
   */
  musicStrings: MusicString[] = [];

  /**
   * The current key
   *
   * @type {string[]}
   * @memberof FretboardService
   */
  public key: FretboardKey = FretboardKey.C;

  /**
   * the root note of each of the strings
   *
   * @type {string[]}
   * @memberof FretboardService
   */
  public tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E'];

  /**
   * the number of frets
   *
   * @type {number}
   * @memberof FretboardService
   */
  public numFrets = 22;

  /**
   * the number of strings
   *
   * @type {number}
   * @memberof FretboardService
   */
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

  /**
   * Returns the fretboard as a 2D array of notes.
   *
   * @private
   * @static
   * @param {string} tuning
   * @return {*}
   * @memberof FretboardService
   */
  private static parseTuningString(tuning: string) {
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

  /**
   * Returns all occurrences of a note across the fretboard in a 2D array of fret numbers. For example,
   * if the first occurrence of an A occurs on the 1st string, 5th fret, fretboard.find('A')[0][0] = 5.
   *
   * @param {string} note
   * @return {*}
   * @memberof FretboardService
   */
  public find(note: string) {
    const notes: number[][] = [];
    this.musicStrings.forEach((string, i) => {
      notes[i] = string.find(note);
    });
    return notes;
  }

  /**
   * Re-tunes the fretboard. This is useful when the tuning changes.
   *
   * @param {string[]} tuneArr
   * @return {*}
   * @memberof FretboardService
   */
  public retune(tuneArr: string[]) {
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

  /**
   * Tunes the fretboard up or down a given number of half-steps.
   *
   * @param {number} steps
   * @return {*}
   * @memberof FretboardService
   */
  public tuneAll(steps: number) {
    this.musicStrings.forEach((string) => string.tune(steps));
    return this.musicStrings;
  }

  /**
   *
   *
   * @private
   * @param {*} func
   * @memberof FretboardService
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private forEach(func: any) {
    // console.log(this);
    for (let i = 0; i < this.numStrings; i++) {
      func.call(this.musicStrings, this.musicStrings[i], i, this.musicStrings);
    }
  }
}
