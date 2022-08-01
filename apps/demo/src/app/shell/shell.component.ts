import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ProgressionService } from '@ng-guitar/etude';
import { Fretboard, FretboardString } from '@ng-guitar/fretboard';
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

  public fretboard: Fretboard;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public key = 'C';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fretboardService: FretboardService,
    private progressionService: ProgressionService
  ) {
    this.fretboard = this.setupFretboard();

    this.fretboard.strings.forEach((string) => {
      string.notes.forEach((note) => {
        note.active = false;
      });
    });

    console.log('Fretboard: ', this.fretboard);
  }

  private setupFretboard() {
    const newFretboard: Fretboard = {
      tuning: this.fretboardService.tuning,
      key: this.fretboardService.key,
      strings: [],
    };

    this.key = this.fretboardService.key.valueOf();

    this.fretboardService.musicStrings.forEach((string) => {
      console.log('String: ' + string.key);
      const newString: FretboardString = { note: string.key, notes: [] };

      string.musicNotes.forEach((note, index) => {
        console.log('Note: ' + note.note);
        newString.notes.push({
          note: note.note,
          fret: index,
          active: false,
          inKey: false,
        });
      });
      newFretboard.strings.push(newString);
    });
    return newFretboard;
  }

  openedChange(val: boolean): void {
    console.log('openedChange: ', val);
  }

  metronomeStateChanged(val: boolean) {
    console.log('metronomeStateChanged: ', val);

    this.setState(val);
  }

  ticked(val: number): void {
    this.tickCount = val;
  }

  beat(val: number): void {
    this.currentBeat = val;
    const next = this.progressionService.getNextNote(1);
    console.log('next: ', next);
  }

  private setState(running: boolean) {
    this.running = running;
    if (this.running) {
      this.tickCount = 0;
      this.currentBeat = 0;
    }
  }
}
