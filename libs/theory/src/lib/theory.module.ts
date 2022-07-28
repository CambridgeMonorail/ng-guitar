import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FretboardService } from './services/fretboard.service';

@NgModule({
  imports: [CommonModule],
  providers: [FretboardService],
})
export class TheoryModule {}
