import { TestBed, inject } from '@angular/core/testing';

import { GetWeatherReportService } from './get-weather-report.service';

describe('GetWeatherReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWeatherReportService]
    });
  });

  it('should be created', inject([GetWeatherReportService], (service: GetWeatherReportService) => {
    expect(service).toBeTruthy();
  }));
});
