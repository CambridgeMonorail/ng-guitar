import {
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, Input, NgZone } from '@angular/core';

import { Notes } from '../model/notes';
import { Measure } from './../model/measure';

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
  /**
   * @ignore
   */
  private id = 0;

  /**
   * @ignore
   */
  private numberOfStrings = 6;

  /**
   * @ignore
   */
  private widthToHeightRatio = 9.312;

  /**
   * @ignore
   */
  private width = 300;

  /**
   * @ignore
   */
  private height = 300;

  /**
   * @ignore
   */
  private pixelsPerMillisecond = 1;

  /**
   * @ignore
   */
  private _beat = 0;

  /**
   * @ignore
   */
  private _bpm = 60;

  /**
   * @ignore
   */
  private _resolution = 4;

  /**
   * @ignore
   */
  private lastBeat = 0;

  private noteHeight = 0;
  /**
   * @ignore
   */
  private noteWidth = 56;

  /**
   * @ignore
   */
  _notesList: Notes[] = [];

  /**
   * @ignore
   */
  _tuning: Notes = { notes: ['E', 'B', 'G', 'D', 'A', 'E'] };

  /**
   * @ignore
   */
  public capacity = 0;

  /**
   * @ignore
   */
  public currentBeats = 0;

  /**
   * @ignore
   */
  isRunning = false;

  /**
   * @ignore
   */
  velocity = 0;

  /**
   * @ignore
   */
  tickCount = 0;

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
    console.log('beat', value);
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
    this.currentBeats = this._notesList.length;
  }

  constructor(private ngZone: NgZone) {}
  ngAfterViewInit(): void {
    this.width = window.innerWidth;
    this.height = this.getHeight();
    this.noteHeight = this.getNoteHeight();
    this.noteWidth = this.getNoteWidth();
    this.getVelocity();
    this.getPixelsPerMillisecond();

    this.capacity = this.getPossibleBeats();
  }

  getPossibleBeats(): number {
    const totalAvailableBeats = (this.width - 90) / this.noteWidth;
    const possibleBars = Math.floor(totalAvailableBeats / this._resolution);
    const capacity = possibleBars * this._resolution;
    return capacity;
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

  getNoteHeight(): number {
    const noteHeight = this.height / (this.numberOfStrings + 1) - 2;
    return noteHeight;
  }

  /**
   * @ignore
   */
  getNoteWidth(): number {
    return 62;
  }

  /**
   * @ignore
   */
  private start(): void {
    this.isRunning = true;
  }

  /**
   * @ignore
   */
  private click(): void {
    if (this._beat !== this.lastBeat) {
      console.log('beat', this._beat);
      this.lastBeat = this._beat;
      this.remove(0);
      this.currentBeats = this._notesList.length;
    }
  }

  /**
   * @ignore
   */
  private stop(): void {
    this._notesList = [];
    this.isRunning = false;
    cancelAnimationFrame(this.id);
  }

  /**
   * @ignore
   */
  private getHeight(): number {
    return this.width / this.widthToHeightRatio;
  }

  /**
   * @ignore
   */
  remove(index: number) {
    if (!this._notesList.length) return;
    this._notesList.splice(index, 1);
  }

  /**
   * @ignore
   */
  add(value: Notes[]) {
    this._notesList.push(...value);
    this.currentBeats = this._notesList.length;
  }

  /**
   * @ignore
   */
  getVelocity() {
    this.velocity = this.bpm / 60;
  }
}
