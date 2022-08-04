import { Measure } from './../model/measure';
import {
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import { Notes } from '../model/notes';

/**
 * Display Scrolling Tabs
 *
 * @export
 * @class TabScrollerComponent
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'ng-guitar-tab-scroller',
  templateUrl: './tab-scroller.component.html',
  styleUrls: ['./tab-scroller.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items', stagger(300, animateChild())),
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ width: 0, overflow: 'hidden' }),
        animate('.3s ease', style({ width: '*' })),
      ]),
      transition(':leave', [
        style({ width: '*', overflow: 'hidden' }),
        animate('.3s ease', style({ width: 0 })),
      ]),
    ]),
  ],
})
export class TabScrollerComponent implements AfterViewInit {
  private counter = 5;
  private list = [1, 2, 3, 4];

  private mainContext!: CanvasRenderingContext2D;

  private id = 0;

  private isRunning = false;
  private tickCount = 0;
  private numberOfStrings = 6;
  private widthToHeightRatio = 9.312;
  private width = 300;
  private height = 300;
  private pixelsPerMillisecond = 1;

  private _beat = 0;
  private _bpm = 60;
  private _countIn = 2;
  private _resolution = 4;
  private lastBeat = 0;

  private noteHeight = 0;
  private noteWidth = 56;

  private possibleBeats = 0;
  private isPrimed = false;

  _notesList: Notes[] = [];
  _tuning: Notes = { notes: ['E', 'B', 'G', 'D', 'A', 'E'] };

  /**
   * Sets tab scrolling state
   *
   * @memberof TabScrollerComponent
   */
  @Input() set running(value: boolean) {
    if (value) {
      this.start();
    } else {
      this.stop();
    }
  }

  /**
   * Animation Event
   *
   * @memberof TabScrollerComponent
   */
  @Input() set tick(value: number) {
    this.tickCount = value;
    this.click();
  }

  /**
   * Beats per minute
   *
   * @memberof TabScrollerComponent
   */
  @Input() set bpm(value: number) {
    this._bpm = value;
    this.getVelocity();
  }

  /**
   * Current Beat In Bar
   *
   * @memberof TabScrollerComponent
   */
  @Input() set beat(value: number) {
    this._beat = value;
  }

  /**
   * Array Of Notes Making up Guitar Tuning
   *
   * @memberof TabScrollerComponent
   */
  @Input() set tuning(value: string[]) {
    this._tuning = { notes: value };
  }

  @Input() set measure(value: Measure) {
    this.addMeasure(value);
  }

  // TODO: This should really surface the noteslist refactor
  @Input() set notes(value: Notes) {
    const newNote: Notes = structuredClone(value);
    this._notesList.push(newNote);
  }

  @Output() primed = new EventEmitter();

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.width = window.innerWidth;
    this.height = this.getHeight();
    this.noteHeight = this.getNoteHeight();
    this.noteWidth = this.getNoteWidth();
    this.getVelocity();
    this.getPixelsPerMillisecond();

    this.possibleBeats = this.getPossibleBeats();
  }

  getPossibleBeats(): number {
    const totalAvailableBeats = (this.width - 90) / this.noteWidth;
    const possibleBars = Math.floor(totalAvailableBeats / this._resolution);
    const possibleBeats = possibleBars * this._resolution;
    return possibleBeats;
  }

  addMeasure(value: Measure) {
    this.add(value.beats);
  }

  getPixelsPerMillisecond() {
    const beatsPerSecond = this._bpm / 60;
    console.log(beatsPerSecond);
    const possibleNotesToDisplay = this.width / this.noteWidth;
    console.log(possibleNotesToDisplay);
    const millisecondsPerBeat = 1000 / beatsPerSecond;
    console.log(millisecondsPerBeat);
    this.pixelsPerMillisecond = possibleNotesToDisplay / millisecondsPerBeat;
    console.log(this.pixelsPerMillisecond);
    // this.noteMovementPerMillisecond = this.pixelsPerMillisecond;
  }

  getVelocity() {
    const velocity = this.bpm / 60;
  }

  getNoteHeight(): number {
    const noteHeight = this.height / (this.numberOfStrings + 1) - 2;
    return noteHeight;
  }

  getNoteWidth(): number {
    return 62;
  }

  private start(): void {
    this.isRunning = true;
    this.setupCountIn();
  }

  setupCountIn() {
    this._notesList = [];

    for (let bar = 0; bar < this._countIn; bar++) {
      for (let beat = 0; beat < this._resolution; beat++) {
        const bar = beat === 0 ? true : false;
        const newNotes: Notes = {
          bar: bar,
          notes: ['', '', '', '', '', ''],
        };
        this._notesList.push(structuredClone(newNotes));
      }
    }
  }

  private click(): void {
    if (this._beat !== this.lastBeat) {
      // TODO: This should be dynamic dependent on rendered size
      if (this._notesList.length > this.possibleBeats) {
        this.remove(0);
      }
    }

    this.id = requestAnimationFrame(() => this.click);
    this.mainContext.font = '30px serif';
  }

  private stop(): void {
    this.isRunning = false;
    this.isPrimed = false;
    cancelAnimationFrame(this.id);
  }

  private getHeight(): number {
    return this.width / this.widthToHeightRatio;
  }

  remove(index: number) {
    if (!this._notesList.length) return;
    this._notesList.splice(index, 1);
  }

  add(value: Notes[]) {
    this._notesList.push(...value);

    if (!this.isPrimed) {
      if (this._notesList.length === this.possibleBeats) {
        this.primed.emit();
        this.isPrimed = true;
      }
    }
  }
}
