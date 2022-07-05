import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetronomeComponent } from './metronome/metronome.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MetronomeComponent],
  exports: [MetronomeComponent],
})
export class MetronomeModule {}
