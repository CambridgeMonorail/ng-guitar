import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeComponent } from './etude/etude.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EtudeComponent],
  exports: [EtudeComponent],
})
export class EtudeModule {}
