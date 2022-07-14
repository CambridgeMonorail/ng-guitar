import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard/fretboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FretboardComponent],
  exports: [FretboardComponent],
})
export class FretboardModule {}
