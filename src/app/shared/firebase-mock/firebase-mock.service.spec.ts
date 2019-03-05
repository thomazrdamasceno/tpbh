import { TestBed } from '@angular/core/testing';

import { FirebaseMockService } from './firebase-mock.service';

describe('FirebaseMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseMockService = TestBed.get(FirebaseMockService);
    expect(service).toBeTruthy();
  });
});
