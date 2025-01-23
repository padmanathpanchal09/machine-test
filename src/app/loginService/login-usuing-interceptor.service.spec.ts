import { TestBed } from '@angular/core/testing';

import { LoginUsuingInterceptorService } from './login-usuing-interceptor.service';

describe('LoginUsuingInterceptorService', () => {
  let service: LoginUsuingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUsuingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
