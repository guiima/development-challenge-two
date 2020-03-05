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

function* addPatientRequest({ payload }) {
  yield call(api.post, "/patients", payload);
  yield put(patientActions.requestGetAll());
}

function* watchRequestAddPatient() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_ADD, addPatientRequest);
}

function* remove({ payload }) {
  yield call(api.delete, `/patients/${payload}`);
  yield put(patientActions.requestGetAll());
}

function* watchRequestRemove() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_REMOVE, remove);
}

function* getPatientRequest({ id }) {
  const response = yield call(api.get, `/patients/${id}`);
  // console.log("responseeee", response);
  yield put(patientActions.loadPatient(response.data));
}

function* watchGetPatientRequest() {
  yield takeLatest(ACITONS.PATIENT_GET, getPatientRequest);
}

function* updatePatient({ payload }) {
  console.log("bruxo", payload);
  const response = yield call(api.put, `/patients/${payload[1]}`, payload[0]);
  console.log("daira", response.data);
  yield put(patientActions.requestGetAll());
}

function* wacthUpadatePatient() {
  yield takeLatest(ACITONS.PATIENT_UPDATE, updatePatient);
}

function* patientSagas() {
  yield all([
    watchRequestAddPatient(),
    watchRequestGetList(),
    watchRequestRemove(),
    watchGetPatientRequest(),
    wacthUpadatePatient()
  ]);
}

export default patientSagas;
