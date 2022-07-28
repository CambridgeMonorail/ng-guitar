import { FretboardService } from '@ng-guitar/theory';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtudeModule } from '@ng-guitar/etude';
import { FretboardModule } from '@ng-guitar/fretboard';
import { TabScrollerModule } from '@ng-guitar/tab-scroller';
import { AudioContextModule } from 'angular-audio-context';
import { DrawerRailModule } from 'angular-material-rail-drawer';

import { AppComponent } from './app.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [AppComponent, ShellComponent, MetronomeComponent],
  imports: [
    AudioContextModule.forRoot('balanced'),
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    DrawerRailModule,
    EtudeModule,
    FlexLayoutModule,
    FormsModule,
    FretboardModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TabScrollerModule,
  ],
  bootstrap: [AppComponent],
  providers: [FretboardService],
})
export class AppModule {}
