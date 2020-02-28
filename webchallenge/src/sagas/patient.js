import ACITONS from "../constants/index";

import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../services/api";

import patientActions from "../actions/index";

function* getListRequest() {
  const patients = yield call(api.get, "/patients");
  yield put(patientActions.getAll(patients.data));
}

function* watchRequestGetList() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_GET_ALL, getListRequest);
}

function* patientSagas() {
  yield all([watchRequestGetList()]);
}

export default patientSagas;
