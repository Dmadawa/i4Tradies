import { call, fork, put, take } from 'redux-saga/effects'

import CompanyActions from 'App/Stores/Company/Actions'
import { CompanyTypes } from 'App/Stores/Company/Actions'
import { companyService } from 'App/Services/CompanyService'

export function * companySaga () {
  while (true) {
    yield take(CompanyTypes.GET_COMPANY_REQUEST)
    yield fork(getList)
    yield take([
        CompanyTypes.GET_COMPANY_SUCCESS,
        CompanyTypes.GET_COMPANY_FAILURE,
    ])
  }
}

function* getList() {
  try {
    const list = yield call(companyService.getList)
    if (list) {
      yield put(CompanyActions.getCompanySuccess(list))
    } else {
      yield put(
        CompanyActions.getCompanyFailure('There was an error while fetching user informations.')
      )
    }
  } catch (error) {
    console.log(error)
    yield put(
        CompanyActions.getCompanyFailure('There was an error while fetching user informations.')
    )
  }
}
