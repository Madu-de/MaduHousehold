import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpInterceptorFn, provideHttpClient, withInterceptors,
} from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';
import {AuthService} from '../services/auth.service';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));
  const token = 'test-token';
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClientTesting(),
        {
          provide: AuthService,
          useValue: {
            getToken() {
              return token;
            }
          }
        },
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add token to request', () => {
    httpClient.get('/test', {
      headers: {
        Test: 'test-header'
      }
    }).subscribe();

    const request = httpTestingController.expectOne('/test');

    expect(request.request.headers.has('Authorization')).toBeTrue();
    expect(request.request.headers.get('Authorization')).toBe('Bearer ' + token);
    expect(request.request.headers.get('Test')).toBe('test-header');
  });
});
