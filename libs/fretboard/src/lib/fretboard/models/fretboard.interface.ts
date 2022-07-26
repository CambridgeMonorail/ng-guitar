import { FretboardString } from './fretboard-string.interface';

export interface Fretboard {
  tuning: string[];
  strings: FretboardString[];
}
