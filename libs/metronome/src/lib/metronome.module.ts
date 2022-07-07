import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MetronomeComponent } from './metronome/metronome.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [MetronomeComponent],
  exports: [MetronomeComponent],
})
export class MetronomeModule {}
