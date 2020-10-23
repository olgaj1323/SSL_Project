import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  selectedEmployee: any
  isEditUserModalOpen: boolean = true
  hide: boolean = true

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.suscribeToEmployees()
  }

  suscribeToEmployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        console.log(state.selectedEmployee)
        this.selectedEmployee = state.selectedEmployee
        this.isEditUserModalOpen = state.isEditUserModalOpen
      }),
    )
  }

  closeEditUserModal() {
    this.subscription.unsubscribe()
    this.store.dispatch(new EmployeesActions.CloseEditUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
