import { Notes } from './../model/notes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Displays a Fret
 *
 * @export
 * @class FretComponent
 */
@Component({
  selector: 'ng-guitar-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FretComponent {
  /**
   * Notes on the Fret
   *
   * @type {Notes[]}
   * @memberof FretComponent
   */
  @Input() notes: Notes = {} as Notes;
}
