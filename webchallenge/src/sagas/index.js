import { all } from "redux-saga/effects";

import patientSagas from "./patient";

function* sagas() {
  yield all([patientSagas()]);
}

export default sagas;
