import { Component, Input, OnInit } from '@angular/core';
import { FretboardString } from './models/fretboard-string.interface';
import { Fretboard } from './models/fretboard.interface';

@Component({
  selector: 'ng-guitar-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss'],
})
export class FretboardComponent {
  _fretboard: Fretboard | undefined;
  _strings: FretboardString[] | undefined;
  _frets: number | undefined;

  @Input() set fretboard(value: Fretboard | undefined) {
    if (value) {
      this.setupFretboardParameters(value);
    }
  }

  constructor() {
    this._frets = 0;
  }

  private setupFretboardParameters(value: Fretboard) {
    // TODO: Add trapping for uninitialised cases
    this._fretboard = value;
    this._strings = this._fretboard.strings;
    if (this._fretboard.strings[0].notes) {
      this._frets = this._fretboard.strings[0].notes.length;
    }
  }
}
