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
  private squareArray: Square[] = [];
  private isRunning = false;
  private tickCount = 0;

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

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (this.canvas && this.canvas instanceof ElementRef) {
      this.ctx = <CanvasRenderingContext2D>(
        this.canvas.nativeElement.getContext('2d')
      );
      this.ngZone.runOutsideAngular(() => this.click());
      this.ctx.fillStyle = 'aqua';
    }
  }

  private start(): void {
    this.isRunning = true;
    const square = new Square(this.ctx);
    this.squareArray = this.squareArray.concat(square);
  }

  private click(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squareArray.forEach((square: Square) => {
      square.moveRight();
    });
    this.id = requestAnimationFrame(() => this.click);
  }

  private stop(): void {
    this.isRunning = false;
    cancelAnimationFrame(this.id);
  }
}

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

export class FrettedNote {
  private color = 'aqua';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {}

  moveLeft() {
    this.x++;
    if (this.x > 2328) this.x = 0;
  }

  private draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }
}

export class Beat {}
