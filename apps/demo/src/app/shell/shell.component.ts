import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FretboardService } from '@ng-guitar/theory';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Component({
  selector: 'ng-guitar-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  public version = environment.VERSION;
  public running = false;
  public tickCount = 0;
  public currentBeat = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    fretboardService: FretboardService
  ) {
    fretboardService.musicStrings.forEach((string) => {
      console.log('String: ' + string.key);
      string.musicNotes.forEach((note) => {
        console.log('Note: ' + note.note);
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openedChange(val: any): void {
    console.log('openedChange: ', val);
  }

  metronomeStateChanged(val: boolean) {
    console.log('metronomeStateChanged: ', val);
    this.running = val;
  }

  ticked(val: number): void {
    this.tickCount = val;
  }

  beat(val: number): void {
    this.currentBeat = val;
  }
}
