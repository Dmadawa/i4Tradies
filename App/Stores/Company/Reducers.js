import { CompanyTypes } from './Actions'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'

export const getCompanyRequest = (state) => ({
  ...state,
  companyIsLoading: true,
  companyErrorMessage: null,
})

export const getCompanySuccess = (state, { company }) => ({
  ...state,
  company: company,
  companyIsLoading: false,
  companyErrorMessage: null,
})

export const getCompanyFailure = (state, { errorMessage }) => ({
  ...state,
  company: [],
  companyIsLoading: false,
  companyErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [CompanyTypes.GET_COMPANY_REQUEST]: getCompanyRequest,
  [CompanyTypes.GET_COMPANY_SUCCESS]: getCompanySuccess,
  [CompanyTypes.GET_COMPANY_FAILURE]: getCompanyFailure,
})
