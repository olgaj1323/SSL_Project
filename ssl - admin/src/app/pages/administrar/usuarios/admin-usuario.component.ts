import { Component } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms'

import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { NzNotificationService, NzTableQueryParams } from 'ng-zorro-antd'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.scss'],
})
export class AdminUsuarioComponent {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  loading: boolean
  people: []
  filterList: []
  filterForm = this.fb.group({
    filterType: ['', [Validators.required]],
    filterValue: ['', [Validators.required]],
  })

  total
  pageSize = 5
  pageIndex = 1

  isAddUserModalOpen: boolean
  isEditUserModalOpen: boolean
  isMassLoadUserModalOpen: boolean

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.suscribeToemployees()
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, [])
  }

  suscribeToemployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        this.isAddUserModalOpen = state.isAddUserModalOpen
        this.isEditUserModalOpen = state.isEditUserModalOpen
        this.isMassLoadUserModalOpen = state.isMassLoadUserModalOpen
        this.loading = state.loading
        this.people = state.people
        this.filterList = state.filterList
        this.total = state.people.count
      }),
    )
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>,
  ): void {
    this.loading = true
    this.store.dispatch(
      new EmployeesActions.GetEmployees({
        //filter: (filter.length > 0) ? filter[0].key : null,
        //value: (filter.length > 0) ? filter[0].value[0] : null,
        filter: this.filterForm.valid ? this.filterForm.value.filterType : null,
        value: this.filterForm.valid ? this.filterForm.value.filterValue : null,
        offset: (pageIndex - 1) * pageSize,
        limit: pageSize,
      }),
    )
  }

  FilterFormOnSubmit() {
    if (this.filterForm.invalid)
      this.notification.warning('Para filtrar', 'Debes completar los datos')

    this.loadDataFromServer(1, this.pageSize, null, null, [])
    this.pageIndex = 1
  }

  removeFilters() {
    this.filterForm.reset()
    this.loadDataFromServer(1, this.pageSize, null, null, [])
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params)
    const { pageSize, pageIndex, sort, filter } = params
    const currentSort = sort.find(item => item.value !== null)
    const sortField = (currentSort && currentSort.key) || null
    const sortOrder = (currentSort && currentSort.value) || null
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter)
  }

  selectEmployeeForEdit(employee) {
    this.store.dispatch(
      new EmployeesActions.OpenEditUsersModal({
        selectedEmployee: employee,
      }),
    )
  }

  get f() {
    return this.filterForm.controls
  }

  openAddUsersModal() {
    this.store.dispatch(new EmployeesActions.OpenAddUsersModal())
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }

  closeEditUserModal() {
    this.store.dispatch(new EmployeesActions.CloseEditUsersModal())
  }

  openMassLoadUsersModal() {
    this.store.dispatch(new EmployeesActions.OpenMassLoadUsersModal())
  }

  closeMassLoadUserModal() {
    this.store.dispatch(new EmployeesActions.CloseMassLoadUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
