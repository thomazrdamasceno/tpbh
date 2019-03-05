import { TestBed } from '@angular/core/testing';
import { FirestoreMock } from './firestore-mock.service';


describe('FirestoreMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreMock = TestBed.get(FirestoreMock);
    expect(service).toBeTruthy();
  });
});
