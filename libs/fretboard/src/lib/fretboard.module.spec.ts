import { async, TestBed } from '@angular/core/testing';
import { FretboardModule } from './fretboard.module';

describe('FretboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FretboardModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FretboardModule).toBeDefined();
  });
});
