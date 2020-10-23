import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { NzNotificationService } from 'ng-zorro-antd'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  employeesForm = this.fb.array([])
  loading: boolean = false
  rolesList: Array<any> = []
  creationEmployeesResponse: any

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
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        roles: ['', [Validators.required]],
      }),
    )
  }

  suscribeToEmployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        this.loading = state.loading
        this.rolesList = state.rolesList
        this.creationEmployeesResponse = state.createEmployeesResponse
      }),
    )
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
    this.subscription.unsubscribe()
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
