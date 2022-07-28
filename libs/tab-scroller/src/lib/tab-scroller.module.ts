import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabScrollerComponent } from './tab-scroller/tab-scroller.component';
import { NoteComponent } from './note/note.component';
import { FretComponent } from './fret/fret.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabScrollerComponent, NoteComponent, FretComponent],
  exports: [TabScrollerComponent, NoteComponent, FretComponent],
})
export class TabScrollerModule {}
