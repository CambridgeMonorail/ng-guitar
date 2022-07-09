import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AudioContextModule } from 'angular-audio-context';

import { MetronomeComponent } from './metronome/metronome.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AudioContextModule.forRoot('balanced'),
  ],
  declarations: [MetronomeComponent],
  exports: [MetronomeComponent],
})
export class MetronomeModule {}
