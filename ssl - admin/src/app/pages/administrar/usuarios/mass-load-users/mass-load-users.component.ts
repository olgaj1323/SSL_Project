import { Component, OnInit } from '@angular/core'

import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from 'src/app/store/employees/actions'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-mass-load-users',
  templateUrl: './mass-load-users.component.html',
  styleUrls: ['./mass-load-users.component.scss'],
})
export class MassLoadUsersComponent implements OnInit {
  subscription: Subscription = new Subscription()
  employeeSubscription$: Observable<any> = this.store.pipe(select(Reducers.getEmployees))

  isMassLoadUserModalOpen: boolean = true

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.suscribeToEmployees()
  }

  suscribeToEmployees() {
    this.subscription.add(
      this.employeeSubscription$.subscribe(state => {
        this.isMassLoadUserModalOpen = state.isMassLoadUserModalOpen
      }),
    )
  }

  closeMassLoadModal() {
    this.subscription.unsubscribe()
    this.store.dispatch(new EmployeesActions.CloseMassLoadUsersModal())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
