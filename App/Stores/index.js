import { reducer as AuthReducer } from './Auth/Reducers'
import { reducer as CompanyReducer } from './Company/Reducers'
import { reducer as ProfileReducer } from './Profile/Reducers'
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'

export default () => {
  const rootReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    company: CompanyReducer
  })

  return configureStore(rootReducer, rootSaga)
}
