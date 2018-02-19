import { TestBed, inject } from '@angular/core/testing';

import { GetIpInfoService } from './get-ip-info.service';

describe('GetIpInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIpInfoService]
    });
  });

  it('should be created', inject([GetIpInfoService], (service: GetIpInfoService) => {
    expect(service).toBeTruthy();
  }));
});
