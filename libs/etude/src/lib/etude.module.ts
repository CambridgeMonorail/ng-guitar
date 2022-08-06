import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeComponent } from './etude/etude.component';
import { ProgressionService } from './etude/utils/progression.service';

@NgModule({
  imports: [CommonModule],
  declarations: [EtudeComponent],
  exports: [EtudeComponent],
  providers: [ProgressionService],
})
export class EtudeModule {}
