import { TestBed } from '@angular/core/testing';

import { FireAuthStub } from './fire-auth-stub.service';

describe('FireAuthStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireAuthStub = TestBed.get(FireAuthStub);
    expect(service).toBeTruthy();
  });
});
