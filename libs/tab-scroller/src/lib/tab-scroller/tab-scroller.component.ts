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
})
export class TabScrollerComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false })
  private canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private id = 0;
  private noteArray: FrettedNote[] = [];
  private isRunning = false;
  private tickCount = 0;
  private widthToHeightRatio = 9.312;
  private width = 300;
  private height = 300;
  private pixelsPerMillisecond = 1;

  private _beat = 0;
  private _bpm = 60;
  private lastBeat = 0;

  private tuning = ['E', 'B', 'G', 'D', 'A', 'E'];

  private noteHeight = 0;
  private noteWidth = 0;

  private stringTuning: StringTunings | undefined;
  private noteMovementPerMillisecond = 1;

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

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (this.canvas && this.canvas instanceof ElementRef) {
      this.ctx = <CanvasRenderingContext2D>(
        this.canvas.nativeElement.getContext('2d')
      );
      this.ngZone.runOutsideAngular(() => this.click());
      this.ctx.fillStyle = 'aqua';
    }

    this.width = window.innerWidth;
    this.height = this.getHeight();
    this.noteHeight = this.getNoteHeight();
    this.noteWidth = this.getNoteWidth();

    this.setCanvasSize();
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
    this.noteMovementPerMillisecond = this.pixelsPerMillisecond;
  }

  getVelocity() {
    const velocity = this.bpm / 60;
    this.noteArray.forEach((note: FrettedNote) => {
      note.velocity = velocity;
    });
  }

  getNoteHeight(): number {
    const noteHeight = this.height / (this.tuning.length + 1) - 2;
    return noteHeight;
  }

  getNoteWidth(): number {
    const noteWidth = this.noteHeight + 30;
    return noteWidth;
  }

  private setCanvasSize() {
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
  }

  private start(): void {
    this.isRunning = true;
    this.noteArray = [];
    this.stringTuning = new StringTunings(
      this.ctx,
      this.tuning,
      this.noteHeight
    );
  }

  private click(): void {
    let endOfBar = false;
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      if (this.stringTuning) {
        this.stringTuning.draw();
      }

      this.cleanUpPlayedNotes(this.noteHeight);

      if (this._beat !== this.lastBeat) {
        let startX = this.noteWidth * 2;
        if (this.noteArray.length > 0) {
          startX = this.noteArray[this.noteArray.length - 1].x + this.noteWidth;
        }
        endOfBar = this._beat < this.lastBeat;
        this.getNextNote(startX, endOfBar);
        this.lastBeat = this._beat;
      }

      this.noteArray.forEach((note: FrettedNote) => {
        note.moveLeft();
      });

      this.id = requestAnimationFrame(() => this.click);

      // const x = this.canvas.nativeElement.width / 2
      // this.ctx.beginPath();
      // this.ctx.moveTo(x, 0);
      // this.ctx.lineTo(x, this.canvas.nativeElement.height);
      // this.ctx.stroke();

      this.ctx.font = '30px serif';
    }
  }

  cleanUpPlayedNotes(noteHeight: number) {
    this.noteArray = this.noteArray.filter(function (note: FrettedNote) {
      console.log(noteHeight);
      console.log(note.y);
      return note.y > noteHeight + 30;
    });
  }

  getNextNote(startX: number, endOfBar: boolean) {
    const string: number = this.getRandomIntegerInRange(1, 6);
    const fret: number = this.getRandomIntegerInRange(0, 24);
    const note = new FrettedNote(
      this.ctx,
      string,
      fret,
      startX,
      this.noteHeight,
      this.width,
      this.noteMovementPerMillisecond,
      endOfBar,
      this.height,
      this.noteWidth
    );
    this.noteArray = this.noteArray.concat(note);
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
}

export class FrettedNote {
  private color = 'aqua';
  private z = 30;
  private lastUpdateTime: number;

  public y = 0;
  public x = 0;
  public velocity = 0;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private string: number,
    private fret: number,
    private startX: number,
    private noteHeight: number,
    private width: number,
    private noteMovementPerMillisecond: number,
    private endOfBar: boolean = false,
    private fretboardHeight: number,
    private noteWidth: number
  ) {
    this.x = this.startX;
    this.y = this.string * this.noteHeight + this.noteHeight;
    this.lastUpdateTime = Date.now();
    this.velocity = this.noteMovementPerMillisecond;
  }

  moveLeft() {
    const currentTime = Date.now();
    const timeDelta = currentTime - this.lastUpdateTime;
    const pixelsToMove = this.velocity * timeDelta;
    this.x = this.x - pixelsToMove;
    this.draw();
    this.lastUpdateTime = currentTime;
  }

  private draw() {
    this.ctx.font = '48px Outfit';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.fret.toString(), this.x, this.y);

    //TODO: draw bar line if end of bar
    if (this.endOfBar) {
      const barX = this.x + this.noteWidth / 2;
      this.ctx.beginPath();
      this.ctx.moveTo(barX, 0);
      this.ctx.lineTo(barX, this.fretboardHeight);
      this.ctx.stroke();
    }
  }
}

export class StringTunings {
  private x = 0;
  private y = 0;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private tuning: string[],
    private noteHeight: number
  ) {}

  draw() {
    this.y = this.noteHeight;
    this.x = this.noteHeight / 2;

    const lineX = this.x + this.noteHeight;

    this.ctx.font = this.noteHeight + 'px Outfit';
    this.ctx.textAlign = 'center';

    this.tuning.forEach((note: string) => {
      this.y += this.noteHeight;
      this.ctx.fillText(note, this.x, this.y);
    });

    // Nut
    this.ctx.beginPath();
    this.ctx.moveTo(lineX, this.noteHeight);
    this.ctx.lineTo(lineX, this.y + this.tuning.length);
    this.ctx.stroke();
  }
}

export class Beat {}

export class Square {
  private color = 'aqua';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {}

  moveRight() {
    this.x++;
    if (this.x > 10) {
      this.x = 0;
    }
    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }
}
