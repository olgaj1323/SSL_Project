import { Component } from '@angular/core'

import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.scss'],
})
export class AdminUsuarioComponent {
  isAddUserModalOpen: boolean

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.pipe(select(Reducers.getEmployees)).subscribe(state => {
      this.isAddUserModalOpen = state.isAddUserModalOpen
    })
  }

  openAddUsersModal() {
    this.store.dispatch(new EmployeesActions.OpenAddUsersModal())
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }
}
