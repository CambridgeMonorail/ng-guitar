import { Component, Input } from '@angular/core';

import { FretboardString } from './models/fretboard-string.interface';
import { Fretboard } from './models/fretboard.interface';

@Component({
  selector: 'ng-guitar-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss'],
})
export class FretboardComponent {
  /**
   * Overall Fretboard Structure
   *
   * @ignore
   * @type {(Fretboard | undefined)}
   * @memberof FretboardComponent
   */
  _fretboard: Fretboard | undefined;

  /**
   * Strings On Fretboard
   *
   * @ignore
   * @type {(FretboardString[] | undefined)}
   * @memberof FretboardComponent
   */
  _strings: FretboardString[] | undefined;

  /**
   * Number of Frets on the Fretboard
   *
   * @ignore
   * @type {(number | undefined)}
   * @memberof FretboardComponent
   */
  _frets: number | undefined;

  @Input() set fretboard(value: Fretboard | undefined) {
    if (value) {
      this.setupFretboardParameters(value);
    }
  }

  constructor() {
    this._frets = 0;
  }

  /**
   * Setup Fretboard Parameters
   *
   * @ignore
   * @private
   * @param {Fretboard} value
   * @memberof FretboardComponent
   */
  private setupFretboardParameters(value: Fretboard) {
    // TODO: Add trapping for uninitialised cases
    this._fretboard = value;
    this._strings = this._fretboard.strings;
    if (this._fretboard.strings[0].notes) {
      this._frets = this._fretboard.strings[0].notes.length;
    }
  }
}
