import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { NzNotificationService } from 'ng-zorro-antd'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  employeesForm = this.fb.array([])
  loading: boolean = false
  rolesList: Array<any> = []

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.addNewEmployeeRow()
    this.suscribeToEmployees()
  }

  addNewEmployeeRow() {
    this.employeesForm.push(
      this.fb.group({
        document: ['', [Validators.required]],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        roles: ['', [Validators.required]],
      }),
    )
  }

  suscribeToEmployees() {
    this.store.pipe(select(Reducers.getEmployees)).subscribe(state => {
      this.loading = state.loading
      this.rolesList = state.rolesList
    })
  }

  removeEmployeeRow(index) {
    this.employeesForm.removeAt(index)
  }

  onSubmit() {
    if (this.employeesForm.invalid)
      this.notification.warning(
        'Datos incorrectos',
        'Por favor verifique el correcto diligenciamiento del formulario',
      )

    this.store.dispatch(new EmployeesActions.CreateEmployees(this.employeesForm.value))
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }
}
