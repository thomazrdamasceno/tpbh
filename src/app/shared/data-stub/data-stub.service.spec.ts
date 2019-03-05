import { TestBed } from '@angular/core/testing';

import { DataStubService } from './data-stub.service';

describe('DataStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStubService = TestBed.get(DataStubService);
    expect(service).toBeTruthy();
  });
});
