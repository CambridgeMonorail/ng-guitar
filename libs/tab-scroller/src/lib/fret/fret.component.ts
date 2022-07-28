import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ng-guitar-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FretComponent {
  @Input() notes: string[] = [];
}
