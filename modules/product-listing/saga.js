import { call, put, takeLatest } from 'redux-saga/effects'
import apiConfig, { callApi } from 'services/api'
import { INITIAL_CLICK } from './actions'

const url = apiConfig.post

export function * sethomeData () {
  try {
    const res = yield call(callApi, { url })
    yield put(INITIAL_CLICK.onButtonClickActionSuccess(res))
  } catch (err) {
    yield put(INITIAL_CLICK.onButtonClickActionFailure([]))
  }
}

export default function * getHomeData () {
  yield takeLatest(INITIAL_CLICK.onButtonClickAction.toString(), sethomeData)
}
