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
      this.isAddUserModalOpen = state.isAddUserModalOpen
      this.loading = state.loading
      this.people = state.people
      this.filterList = state.filterList
    })
  }

  getEmployees() {
    this.store.dispatch(
      new EmployeesActions.GetEmployees({
        filter: null,
        value: null,
        offset: null,
        limit: null,
      }),
    )
  }

  FilterFormOnSubmit() {
    if (this.filterForm.invalid)
      this.notification.warning('Para filtrar', 'Debes completar los datos')

    this.store.dispatch(
      new EmployeesActions.GetEmployees({
        filter: this.filterForm.value.filterType,
        value: this.filterForm.value.filterValue,
        offset: '1',
        limit: '30',
      }),
    )
  }

  removeFilters() {
    this.filterForm.reset()
    this.getEmployees()
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
