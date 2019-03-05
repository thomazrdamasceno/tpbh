import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth-service.service';
import { mockImports } from '../ionic-fake/mock.imports';
import { mockProviders } from '../ionic-fake/mock.providers';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: mockImports.concat([

    ]),
    providers: mockProviders.concat([

    ]),
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
