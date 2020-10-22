import { Component } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms'

import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { NzNotificationService } from 'ng-zorro-antd'

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.scss'],
})
export class AdminUsuarioComponent {
  loading: boolean
  people: []
  filterList: []
  filterForm = this.fb.group({
    filterType: ['', [Validators.required]],
    filterValue: ['', [Validators.required]],
  })

  isAddUserModalOpen: boolean

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.suscribeToemployees()
    this.getEmployees()
  }

  suscribeToemployees() {
    this.store.pipe(select(Reducers.getEmployees)).subscribe(state => {
      console.log('Statee', state)
      this.isAddUserModalOpen = state.isAddUserModalOpen
      this.loading = state.loading
      this.people = state.people
      this.filterList = state.filterList
    })
  }

  getEmployees() {
    let params = {
      filter: 'email',
      value: '@',
      offset: '3',
      limit: '1',
    }
    this.store.dispatch(new EmployeesActions.GetEmployees(params))
  }

  FilterFormOnSubmit() {
    console.log(this.filterForm.value)
    if (this.filterForm.invalid)
      this.notification.warning('Para filtrar', 'Debes completar los datos')
    let params = {
      filter: this.filterForm.value.filterType,
      value: this.filterForm.value.filterValue,
      offset: '3',
      limit: '1',
    }
    this.store.dispatch(new EmployeesActions.GetEmployees(params))
  }

  openAddUsersModal() {
    this.store.dispatch(new EmployeesActions.OpenAddUsersModal())
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }

  get f() {
    return this.filterForm.controls
  }
}
