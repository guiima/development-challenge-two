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
  remove: patient => ({
    payload: patient,
    type: ACTIONS.PATIENT_REMOVE
  })
};

export default patientActions;
