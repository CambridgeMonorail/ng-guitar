import {
  animate,
  animateChild,
  stagger,
  style,
  transition,
  trigger,
  query,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';

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
  // New stuff start
  counter = 5;
  list = [1, 2, 3, 4];

  notesList: string[][] = [];

  // New stuff end

  @ViewChild('backgroundCanvas', { static: false })
  private backgroundCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('mainCanvas', { static: false })
  private mainCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('overlayCanvas', { static: false })
  private overlayCanvas!: ElementRef<HTMLCanvasElement>;

  private backgroundContext!: CanvasRenderingContext2D;
  private mainContext!: CanvasRenderingContext2D;
  private overlayContext!: CanvasRenderingContext2D;

  private id = 0;

  private isRunning = false;
  private tickCount = 0;
  private widthToHeightRatio = 9.312;
  private width = 300;
  private height = 300;
  private pixelsPerMillisecond = 1;

  private _beat = 0;
  private _bpm = 60;
  private lastBeat = 0;

  private noteHeight = 0;
  private noteWidth = 0;

  _tuning = ['E', 'B', 'G', 'D', 'A', 'E'];

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

  @Input() set tick(value: number) {
    this.tickCount = value;
    this.click();
  }

  @Input() set bpm(value: number) {
    this._bpm = value;
    this.getVelocity();
  }

  @Input() set beat(value: number) {
    this._beat = value;
  }

  @Input() set tuning(value: string[]) {
    this._tuning = value;
  }

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.width = window.innerWidth;
    this.height = this.getHeight();
    this.noteHeight = this.getNoteHeight();
    this.noteWidth = this.getNoteWidth();
    this.getVelocity();
    this.getPixelsPerMillisecond();
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
    const noteHeight = this.height / (this._tuning.length + 1) - 2;
    return noteHeight;
  }

  getNoteWidth(): number {
    const noteWidth = this.noteHeight + 30;
    return noteWidth;
  }

  private start(): void {
    this.isRunning = true;

    //setupcount in
    const resolution = 8;
    for (let i = 0; i < resolution; i++) {
      this.add(['', '', '', '', '', '']);
    }
    const backlog = 16;
    for (let i = 0; i < backlog; i++) {
      this.getNextNote(false);
    }
  }

  private click(): void {
    let startOfBar = false;

    if (this._beat !== this.lastBeat) {
      startOfBar = this._beat < this.lastBeat;
      this.getNextNote(startOfBar);
      this.lastBeat = this._beat;

      if (this.notesList.length > 24) {
        this.remove(0);
      }
    }

    this.id = requestAnimationFrame(() => this.click);
    this.mainContext.font = '30px serif';
  }

  getNextNote(startOfBar: boolean) {
    const { string, fret }: { string: number; fret: number } =
      this.getValidNote();

    const notesToAdd: string[] = [];
    for (let i = 0; i < 6; i++) {
      if (string === i) {
        notesToAdd.push(fret.toString());
      } else {
        notesToAdd.push('');
      }
    }

    this.add(notesToAdd);
  }

  private getValidNote() {
    const string: number = this.getRandomIntegerInRange(0, 5);
    const fret: number = this.getRandomIntegerInRange(0, 24);
    return { string, fret };
  }

  getRandomIntegerInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private stop(): void {
    this.isRunning = false;
    cancelAnimationFrame(this.id);
  }

  private getHeight(): number {
    return this.width / this.widthToHeightRatio;
  }

  // New stuff start
  remove(index: number) {
    if (!this.notesList.length) return;
    this.notesList.splice(index, 1);
  }

  add(value: string[]) {
    this.notesList.push(value);
  }

  // New stuff end
}
