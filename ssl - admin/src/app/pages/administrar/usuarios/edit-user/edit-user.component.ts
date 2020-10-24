import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { Observable, Subscription } from 'rxjs'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { NzNotificationService } from 'ng-zorro-antd'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  selectedEmployee: any
  selectedEmployeeData: any
  isEditUserModalOpen: boolean = true
  hide: boolean = true
  personStates = []

  employeesForm: FormGroup
  loading: boolean
  rolesList: Array<any> = []

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.suscribeToEmployees()
    this.getEmployee()
  }

  suscribeToEmployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        console.log('STATEEEE ', state.selectedEmployeeData)
        this.selectedEmployee = state.selectedEmployee
        this.isEditUserModalOpen = state.isEditUserModalOpen
        this.loading = state.editEmployeeLoading
        this.rolesList = state.rolesList
        this.personStates = state.personStates
        this.selectedEmployeeData = state.selectedEmployeeData

        if (this.selectedEmployeeData) this.buildForm()
      }),
    )
  }

  getEmployee() {
    this.store.dispatch(
      new EmployeesActions.GetEmployee({
        employeeIdToSearch: this.selectedEmployee.id,
      }),
    )
  }

  buildForm() {
    this.employeesForm = this.fb.group({
      document: [this.selectedEmployeeData.document, [Validators.required]],
      name: [this.selectedEmployeeData.name, [Validators.required]],
      email: [this.selectedEmployeeData.email, [Validators.required, Validators.email]],
      mobile: [this.selectedEmployeeData.mobile, [Validators.required]],
      phone: [this.selectedEmployeeData.phone, [Validators.required]],
      state: [''],
      file: [''],
      fileSource: [''],
    })
  }

  onSubmit() {
    if (this.employeesForm.get('fileSource').value) {
      const formData = new FormData()
      formData.append('file', this.employeesForm.get('fileSource').value)
    }

    if (this.employeesForm.invalid)
      this.notification.warning(
        'Datos incorrectos',
        'Por favor verifique el correcto diligenciamiento del formulario',
      )

    let request = {
      document: this.employeesForm.value.document,
      name: this.employeesForm.value.name,
      email: this.employeesForm.value.email,
      mobile: this.employeesForm.value.mobile,
      phone: this.employeesForm.value.phone,
    }

    if (this.employeesForm.value.fileSource)
      request['profileImage'] = this.employeesForm.value.fileSource
    if (this.employeesForm.value.state) request['state'] = this.employeesForm.value.state

    this.store.dispatch(
      new EmployeesActions.UpdateEmployee({
        employeeId: this.selectedEmployee.id,
        request,
      }),
    )
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.employeesForm.patchValue({
        fileSource: file,
      })
    }
  }

  closeEditUserModal() {
    this.subscription.unsubscribe()
    this.store.dispatch(new EmployeesActions.CloseEditUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
