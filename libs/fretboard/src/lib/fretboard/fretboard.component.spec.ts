import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardComponent } from './fretboard.component';

describe('FretboardComponent', () => {
  let component: FretboardComponent;
  let fixture: ComponentFixture<FretboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FretboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FretboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
