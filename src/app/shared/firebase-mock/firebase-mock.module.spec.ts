import { FirebaseMockModule } from './firebase-mock.module';

describe('FirebaseMockModule', () => {
  let firebaseMockModule: FirebaseMockModule;

  beforeEach(() => {
    firebaseMockModule = new FirebaseMockModule();
  });

  it('should create an instance', () => {
    expect(firebaseMockModule).toBeTruthy();
  });
});
