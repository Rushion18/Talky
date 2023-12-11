import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthenticationComponent } from './login-authentication/login-authentication.component';
import { RegisterAuthenticationComponent } from './register-authentication/register-authentication.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterAuthenticationComponent },
  { path: 'login', component: LoginAuthenticationComponent },
  { path: 'profile', component: UserPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }