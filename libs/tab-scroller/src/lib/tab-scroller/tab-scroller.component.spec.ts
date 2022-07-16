import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabScrollerComponent } from './tab-scroller.component';

describe('TabScrollerComponent', () => {
  let component: TabScrollerComponent;
  let fixture: ComponentFixture<TabScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabScrollerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
