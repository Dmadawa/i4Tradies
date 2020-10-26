import { call, cancelled, fork, put, take } from 'redux-saga/effects'

import AuthActions from 'App/Stores/Auth/Actions'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService'
import { userService } from 'App/Services/UserService'

export function * authenticationSaga () {
  while (true) {
    const action = yield take(AuthTypes.USER_LOGIN_REQUEST)
    yield fork(login, action.username, action.password)
    yield take([
      AuthTypes.USER_LOGIN_SUCCESS,
      AuthTypes.USER_LOGIN_FAILURE,
    ])
  }
}

function* login(username,password) {
 
  try {
    const user = yield call(userService.login,username,password)
    if (user) {
      yield put(AuthActions.userLoginSuccess(user))
      yield cancelled()
      yield call(NavigationService.navigateAndReset('HomeTab'))
    } else {
      yield put(
        AuthActions.userLoginFailure('There was an error while fetching user informations.')
      )
    }
  } catch (error) {
    console.log(error)
    yield put(
      AuthActions.userLoginFailure('There was an error while fetching user informations.')
    )
  }
  
}
