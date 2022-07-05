import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronomeComponent } from './metronome.component';

describe('MetronomeComponent', () => {
  let component: MetronomeComponent;
  let fixture: ComponentFixture<MetronomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetronomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetronomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
