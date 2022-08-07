import { Injectable } from '@angular/core';
import { FretboardNote, FretboardString } from '@ng-guitar/fretboard';
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

  // TO DO: these should be dynamic driven by key
  private cagedShapes: number[][] = [
    [0, 3],
    [2, 5],
    [4, 8],
    [7, 10],
    [9, 13],
    [12, 15],
    [14, 17],
    [16, 20],
    [19, 22],
  ];

  private previousString: number | undefined;
  private previousFret: number | undefined;

  private _countIn = 2;
  private _currentBar = 0;
  private _resolution = 4;
  private _frets = 22;
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
    const fret: number = this.getFret(string);

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

    // Proximity Weights
    const weightMultiplier = this.strings.length / 100;
    for (let i = 0; i < this.strings.length; i++) {
      const diff = Math.abs(previousString - i);
      const inverse = this.strings.length - diff;
      let weight = inverse * weightMultiplier;
      if (diff < 2) {
        weight = weight * 2;
      }
      stringWeights.push(weight);
    }

    return stringWeights;
  }

  getFret(string: number): number {
    let fret = 0;

    const stringDetails: FretboardString = this.strings[string];
    const notes: FretboardNote[] = stringDetails.notes;

    if (typeof this.previousFret === 'undefined') {
      //TO DO: If no previous fret then get first root on string
      fret = this.getRandomIntegerInRange(0, this._frets);
    } else {
      const fretWeights: number[] = this.setupFretWeights(notes);
      const chooseFrom = this.getNumericArrayOfFretNumbers(notes);
      fret = this.getWeightedRandom({
        items: chooseFrom,
        weights: fretWeights,
      });
    }

    return fret;
  }

  private setupFretWeights(notes: FretboardNote[]): number[] {
    const fretWeights: number[] = [];
    const previousFret = this.previousFret || 0;
    const weightMultiplier = notes.length / 100;

    // Proximity Weights
    this.addFretProximityWeights(
      notes,
      previousFret,
      weightMultiplier,
      fretWeights
    );

    // Add On Caged Shape Weights
    this.addCagedShapeWeights(notes, weightMultiplier, fretWeights);

    // Add on Chord Weights (if applicable) i.e. playing the changes

    // If first note of bar then add increased chord weight

    return fretWeights;
  }

  private addCagedShapeWeights(
    notes: FretboardNote[],
    weightMultiplier: number,
    fretWeights: number[]
  ) {
    const previousFret = this.previousFret || 0;

    console.log('previousFret', previousFret);
    const relevantShapes = this.cagedShapes.filter((cagedShape) => {
      let relevant = false;
      if (previousFret >= cagedShape[0] && previousFret <= cagedShape[1]) {
        relevant = true;
      }
      return relevant;
    });
    if (relevantShapes.length > 0) {
      const minFret = relevantShapes
        .map((cagedShape) => cagedShape[0])
        .reduce((a, b) => Math.min(a, b));

      console.log('minFret', minFret);

      const maxFret = relevantShapes
        .map((cagedShape) => cagedShape[1])
        .reduce((a, b) => Math.max(a, b));
      console.log('minFret', maxFret);

      for (let i = minFret; i <= maxFret; i++) {
        let weight: number;

        if (notes[i].inKey === true) {
          const diff = Math.abs(previousFret - i);
          const inverse = notes.length - diff;
          weight = inverse * weightMultiplier;
        } else {
          weight = 0;
        }
        fretWeights[i] += weight * 1.5;
      }
    }
  }

  private addFretProximityWeights(
    notes: FretboardNote[],
    previousFret: number,
    weightMultiplier: number,
    fretWeights: number[]
  ) {
    for (let i = 0; i < notes.length; i++) {
      let weight: number;

      if (notes[i].inKey === true) {
        let stretchAdjustedWeight = weightMultiplier;
        const diff = Math.abs(previousFret - i);
        const inverse = notes.length - diff;
        if (diff < 1 || diff > 3) {
          stretchAdjustedWeight = weightMultiplier / 2;
        } else {
          stretchAdjustedWeight = weightMultiplier * 3;
        }
        weight = inverse * stretchAdjustedWeight;
      } else {
        weight = 0;
      }
      fretWeights.push(weight);
    }
  }

  getNumericArrayOfFretNumbers(notes: FretboardNote[]): number[] {
    const fretNumbers: number[] = [];
    for (let i = 0; i < notes.length; i++) {
      fretNumbers.push(i);
    }
    return fretNumbers;
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
    // First, we loop the main itemsset to count up the total weight.
    // We're starting the counter at one because the upper boundary
    // of Math.random() is exclusive.
    let total = 0;
    for (let i = 0; i < items.length; ++i) {
      total += weights[i];
    }

    // Total in hand, we can now pick a random value akin to our
    // random index from before.
    const threshold = Math.random() * total;

    // Now we just need to loop through the main items one more time
    // until we discover which value would live within this
    // particular threshold. We need to keep a running count of
    // weights as we go, so let's just reuse the "total" variable
    // since it was already declared.
    total = 0;
    for (let i = 0; i < items.length - 1; ++i) {
      // Add the weight to our running total.
      total += weights[i];

      // If this value falls within the threshold, we're done!
      if (total >= threshold) {
        return items[i];
      }
    }

    // Wouldn't you know it, we needed the very last entry!
    return items[items.length - 1];
  }
}
