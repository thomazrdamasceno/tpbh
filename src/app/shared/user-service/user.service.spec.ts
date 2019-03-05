import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { mockImports } from '../ionic-fake/mock.imports';
import { mockProviders } from '../ionic-fake/mock.providers';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: mockImports.concat([

    ]),
    providers: mockProviders.concat([

    ]),
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
