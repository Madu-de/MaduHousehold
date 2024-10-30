import {authInterceptor} from './auth.interceptor';
import {HttpInterceptorFn} from '@angular/common/http';

export const interceptors: HttpInterceptorFn[] = [
  authInterceptor,
];

