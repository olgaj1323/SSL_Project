import { Action } from '@ngrx/store'

export const GET_EMPLOYEES = '[Employees] Get employees'
export const GET_EMPLOYEES_SUCCESSFUL = '[Employees] Get employees Succesful'
export const GET_EMPLOYEES_UNSUCCESSFUL = '[Employees] Get employees Unsuccesful'

export const CREATE_EMPLOYEES = '[Employees] Create employees'
export const CREATE_EMPLOYEES_SUCCESSFUL = '[Employees] Create employees Succesful'
export const CREATE_EMPLOYEES_UNSUCCESSFUL = '[Employees] Create employees Unsuccesful'

export const UPDATE_EMPLOYEE = '[Employees] Update employee'
export const UPDATE_EMPLOYEE_SUCCESSFUL = '[Employees] Update employee Succesful'
export const UPDATE_EMPLOYEE_UNSUCCESSFUL = '[Employees] Update employee Unsuccesful'

export const DOWLOAD_EMPLOYEES_EXCEL = '[Employees] Download employees excel'
export const DOWLOAD_EMPLOYEES_EXCEL_QUERY_SUCCESS =
  '[Employees] Download employees excel query success'
export const DOWLOAD_EMPLOYEES_EXCEL_UNSUCCESSFUL =
  '[Employees] Download employees excel query unsuccess'
export const DOWLOAD_EMPLOYEES_EXCEL_FINALIZED =
  '[Employees] Download employees excel query finalized'

export const OPEN_ADD_USERS_MODAL = '[Employees] Open modal add users'
export const CLOSE_ADD_USERS_MODAL = '[Employees] Close modal add users'

export const OPEN_EDIT_USERS_MODAL = '[Employees] Open modal edit users'
export const CLOSE_EDIT_USERS_MODAL = '[Employees] Close modal edit users'

export const OPEN_MASSLOAD_USERS_MODAL = '[Employees] Open massload edit users'
export const CLOSE_MASSLOAD_USERS_MODAL = '[Employees] Close massload edit users'

export const GET_EMPLOYEE = '[Employees] Get employee'
export const GET_EMPLOYEE_SUCCESSFUL = '[Employees] Get employee Succesful'
export const GET_EMPLOYEE_UNSUCCESSFUL = '[Employees] Get employee Unsuccesful'

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
export class DownloadEmployeesExcel implements Action {
  readonly type = DOWLOAD_EMPLOYEES_EXCEL
  constructor(public payload: any) {}
}
export class DownloadEmployeesExcelQuerySuccess implements Action {
  readonly type = DOWLOAD_EMPLOYEES_EXCEL_QUERY_SUCCESS
  constructor(public payload: any) {}
}
export class DownloadEmployeesExcelFinalized implements Action {
  readonly type = DOWLOAD_EMPLOYEES_EXCEL_FINALIZED
  constructor() {}
}
export class DownloadEmployeesExcelUnsuccessful implements Action {
  readonly type = DOWLOAD_EMPLOYEES_EXCEL_UNSUCCESSFUL
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
export class UpdateEmployee implements Action {
  readonly type = UPDATE_EMPLOYEE
  constructor(public payload: any) {}
}
export class UpdateEmployeeSuccessful implements Action {
  readonly type = UPDATE_EMPLOYEE_SUCCESSFUL
  constructor() {}
}
export class UpdateEmployeeUnsuccessful implements Action {
  readonly type = UPDATE_EMPLOYEE_UNSUCCESSFUL
  constructor() {}
}
export class GetEmployee implements Action {
  readonly type = GET_EMPLOYEE
  constructor(public payload: any) {}
}
export class GetEmployeeSuccessful implements Action {
  readonly type = GET_EMPLOYEE_SUCCESSFUL
  constructor(public payload: any) {}
}
export class GetEmployeeUnsuccessful implements Action {
  readonly type = GET_EMPLOYEE_UNSUCCESSFUL
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
  | DownloadEmployeesExcel
  | DownloadEmployeesExcelQuerySuccess
  | DownloadEmployeesExcelFinalized
  | DownloadEmployeesExcelUnsuccessful
  | UpdateEmployee
  | UpdateEmployeeSuccessful
  | UpdateEmployeeUnsuccessful
  | GetEmployee
  | GetEmployeeSuccessful
  | GetEmployeeUnsuccessful
