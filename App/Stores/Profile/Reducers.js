import { INITIAL_STATE } from './InitialState'
import { ProfileTypes } from './Actions'
import { createReducer } from 'reduxsauce'

export const profileInfoRequest = (state) => ({
  ...state,
  infoIsLoading: true,
  profileErrorMessage: null,
})

export const profileInfoSuccess = (state, { profile }) => ({
  ...state,
  profile: profile,
  infoIsLoading: false,
  profileErrorMessage: null,
})

export const profileInfoFailure = (state, { errorMessage }) => ({
  ...state,
  profile: {},
  infoIsLoading: false,
  profileErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ProfileTypes.PROFILE_INFO_REQUEST]: profileInfoRequest,
  [ProfileTypes.PROFILE_INFO_SUCCESS]: profileInfoSuccess,
  [ProfileTypes.PROFILE_INFO_FAILURE]: profileInfoFailure,
})
