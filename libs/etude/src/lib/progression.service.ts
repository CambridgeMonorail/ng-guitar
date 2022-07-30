import { Injectable } from '@angular/core';

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

  constructor() {
    console.log('ProgressionService');
  }

  getNextNote(note: number): number {
    return note + 1;
  }
}
