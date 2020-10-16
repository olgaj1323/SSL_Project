import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AuthRouterModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CreditCardDirectivesModule } from 'angular-cc-library'

// system pages
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { Error500Component } from './500/500.component'
import { RecoverComponent } from './recover/recover.component'
// import { Error404Component } from './404/404.component'

const COMPONENTS = [
  LoginComponent,
  RegisterComponent,
  RecoverComponent,
  ForgotPasswordComponent,
  Error500Component,
  // Error404Component,
]

@NgModule({
  imports: [
    SharedModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    CreditCardDirectivesModule,
  ],
  declarations: [...COMPONENTS, RecoverComponent],
})
export class AuthModule {}
