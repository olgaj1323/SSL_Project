import { Action } from '@ngrx/store'

export const GET_EMPLOYEES = '[Employees] Get employees'
export const GET_EMPLOYEES_SUCCESSFUL = '[Employees] Get employees Succesful'
export const GET_EMPLOYEES_UNSUCCESSFUL = '[Employees] Get employees Unsuccesful'
export const OPEN_ADD_USERS_MODAL = '[Employees] Open modal add users'
export const CLOSE_ADD_USERS_MODAL = '[Employees] Close modeal add users'
export const CREATE_EMPLOYEES = '[Employees] Create employees'
export const CREATE_EMPLOYEES_SUCCESSFUL = '[Employees] Create employees Succesful'
export const CREATE_EMPLOYEES_UNSUCCESSFUL = '[Employees] Create employees Unsuccesful'
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

export class CreateEmployees implements Action {
  readonly type = CREATE_EMPLOYEES
  constructor(public payload: any) {}
}
export class CreateEmployeesSuccessful implements Action {
  readonly type = CREATE_EMPLOYEES_SUCCESSFUL
  constructor(public payload: any) {}
}
export class CreateEmployeesUnsuccessful implements Action {
  readonly type = CREATE_EMPLOYEES_UNSUCCESSFUL
  constructor() {}
}

export type Actions =
  | GetEmployees
  | GetEmployeesSuccessful
  | GetEmployeesUnsuccessful
  | OpenAddUsersModal
  | CloseAddUsersModal
  | CreateEmployees
  | CreateEmployeesSuccessful
  | CreateEmployeesUnsuccessful
