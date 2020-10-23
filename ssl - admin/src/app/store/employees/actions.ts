import { Action } from '@ngrx/store'

export const GET_EMPLOYEES = '[Employees] Get employees'
export const GET_EMPLOYEES_SUCCESSFUL = '[Employees] Get employees Succesful'
export const GET_EMPLOYEES_UNSUCCESSFUL = '[Employees] Get employees Unsuccesful'
export const CREATE_EMPLOYEES = '[Employees] Create employees'
export const CREATE_EMPLOYEES_SUCCESSFUL = '[Employees] Create employees Succesful'
export const CREATE_EMPLOYEES_UNSUCCESSFUL = '[Employees] Create employees Unsuccesful'

export const OPEN_ADD_USERS_MODAL = '[Employees] Open modal add users'
export const CLOSE_ADD_USERS_MODAL = '[Employees] Close modal add users'

export const OPEN_EDIT_USERS_MODAL = '[Employees] Open modal edit users'
export const CLOSE_EDIT_USERS_MODAL = '[Employees] Close modal edit users'

export const OPEN_MASSLOAD_USERS_MODAL = '[Employees] Open massload edit users'
export const CLOSE_MASSLOAD_USERS_MODAL = '[Employees] Close massload edit users'

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

export class OpenAddUsersModal implements Action {
  readonly type = OPEN_ADD_USERS_MODAL
  constructor() {}
}
export class CloseAddUsersModal implements Action {
  readonly type = CLOSE_ADD_USERS_MODAL
  constructor() {}
}
export class OpenEditUsersModal implements Action {
  readonly type = OPEN_EDIT_USERS_MODAL
  constructor(public payload: any) {}
}
export class CloseEditUsersModal implements Action {
  readonly type = CLOSE_EDIT_USERS_MODAL
  constructor() {}
}

export class OpenMassLoadUsersModal implements Action {
  readonly type = OPEN_MASSLOAD_USERS_MODAL
  constructor() {}
}
export class CloseMassLoadUsersModal implements Action {
  readonly type = CLOSE_MASSLOAD_USERS_MODAL
  constructor() {}
}

export type Actions =
  | GetEmployees
  | GetEmployeesSuccessful
  | GetEmployeesUnsuccessful
  | CreateEmployees
  | CreateEmployeesSuccessful
  | CreateEmployeesUnsuccessful
  | OpenAddUsersModal
  | CloseAddUsersModal
  | OpenEditUsersModal
  | CloseEditUsersModal
  | OpenMassLoadUsersModal
  | CloseMassLoadUsersModal
