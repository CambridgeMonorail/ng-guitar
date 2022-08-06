import { Injectable } from '@angular/core';
import { FretboardString } from '@ng-guitar/fretboard';
import { Notes } from '@ng-guitar/tab-scroller';

/**
 * The progression service returns notes in a progression.
 * To keep practice interesting these should be randomised, but
 * the selection should be weighted by good notes to play given last
 * note, key and location within bar
 *
 * @export
 * @class ProgressionService
 */
@Injectable({
  providedIn: 'root',
})
export class ProgressionService {
  private notes: string[] = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ];
  private major: number[] = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

  private previousString: number | undefined;
  private previousFret: number | undefined;

  private _countIn = 2;
  private _currentBar = 0;
  private _resolution = 4;
  private _startOfBar = false;

  public key = 'C';
  public tuning: string[] = ['E', 'B', 'G', 'D', 'A', 'E'];

  //TO DO: Review scoping this introduces coupling
  public strings: FretboardString[] = [];

  getNextNotes(beat: number): Notes {
    this._startOfBar = beat === 0 ? true : false;

    const { string, fret }: { string: number; fret: number } =
      this.getValidNote();

    const notesToAdd: string[] = [];
    for (let i = 0; i < 6; i++) {
      if (string === i) {
        notesToAdd.push(fret.toString());
      } else {
        notesToAdd.push('');
      }
    }

    const notes: Notes = { notes: notesToAdd, bar: this._startOfBar };

    return notes;
  }

  private getValidNote() {
    const string: number = this.getString();
    const fret: number = this.getFret();

    this.setPreviousState(string, fret);
    return { string, fret };
  }

  getString(): number {
    let string = 0;
    if (typeof this.previousString === 'undefined') {
      string = this.getRandomIntegerInRange(0, 5);
    } else {
      const stringWeights: number[] = this.setupStringWeights(
        this.previousString
      );
      const chooseFrom = this.getNumericArrayOfStringNumbers();

      string = this.getWeightedRandom({
        items: chooseFrom,
        weights: stringWeights,
      });
    }
    this.previousString = string;
    return string;
  }

  getNumericArrayOfStringNumbers(): number[] {
    const stringNumbers: number[] = [];
    for (let i = 0; i < this.strings.length; i++) {
      stringNumbers.push(i);
    }
    return stringNumbers;
  }

  private setupStringWeights(previousString: number): number[] {
    const stringWeights: number[] = [];
    for (let i = 0; i < this.strings.length; i++) {
      // console.log('string', i);
      const diff = Math.abs(previousString - i);
      // console.log('diff',diff);
      const inverse = this.strings.length - diff;
      // console.log('sized',inverse);
      const weightMultiplier = this.strings.length / 100;
      // console.log('weightMultiplier', weightMultiplier);
      const weight = inverse * weightMultiplier;
      // console.log('weight', weight);
      stringWeights.push(weight);
    }

    // let validate = 0;
    // for(let i = 0; i < stringWeights.length; i++) {
    //   validate += stringWeights[i];
    // }

    // console.log('validate', validate);

    return stringWeights;
  }

  getFret(): number {
    const fret: number = this.getRandomIntegerInRange(0, 24);
    return fret;
  }

  private setPreviousState(nextString: number, nextFret: number) {
    this.previousString = nextString;
    this.previousFret = nextFret;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   *
   * @param {number} min
   * @param {number} max
   * @return {*}  {number}
   * @memberof Random
   */
  public getRandomIntegerInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Picks the random item based on its weight.
   * The items with higher weight will be picked more often (with a higher probability).
   *
   * For example:
   * - items = ['banana', 'orange', 'apple']
   * - weights = [0, 0.2, 0.8]
   * - weightedRandom(items, weights) in 80% of cases will return 'apple', in 20% of cases will return
   * 'orange' and it will never return 'banana' (because probability of picking the banana is 0%)
   *
   * @param {number[]} items
   * @param {number[]} weights
   * @returns {item: any}
   */
  /* eslint-disable consistent-return */

  public getWeightedRandom({
    items,
    weights,
  }: {
    items: number[];
    weights: number[];
  }): number {
    let item = 0;
    let index = 0;

    if (items.length !== weights.length) {
      throw new Error('Items and weights must be of the same size');
    }

    if (!items.length) {
      throw new Error('Items must not be empty');
    }

    // Preparing the cumulative weights array.
    // For example:
    // - weights = [1, 4, 3]
    // - cumulativeWeights = [1, 5, 8]
    const cumulativeWeights: number[] = [];
    for (let i = 0; i < weights.length; i += 1) {
      cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
    }

    // Getting the random number in a range of [0...sum(weights)]
    // For example:
    // - weights = [1, 4, 3]
    // - maxCumulativeWeight = 8
    // - range for the random number is [0...8]
    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();

    // Picking the random item based on its weight.
    // The items with higher weight will be picked more often.
    for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
      if (cumulativeWeights[itemIndex] >= randomNumber) {
        item = items[itemIndex];
        index = itemIndex;
      }
    }

    console.log(index);
    return item;
  }
}
