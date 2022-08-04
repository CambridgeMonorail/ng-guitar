import { Injectable } from '@angular/core';
import { Notes } from '@ng-guitar/tab-scroller';

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
  private _key = 'C';
  private _countIn = 2;
  private _currentBar = 0;
  private _resolution = 4;
  private _startOfBar = false;

  public strings: string[] = [];

  public set key(key: string) {
    this._key = key;
  }

  constructor() {
    console.log('ProgressionService');
  }

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
    return { string, fret };
  }

  getString(): number {
    const string: number = this.getRandomIntegerInRange(0, 5);
    return string;
  }

  getFret(): number {
    const fret: number = this.getRandomIntegerInRange(0, 24);
    return fret;
  }

  private setPreviousState(nextString: number, nextFret: number) {
    this.previousString = nextString;
    this.previousFret = nextFret;
  }

  private getRandomIntegerInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
