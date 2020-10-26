import { AuthTypes } from './Actions'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'

export const userLoginRequest = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const userLoginSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.USER_LOGIN_REQUEST]: userLoginRequest,
  [AuthTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [AuthTypes.USER_LOGIN_FAILURE]: userLoginFailure,
})
