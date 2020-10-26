import { all, fork, takeLatest } from 'redux-saga/effects'

import { StartupTypes } from 'App/Stores/Startup/Actions'
import { authenticationSaga } from './AuthSaga'
import { companySaga } from './companySaga'
import { profileSaga } from './ProfileSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    fork(authenticationSaga),
    takeLatest(StartupTypes.STARTUP, startup),
    fork(profileSaga),
    fork(companySaga)
  ])
}
