import { TestBed } from '@angular/core/testing';

import { FireMessagingStub } from './fire-messaging-stub.service';

describe('FireMessagingStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireMessagingStub = TestBed.get(FireMessagingStub);
    expect(service).toBeTruthy();
  });
});
