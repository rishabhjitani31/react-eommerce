import { all } from "redux-saga/effects";

import globalSaga from "~/modules/home/saga";
import productSaga from "~/modules/product-description/saga";

export default function* rootSaga() {
  yield all([globalSaga(), ...productSaga]);
}
