import { Component } from '@angular/core'
import { FormControl, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'cui-system-forgo-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  emailField: FormControl
  constructor() {
    this.emailField = new FormControl('', [Validators.required])
  }
  sendForgotPassword() {
    if (this.emailField.valid) {
    }
  }
}
