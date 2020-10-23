import * as EmployeesActions from './actions'

export const initialState: object = {
  people: [],
  filterList: [],
  loading: true,
  isAddUserModalOpen: false,
  isEditUserModalOpen: false,
  isMassLoadUserModalOpen: false,
  rolesList: [
    { id: 'superAdmin', value: 'Super Administrador' },
    { id: 'financiero', value: 'Admin Financiero' },
    { id: 'negocio', value: 'Admin negocio' },
    { id: 'tecnico', value: 'Técnico' },
  ],
  createEmployeesResponse: null,
  selectedEmployee: null,
  downloadExcelLoader: false,
  peopleForDownloadExcel: [],
}

export function reducer(state = initialState, action: EmployeesActions.Actions): object {
  switch (action.type) {
    case EmployeesActions.GET_EMPLOYEES:
      return {
        ...state,
        loading: true,
      }
    case EmployeesActions.GET_EMPLOYEES_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        ...action.payload,
      }
    case EmployeesActions.GET_EMPLOYEES_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
      }
    case EmployeesActions.CREATE_EMPLOYEES:
      return {
        ...state,
        loading: true,
      }
    case EmployeesActions.CREATE_EMPLOYEES_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        createEmployeesResponse: action.payload.response,
      }
    case EmployeesActions.CREATE_EMPLOYEES_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
      }
    case EmployeesActions.OPEN_ADD_USERS_MODAL:
      return {
        ...state,
        isAddUserModalOpen: true,
      }
    case EmployeesActions.CLOSE_ADD_USERS_MODAL:
      return {
        ...state,
        isAddUserModalOpen: false,
      }
    case EmployeesActions.OPEN_EDIT_USERS_MODAL:
      return {
        ...state,
        isEditUserModalOpen: true,
        selectedEmployee: action.payload.selectedEmployee,
      }
    case EmployeesActions.CLOSE_EDIT_USERS_MODAL:
      return {
        ...state,
        isEditUserModalOpen: false,
        selectedEmployee: null,
      }
    case EmployeesActions.OPEN_MASSLOAD_USERS_MODAL:
      return {
        ...state,
        isMassLoadUserModalOpen: true,
      }
    case EmployeesActions.CLOSE_MASSLOAD_USERS_MODAL:
      return {
        ...state,
        isMassLoadUserModalOpen: false,
      }
    case EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL:
      return {
        ...state,
        downloadExcelLoader: true,
      }
    case EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL_QUERY_SUCCESS:
      return {
        ...state,
        peopleForDownloadExcel: action.payload.people,
        downloadExcelLoader: true,
      }
    case EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL_FINALIZED:
      return {
        ...state,
        downloadExcelLoader: false,
        peopleForDownloadExcel: [],
      }
    case EmployeesActions.DOWLOAD_EMPLOYEES_EXCEL_UNSUCCESSFUL:
      return {
        ...state,
        downloadExcelLoader: false,
        peopleForDownloadExcel: [],
      }
    default:
      return state
  }
}

export const getEmployees = (state: any) => state
