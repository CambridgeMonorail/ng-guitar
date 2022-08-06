import { TestBed } from '@angular/core/testing';

import { ProgressionService } from './progression.service';

describe('ProgressionService', () => {
  let service: ProgressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
