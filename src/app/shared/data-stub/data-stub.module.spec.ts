import { DataStubModule } from './data-stub.module';

describe('DataStubModule', () => {
  let dataStubModule: DataStubModule;

  beforeEach(() => {
    dataStubModule = new DataStubModule();
  });

  it('should create an instance', () => {
    expect(dataStubModule).toBeTruthy();
  });
});
