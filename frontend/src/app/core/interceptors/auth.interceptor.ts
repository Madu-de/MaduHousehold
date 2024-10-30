import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + authService.getToken()
    }
  });
  return next(clonedReq);
};
