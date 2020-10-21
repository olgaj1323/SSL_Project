import * as EmployeesActions from './actions'

export const initialState: object = {
  people: [],
  filters: [],
  loading: false,
}

export function reducer(state = initialState, action: EmployeesActions.Actions): object {
  switch (action.type) {
    case EmployeesActions.GET_EMPLOYEES:
      console.log('Action 1', action.payload)
      return {
        ...state,
        loading: true,
      }
    case EmployeesActions.GET_EMPLOYEES_SUCCESSFUL:
      console.log('Action 2', action.payload)
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
    default:
      return state
  }
}

export const getEmployeess = (state: any) => state
