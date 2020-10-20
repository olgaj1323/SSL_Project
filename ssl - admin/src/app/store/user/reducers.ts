import * as UserActions from './actions'

export const initialState: object = {
  id: '',
  name: '',
  roles: [''],
  email: '',
  avatar: '',
  password: '',
  authorized: false,
  loading: false,
}

export function reducer(state = initialState, action: UserActions.Actions): object {
  switch (action.type) {
    case UserActions.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        loading: true,
      }
    case UserActions.REGISTER:
    case UserActions.LOAD_CURRENT_ACCOUNT:
      return {
        ...state,
        loading: true,
      }
    case UserActions.LOGIN_SUCCESSFUL:
      return {
        ...state,
        loading: false,
      }
    case UserActions.REGISTER_SUCCESSFUL:
    case UserActions.LOAD_CURRENT_ACCOUNT_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
        loading: false,
        authorized: true,
      }
    case UserActions.LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
      }
    case UserActions.REGISTER_UNSUCCESSFUL:
    case UserActions.LOAD_CURRENT_ACCOUNT_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
        authorized: false,
      }
    case UserActions.FLUSH_USER:
      return {
        id: '',
        name: '',
        role: '',
        email: '',
        avatar: '',
        authorized: false,
        loading: false,
      }
    case UserActions.EMPTY_ACTION:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export const getUser = (state: any) => state
