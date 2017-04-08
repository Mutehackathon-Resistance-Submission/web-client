import { TestBed, inject } from '@angular/core/testing';

import { GpsTrackingService } from './gps-tracking.service';

describe('GpsTrackingService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpsTrackingService]
    });
  });

  it('should ...', inject([GpsTrackingService], (service: GpsTrackingService) => {
    expect(service).toBeTruthy();
  }));

});
