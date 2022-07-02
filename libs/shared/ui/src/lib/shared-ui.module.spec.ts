import { async, TestBed } from '@angular/core/testing';
import { SharedUiModule } from './shared-ui.module';

describe('SharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedUiModule).toBeDefined();
  });
});
