import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  profileInfoRequest: null,
  fetchInfoLoading: null,
  profileInfoSuccess: ['profile'],
  profileInfoFailure: ['errorMessage'],
})

export const ProfileTypes = Types
export default Creators
