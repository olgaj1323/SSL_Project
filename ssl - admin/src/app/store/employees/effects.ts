import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'
import { Observable, of, from } from 'rxjs'
import { map, switchMap, catchError, withLatestFrom, concatMap } from 'rxjs/operators'
import store from 'store'
import { NzNotificationService } from 'ng-zorro-antd'

import * as Reducers from 'src/app/store/reducers'
import * as EmployeesActions from './actions'
import { EmployeeService } from 'src/app/services/employee.service'

@Injectable()
export class EmployeesEffects implements OnInitEffects {
  constructor(
    private actions: Actions,
    private EmployeeService: EmployeeService,
    private rxStore: Store<any>,
    private notification: NzNotificationService,
  ) {}

  ngrxOnInitEffects(): Action {
    return { type: EmployeesActions.GET_EMPLOYEES }
  }

  @Effect()
  getEmployees: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.GET_EMPLOYEES),
    map((action: EmployeesActions.GetEmployees) => action.payload),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([payload, settings]) => {
      console.log('Llamado del efecto', payload)
      return this.EmployeeService.getEmployees(payload).pipe(
        map(response => {
          if (response.status == 'success')
            return new EmployeesActions.GetEmployeesSuccessful({
              people: response.people,
              filters: response.filters,
            })

          this.notification.warning('Get employees failed', response.error)
          return new EmployeesActions.GetEmployeesUnsuccessful()
        }),
        catchError(error => {
          console.log('GET EMPLOYEES ERROR: ', error)
          this.notification.error('Api error', 'Has ocurred an error')
          return from([{ type: EmployeesActions.GET_EMPLOYEES_UNSUCCESSFUL }])
        }),
      )
    }),
  )
}
