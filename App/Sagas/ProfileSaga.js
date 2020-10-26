import ProfileActions,{ ProfileTypes } from 'App/Stores/Profile/Actions'
import { call, fork, put, take } from 'redux-saga/effects'

import { profileService } from 'App/Services/ProfileService'

export function * profileSaga () {
  while (true) {
    yield take(ProfileTypes.PROFILE_INFO_REQUEST)
    yield fork(getInfo)
    yield take([
      ProfileTypes.PROFILE_INFO_SUCCESS,
      ProfileTypes.PROFILE_INFO_FAILURE,
    ])
  }
}

function* getInfo() {
  try {
    const info = yield call(profileService.getInfo)
    if (info) {
      yield put(ProfileActions.profileInfoSuccess(info))
    } else {
      yield put(
          ProfileActions.profileInfoFailure('There was an error while fetching user informations.')
      )
    }
  } catch (error) {
    console.log(error)
    yield put(
      ProfileActions.profileInfoFailure('There was an error while fetching user informations.')
    )
  }
}
