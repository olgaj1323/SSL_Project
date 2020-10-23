import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'

@Component({
  selector: 'app-result-users-creation',
  templateUrl: './result-users-creation.component.html',
  styleUrls: ['./result-users-creation.component.scss'],
})
export class ResultUsersCreationComponent implements OnInit {
  creationEmployeesResponse: any

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.suscribeToEmployees()
  }
  suscribeToEmployees() {
    this.store.pipe(select(Reducers.getEmployees)).subscribe(state => {
      this.creationEmployeesResponse = state.createEmployeesResponse
    })
  }

  getDataType(variable: any) {
    return typeof variable
  }

  closeAddUserModal() {
    this.store.dispatch(new EmployeesActions.CloseAddUsersModal())
  }
}
