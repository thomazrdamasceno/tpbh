import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalyticsService = TestBed.get(GoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
