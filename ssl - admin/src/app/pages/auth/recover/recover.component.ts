import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { IfStmt } from '@angular/compiler'

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent implements OnInit {
  hide = false
  hide2 = false
  validateForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      password: ['', Validators.required],
      confirm: ['', [this.confirmValidator]],
    })
  }

  ngOnInit(): void {}

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity())
  }
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true }
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
  submitForm(value: { password: string; confirm: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty()
      this.validateForm.controls[key].updateValueAndValidity()
    }
    console.log(value)
    console.log('SuccessToastr')
    if (this.validateForm.valid) {
      console.log('Form Valid')
      this.router.navigateByUrl('login')
    } else console.log('no valid')
  }
}
