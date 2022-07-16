import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabScrollerComponent } from './tab-scroller/tab-scroller.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabScrollerComponent],
  exports: [TabScrollerComponent],
})
export class TabScrollerModule {}
