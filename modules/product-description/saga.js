import { call, put, takeLatest, fork } from 'redux-saga/effects'
import apiConfig, { callApi } from 'services/api'
import { PRODUCT_DESCRIPTION } from './actions'
const url = apiConfig.item

function * setProductDescription () {
  try {
    const res = yield call(callApi, { url: `${url}/2` })
    yield put(PRODUCT_DESCRIPTION.getProductDescriptionSuccess(res))
  } catch (err) {
    yield put(PRODUCT_DESCRIPTION.getProductDescriptionFailure({}))
  }
}

function * getProductDescription () {
  yield takeLatest(
    PRODUCT_DESCRIPTION.getProductDescription.toString(),
    setProductDescription
  )
}

export default [fork(getProductDescription)]
