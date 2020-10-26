import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  getCompanyRequest: null,
  //['username','password']
  // The operation has started and is loading
  fetchCompanyLoading: null,
  // User informations were successfully fetched
  getCompanySuccess: ['company'],
  // An error occurred
  getCompanyFailure: ['errorMessage'],
})

export const CompanyTypes = Types
export default Creators
