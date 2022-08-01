import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Displays a Fretted Note
 *
 * @export
 * @class NoteComponent
 */
@Component({
  selector: 'ng-guitar-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  /**
   * Note Name
   *
   * @memberof NoteComponent
   */
  @Input() note = '';
}
