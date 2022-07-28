import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FretComponent } from './fret.component';

describe('FretComponent', () => {
  let component: FretComponent;
  let fixture: ComponentFixture<FretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FretComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
