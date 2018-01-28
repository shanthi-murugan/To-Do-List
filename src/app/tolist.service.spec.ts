import { TestBed, inject } from '@angular/core/testing';

import { TolistService } from './tolist.service';

describe('TolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TolistService]
    });
  });

  it('should be created', inject([TolistService], (service: TolistService) => {
    expect(service).toBeTruthy();
  }));
});
