import { Injectable } from '@angular/core';
import { FretboardNote, FretboardString } from '@ng-guitar/fretboard';
import { Notes } from '@ng-guitar/tab-scroller';

@Injectable({
  providedIn: 'root',
})
export class ProgressionService {
  private notes: string[] = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
  ];

  public key = 'C';
  public tuning: string[] = ['E', 'B', 'G', 'D', 'A', 'E'];
  public strings: FretboardString[] = [];
  public practiceMode: 'pentatonic' | 'triads' | 'caged' = 'pentatonic';
  public focusShape: number | null = null; // Specific CAGED shape to focus on

  private cagedShapes: number[][] = [];
  private previousString: number | undefined;
  private previousFret: number | undefined;

  private _frets = 22;

  constructor() {
    this.cagedShapes = this.getCagedShapesForKey(this.key);
  }

  getNextNotes(beat: number): Notes {
    const { string, fret } = this.getValidNote();

    const notesToAdd: string[] = [];
    for (let i = 0; i < this.tuning.length; i++) {
      notesToAdd.push(i === string ? fret.toString() : '');
    }

    return { notes: notesToAdd, bar: beat === 0 };
  }

  private getValidNote() {
    const string = this.getString();
    const fret = this.getFret(string);

    this.previousString = string;
    this.previousFret = fret;

    return { string, fret };
  }

  private getString(): number {
    if (typeof this.previousString === 'undefined') {
      return this.getRandomIntegerInRange(0, this.tuning.length - 1);
    }

    const stringWeights = this.setupStringWeights(this.previousString);
    return this.getWeightedRandom({
      items: this.getNumericArrayOfStringNumbers(),
      weights: stringWeights,
    });
  }

  private getFret(string: number): number {
    const stringDetails = this.strings[string];
    const notes = stringDetails.notes;

    if (typeof this.previousFret === 'undefined') {
      return this.getRandomIntegerInRange(0, this._frets);
    }

    const fretWeights = this.setupFretWeights(notes, string);
    return this.getWeightedRandom({
      items: this.getNumericArrayOfFretNumbers(notes),
      weights: fretWeights,
    });
  }

  private setupStringWeights(previousString: number): number[] {
    const weightMultiplier = this.tuning.length / 100;
    return this.tuning.map((_, i) => {
      const diff = Math.abs(previousString - i);
      const proximityWeight = (this.tuning.length - diff) * weightMultiplier;
      return diff <= 1 ? proximityWeight * 2 : proximityWeight;
    });
  }

  private setupFretWeights(notes: FretboardNote[], string: number): number[] {
    const weightMultiplier = notes.length / 100;
    const fretWeights = new Array(notes.length).fill(0);

    // Add proximity weights
    this.addFretProximityWeights(notes, this.previousFret || 0, weightMultiplier, fretWeights);

    // Add pentatonic and triad weights
    this.addPentatonicAndTriadWeights(notes, weightMultiplier, fretWeights);

    // Apply CAGED shape focus if enabled
    if (this.focusShape !== null) {
      this.applyShapeFocus(notes, weightMultiplier, fretWeights, string);
    }

    return fretWeights;
  }

  private addFretProximityWeights(
    notes: FretboardNote[],
    previousFret: number,
    weightMultiplier: number,
    fretWeights: number[]
  ) {
    notes.forEach((note, i) => {
      const diff = Math.abs(previousFret - i);
      const proximityWeight = diff <= 3 ? weightMultiplier * 3 : weightMultiplier / 2;
      fretWeights[i] += note.inKey ? proximityWeight : 0;
    });
  }

  private addPentatonicAndTriadWeights(
    notes: FretboardNote[],
    weightMultiplier: number,
    fretWeights: number[]
  ) {
    notes.forEach((note, i) => {
      if (note.isPentatonic) {
        fretWeights[i] += weightMultiplier * 2; // Double weight for pentatonic notes
      }
      if (note.isTriad) {
        fretWeights[i] += weightMultiplier * 1.5; // Additional weight for triads
      }
    });
  }

  private applyShapeFocus(
    notes: FretboardNote[],
    weightMultiplier: number,
    fretWeights: number[],
    string: number
  ) {
    const relevantShape = this.cagedShapes[this.focusShape!];
    notes.forEach((note, i) => {
      if (i >= relevantShape[0] && i <= relevantShape[1] && note.inKey) {
        fretWeights[i] += weightMultiplier * 2; // Focus on the selected shape
      }
    });
  }

  private getNumericArrayOfStringNumbers(): number[] {
    return Array.from({ length: this.tuning.length }, (_, i) => i);
  }

  private getNumericArrayOfFretNumbers(notes: FretboardNote[]): number[] {
    return Array.from({ length: notes.length }, (_, i) => i);
  }

  private getCagedShapesForKey(key: string): number[][] {
    const rootIndex = this.notes.indexOf(key);
    const intervals = [0, 3, 5, 7, 10]; // CAGED positions relative to root
    return intervals.map((interval) => {
      const startFret = (rootIndex + interval) % this.notes.length;
      return [startFret, startFret + 4]; // Adjust range as needed
    });
  }

  private getRandomIntegerInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getWeightedRandom({
    items,
    weights,
  }: {
    items: number[];
    weights: number[];
  }): number {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const threshold = Math.random() * totalWeight;

    let runningSum = 0;
    for (let i = 0; i < items.length; i++) {
      runningSum += weights[i];
      if (runningSum >= threshold) {
        return items[i];
      }
    }
    return items[items.length - 1];
  }
}
