import { Action } from '@ngrx/store'

export const GET_EMPLOYEES = '[Employees] Get employees'
export const GET_EMPLOYEES_SUCCESSFUL = '[Employees] Get employees Succesful'
export const GET_EMPLOYEES_UNSUCCESSFUL = '[Employees] Get employees Unsuccesful'

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

export type Actions = GetEmployees | GetEmployeesSuccessful | GetEmployeesUnsuccessful
