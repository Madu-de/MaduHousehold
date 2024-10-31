import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationLayoutComponent} from './layout/authentication-layout/authentication-layout.component';
import {authGuard} from './core/guards/auth.guard';
import {ButtonComponent} from './shared/components/button/button.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthenticationLayoutComponent,
    loadChildren: () => import('./features/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: '',
    component: ButtonComponent, // Temporary PrimaryButton (placeholder) -> In future: Dashboard
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
