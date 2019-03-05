import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import { mockImports } from '../ionic-fake/mock.imports';
import { mockProviders } from '../ionic-fake/mock.providers';

describe('FileService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: mockImports.concat([

    ]),
    providers: mockProviders.concat([

    ]),
  }));

  it('should be created', () => {
    const service: FileService = TestBed.get(FileService);
    expect(service).toBeTruthy();
  });
});
