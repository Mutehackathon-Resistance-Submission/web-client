import { TestBed, inject } from '@angular/core/testing';

import { HomelessTrackingService } from './homeless-tracking.service';

describe('HomelessTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomelessTrackingService]
    });
  });

  it('should ...', inject([HomelessTrackingService], (service: HomelessTrackingService) => {
    expect(service).toBeTruthy();
  }));
});
