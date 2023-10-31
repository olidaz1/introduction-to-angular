import { TestBed } from '@angular/core/testing';

import { HousingLocationListServiceService } from './housing-location-list-service.service';

describe('HousingLocationListServiceService', () => {
  let service: HousingLocationListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingLocationListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
