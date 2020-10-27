import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'
import { Observable, of, from } from 'rxjs'
import { map, switchMap, catchError, withLatestFrom, concatMap, tap } from 'rxjs/operators'
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
      return this.EmployeeService.getEmployees(payload).pipe(
        map(response => {
          if (response.status == 'success')
            return new EmployeesActions.GetEmployeesSuccessful({
              people: response.people,
              filterList: response.filters,
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

  @Effect()
  createEmployees: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.CREATE_EMPLOYEES),
    map((action: EmployeesActions.CreateEmployees) => action.payload),
    switchMap(payload => {
      return this.EmployeeService.createEmployees(payload).pipe(
        map(response => {
          return new EmployeesActions.CreateEmployeesSuccessful({
            response,
          })
        }),
        catchError(error => {
          console.log('CREATE EMPLOYEES ERROR: ', error)
          this.notification.error('Api error', 'Has ocurred an error')
          return from([{ type: EmployeesActions.GET_EMPLOYEES_UNSUCCESSFUL }])
        }),
      )
    }),
  )

  @Effect()
  downloadEmployeesExcel: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL),
    map((action: EmployeesActions.DownloadEmployeesExcel) => action.payload),
    switchMap(payload => {
      return this.EmployeeService.getEmployees(payload).pipe(
        map(response => {
          if (response.status == 'success')
            return new EmployeesActions.DownloadEmployeesExcelQuerySuccess({
              people: response.people.rows,
            })

          this.notification.warning('Get employees for excel failed', response.error)
          return new EmployeesActions.DownloadEmployeesExcelUnsuccessful()
        }),
        catchError(error => {
          console.log('GET EMPLOYEES FOR EXCEL ERROR: ', error)
          this.notification.error('Api error', 'Has ocurred an error')
          return from([{ type: EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL_UNSUCCESSFUL }])
        }),
      )
    }),
  )

  @Effect()
  updateEmployees: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.UPDATE_EMPLOYEE),
    map((action: EmployeesActions.UpdateEmployee) => action.payload),
    switchMap(payload => {
      return this.EmployeeService.updateEmployees(payload.employeeId, payload.request).pipe(
        map(response => {
          if (response.status == 'success') {
            this.notification.success('Proceso correcto', 'Usuario modificado con exito')
            return new EmployeesActions.UpdateEmployeeSuccessful()
          }

          this.notification.warning('Update employee failed', response.error)
          return new EmployeesActions.UpdateEmployeeUnsuccessful()
        }),
        catchError(error => {
          console.log('UPDATE EMPLOYEES ERROR: ', error)
          this.notification.error('Api error', 'Has ocurred an error')
          return from([{ type: EmployeesActions.UPDATE_EMPLOYEE_UNSUCCESSFUL }])
        }),
      )
    }),
  )

  @Effect()
  getEmployee: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.GET_EMPLOYEE),
    map((action: EmployeesActions.GetEmployee) => action.payload),
    switchMap(payload => {
      return this.EmployeeService.getEmployee(payload.employeeIdToSearch).pipe(
        map(response => {
          console.log('RESPONSE', response)
          if (response.status == 'success')
            return new EmployeesActions.GetEmployeeSuccessful({
              employee: response.person,
            })

          this.notification.warning('Get employee failed', response.error)
          return new EmployeesActions.GetEmployeeUnsuccessful()
        }),
        catchError(error => {
          console.log('GET EMPLOYEE ERROR: ', error)
          this.notification.error('Api error', 'Has ocurred an error')
          return from([{ type: EmployeesActions.GET_EMPLOYEE_UNSUCCESSFUL }])
        }),
      )
    }),
  )

  @Effect()
  updateEmployeeUnsuccessful: Observable<any> = this.actions.pipe(
    ofType(EmployeesActions.UPDATE_EMPLOYEE_SUCCESSFUL),
    map(() => {
      return new EmployeesActions.GetEmployees({
        filter: null,
        value: null,
        offset: 0,
        limit: 5,
      })
    }),
  )
}
