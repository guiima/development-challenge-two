import ACITONS from "../constants/index";

import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../services/api";
import remoteApi from "../services/remoteApi";

import patientActions from "../actions/index";

function formatDate(date) {
  const newDate = date.split("-");

  const year = newDate[0];
  const month = newDate[1];
  const day = newDate[2].split("T");

  return `${day[0]}-${month}-${year}`;
}

function* getListRequest() {
  const patients = yield call(api.get, "/patients");

  const data = patients.data.map(patient => ({
    ...patient,
    formatedDate: formatDate(patient.birth)
  }));
  yield put(patientActions.getAll(data));
}

function* watchRequestGetList() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_GET_ALL, getListRequest);
}

function* addPatientRequest({ payload }) {
  yield call(api.post, "/patients", payload);
  yield call(remoteApi.post, "/patients", payload);

  yield put(patientActions.requestGetAll());
}

function* watchRequestAddPatient() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_ADD, addPatientRequest);
}

function* remove({ payload }) {
  yield call(api.delete, `/patients/${payload}`);
  yield call(remoteApi.delete, `/patients/${payload}`);
  yield put(patientActions.requestGetAll());
}

function* watchRequestRemove() {
  yield takeLatest(ACITONS.PATIENT_REQUEST_REMOVE, remove);
}

function* getPatientRequest({ id }) {
  const response = yield call(api.get, `/patients/${id}`);
  yield put(patientActions.loadPatient(response.data));
}

function* watchGetPatientRequest() {
  yield takeLatest(ACITONS.PATIENT_GET, getPatientRequest);
}

function* updatePatient({ payload }) {
  yield call(api.put, `/patients/${payload[1]}`, payload[0]);
  yield call(remoteApi.put, `/patients/${payload[1]}`, payload[0]);
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
