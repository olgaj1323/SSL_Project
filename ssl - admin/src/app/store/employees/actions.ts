import { Action } from '@ngrx/store'

export const GET_EMPLOYEES = '[Employees] Get employees'
export const GET_EMPLOYEES_SUCCESSFUL = '[Employees] Get employees Succesful'
export const GET_EMPLOYEES_UNSUCCESSFUL = '[Employees] Get employees Unsuccesful'
export const OPEN_ADD_USERS_MODAL = '[Employees] Open modal add users'
export const CLOSE_ADD_USERS_MODAL = '[Employees] Close modeal add users'

export class GetEmployees implements Action {
  readonly type = GET_EMPLOYEES
  constructor(public payload: any) {}
}

export class GetEmployeesSuccessful implements Action {
  readonly type = GET_EMPLOYEES_SUCCESSFUL
  constructor(public payload: any) {}
}

export class GetEmployeesUnsuccessful implements Action {
  readonly type = GET_EMPLOYEES_UNSUCCESSFUL
  constructor() {}
}

export class OpenAddUsersModal implements Action {
  readonly type = OPEN_ADD_USERS_MODAL
  constructor() {}
}

export class CloseAddUsersModal implements Action {
  readonly type = CLOSE_ADD_USERS_MODAL
  constructor() {}
}

export type Actions =
  | GetEmployees
  | GetEmployeesSuccessful
  | GetEmployeesUnsuccessful
  | OpenAddUsersModal
  | CloseAddUsersModal
