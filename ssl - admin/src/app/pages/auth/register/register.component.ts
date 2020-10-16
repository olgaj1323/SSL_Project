import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms'
import { Register } from 'src/app/services/country'
import { Router } from '@angular/router'
import { CreditCardValidators } from 'angular-cc-library'

@Component({
  selector: 'cui-system-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  hide = false
  isVisibleCode = false
  isVisibleOnline = false
  isVisibleArrow = true
  selectUsuarios = false
  showDiv = {
    register1: true,
    register2: false,
    register3: false,
  }
  submitted = false
  radioValue = ''
  sectores = ['a', 'b', 'c', 'd']
  employees = ['1-100', '101-200', '201-300', '301-400', 'mas de 500']
  plans = ['1 a 500 usuarios', '500 a 2000 usuarios', '2000 en adelante ']
  checked = false

  myFormRegister: FormGroup

  ngOnInit() {
    this.myFormRegister = this.fb.group({
      razonSocial: [null],
      NIT: [null],
      sectorComercial: ['', [Validators.required]],
      address: [null],
      numeroFuncionarios: [null, Validators.required],
      contact: [null],
      phone: [null],
      email: [null],
      password: [null],
      confirm: ['', [this.confirmValidator]],
      cardNumber: [null, [CreditCardValidators.validateCCNumber]],
      expiration: [null, [CreditCardValidators.validateExpDate]],
      ccv2: [
        null,
        [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)],
      ],
      plan: [null],
      agree: [false, Validators.requiredTrue],
    })
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.myFormRegister.controls.confirm.updateValueAndValidity())
  }
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true }
    } else if (control.value !== this.myFormRegister.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
  get sector() {
    console.log('sectorcomercial', this.myFormRegister.get('sectorComercial'))
    return this.myFormRegister.get('sectorComercial')
  }
  get numeroFuncionarios() {
    return this.myFormRegister.get('numeroFuncionarios')
  }
  get plan() {
    return this.myFormRegister.get('plan')
  }
  get cardNum() {
    console.log(this.myFormRegister.get('cardNumber'))
    return this.myFormRegister.get('cardNumber')
  }
  get f() {
    return this.myFormRegister.controls
  }

  changeSectorComercial(e) {
    console.log(e.value)
    this.sector.setValue(e.target.value, {
      onlySelf: true,
    })
  }
  changeNumeroFuncionarios(e) {
    console.log(e.value)
    this.numeroFuncionarios.setValue(e.target.value, {
      onlySelf: true,
    })
  }
  changesPlan(e) {
    console.log(e.value)
    this.plan.setValue(e.target.value, {
      onlySelf: true,
    })
  }

  showRegister2() {
    this.showDiv.register1 = false
    this.showDiv.register2 = true
    this.isVisibleArrow = true
  }
  showRegister3() {
    this.showDiv.register1 = false
    this.showDiv.register2 = false
    this.showDiv.register3 = true
    this.isVisibleArrow = true
  }
  submitForm(): void {
    console.log("I'm pressing the button")
    this.submitted = true
    console.log(this.submitted)
    if (this.myFormRegister.valid) {
      for (const key in this.myFormRegister.controls) {
        this.myFormRegister.controls[key].updateValueAndValidity()
        this.router.navigateByUrl('login')
      }
      console.log(this.myFormRegister)
    } else {
      console.log('I in invalid')
      this.myFormRegister.markAllAsTouched()
    }
  }
}
