import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MetronomeFormModel } from '../models/mentronome-form.type';

import { TForm } from '../models/tForm.type';

@Component({
  selector: 'ng-guitar-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetronomeComponent {
  metronomeForm: TForm<MetronomeFormModel> = this.formBuilder.group({
    tempo: ['120'],
    sound: [''],
    visualization: [''],
  }) as unknown as TForm<MetronomeFormModel>;

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.metronomeForm.value);
  }

  constructor(private formBuilder: FormBuilder) {}
}
