import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const canActivate = authService.tokenSig() != '';
  if (!canActivate) {
    router.navigate(['auth']);
  }
  return canActivate;
};
