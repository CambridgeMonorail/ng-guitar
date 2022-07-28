import { TestBed } from '@angular/core/testing';

import { FretboardService } from './fretboard.service';

describe('FretboardService', () => {
  let service: FretboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
