import * as EmployeesActions from './actions'

export const initialState: object = {
  people: [],
  filters: [],
  loading: false,
  isAddUserModalOpen: false,
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
    default:
      return state
  }
}

export const getEmployees = (state: any) => state
