import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptorComponentService } from './http-error-interceptor-component.service';

describe('HttpErrorInterceptorComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorInterceptorComponentService = TestBed.get(HttpErrorInterceptorComponentService);
    expect(service).toBeTruthy();
  });
});
