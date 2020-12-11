import { TestBed } from '@angular/core/testing';

import { DatacomponantService } from './datacomponant.service';

describe('DatacomponantService', () => {
  let service: DatacomponantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacomponantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
