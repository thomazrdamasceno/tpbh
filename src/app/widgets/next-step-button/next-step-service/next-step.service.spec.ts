import { TestBed } from '@angular/core/testing';

import { NextStepService } from './next-step.service';
import { mockImports } from '../../../shared/ionic-fake/mock.imports';
import { mockProviders } from '../../../shared/ionic-fake/mock.providers';

describe('NextStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: mockImports.concat([

    ]),
    providers: mockProviders.concat([

    ]),
  }));

  it('should be created', () => {
    const service: NextStepService = TestBed.get(NextStepService);
    expect(service).toBeTruthy();
  });
});
