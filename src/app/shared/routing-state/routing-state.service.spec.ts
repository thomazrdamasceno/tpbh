import { TestBed } from '@angular/core/testing';

import { RoutingStateService } from './routing-state.service';
import { mockImports } from '../ionic-fake/mock.imports';
import { mockProviders } from '../ionic-fake/mock.providers';

describe('RoutingStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: mockImports.concat([

    ]),
    providers: mockProviders.concat([

    ]),
  }));

  it('should be created', () => {
    const service: RoutingStateService = TestBed.get(RoutingStateService);
    expect(service).toBeTruthy();
  });
});
