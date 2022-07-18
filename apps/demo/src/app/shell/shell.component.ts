import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

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
}
