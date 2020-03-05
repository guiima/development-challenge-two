import ACTIONS from "../constants/index";

const patientActions = {
  add: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_ADD
  }),
  getAll: patients => ({
    payload: patients,
    type: ACTIONS.PATIENT_GET_ALL
  }),
  requestGetAll: patients => ({
    payload: patients,
    type: ACTIONS.PATIENT_REQUEST_GET_ALL
  }),
  addPatientRequest: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_REQUEST_ADD
  }),
  remove: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_REQUEST_REMOVE
  }),
  get: patient => ({
    id: patient,
    type: ACTIONS.PATIENT_GET
  }),
  loadPatient: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_LOAD
  }),
  update: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_UPDATE
  })
};

export default patientActions;
