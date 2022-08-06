import { TabScrollerComponent } from './../../../../../libs/tab-scroller/src/lib/tab-scroller/tab-scroller.component';
import { Notes } from './../../../../../libs/tab-scroller/src/lib/model/notes';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { ProgressionService } from '@ng-guitar/etude';
import { Fretboard, FretboardString } from '@ng-guitar/fretboard';
import { FretboardService } from '@ng-guitar/theory';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Measure } from '@ng-guitar/tab-scroller';

@Component({
  selector: 'ng-guitar-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  @ViewChild(TabScrollerComponent) tabScroller:
    | TabScrollerComponent
    | undefined;

  private scrollerPrimed = false;
  private _countIn = 2;
  private _resolution = 4;
  private numberOfStrings = 6;

  public version = environment.VERSION;

  public running = false;
  public tickCount = 0;
  public currentBeat = 0;
  public notes: Notes = { notes: ['', '', '', '', '', ''] };
  // TODO: Review scoping this introduces coupling
  public measure: Measure = { beats: [] };

  public fretboard: Fretboard;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public key = 'C';

  public notesInKey = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

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

    console.log(this.fretboard.key);
    console.log(this.fretboard.strings);
    console.log(this.fretboard.tuning);

    this.progressionService.key = this.fretboard.key;
    this.progressionService.tuning = this.fretboard.tuning;
    this.progressionService.strings = this.fretboard.strings;
  }

  private setupFretboard() {
    const newFretboard: Fretboard = {
      tuning: this.fretboardService.tuning,
      key: this.fretboardService.key,
      strings: [],
    };

    this.key = this.fretboardService.key.valueOf();

    this.fretboardService.musicStrings.forEach((string) => {
      const newString: FretboardString = { note: string.key, notes: [] };

      string.musicNotes.forEach((note, index) => {
        newString.notes.push({
          note: note.note,
          fret: index,
          active: false,
          inKey: this.notesInKey.includes(note.note),
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
    this.setState(val);
  }

  ticked(val: number): void {
    this.tickCount = val;
  }

  beat(val: number): void {
    this.notes = this.progressionService.getNextNotes(val);
    this.currentBeat = val;
  }

  private setState(running: boolean) {
    this.running = running;
    if (this.running) {
      this.tickCount = 0;
      this.currentBeat = 0;
      this.setInitialTickerState();
    }
  }

  private setInitialTickerState() {
    const newMeasure: Measure = { beats: [] };
    newMeasure.beats.push(...this.setupCountIn());
    newMeasure.beats.push(...this.primeTabScroller());
    this.measure = newMeasure;
  }

  setupCountIn() {
    // TODO: This needs validation add bar markers

    const beatsToAdd: Notes[] = [];
    for (let bar = 0; bar < this._countIn; bar++) {
      for (let beat = 0; beat < this._resolution; beat++) {
        const bar = beat === 0 ? true : false;
        const newNotes: Notes = {
          bar: bar,
          notes: ['', '', '', '', '', ''],
        };
        beatsToAdd.push(newNotes);
      }
    }
    return beatsToAdd;
  }

  private primeTabScroller() {
    const beatsToAdd: Notes[] = [];
    if (!this.scrollerPrimed) {
      if (this.tabScroller) {
        //TODO: This needs validation - check off by one error
        let barBeat = 0;
        for (let i = 0; i < this.tabScroller?.capacity; i++) {
          beatsToAdd.push(this.progressionService.getNextNotes(barBeat));
          barBeat++;
          if (barBeat >= this._resolution) {
            barBeat = 0;
          }
        }
      }
    }
    return beatsToAdd;
  }
}
