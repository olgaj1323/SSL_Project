import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/firebase.auth.service'

// system pages
import { LoginComponent } from 'src/app/pages/auth/login/login.component'
import { RegisterComponent } from 'src/app/pages/auth/register/register.component'
import { ForgotPasswordComponent } from 'src/app/pages/auth/forgot-password/forgot-password.component'
import { Error500Component } from 'src/app/pages/auth/500/500.component'
import { RecoverComponent } from './recover/recover.component'
// import { Error404Component } from 'src/app/pages/auth/404/404.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Sign Up' },
  },
  {
    path: 'recover',
    component: RecoverComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Forgot Password' },
  },
  // {
  //   path: '404',
  //   component: Error404Component,
  //   data: { title: 'Error 404' },
  // },
  {
    path: '500',
    component: Error500Component,
    data: { title: 'Error 500' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AuthRouterModule {}
