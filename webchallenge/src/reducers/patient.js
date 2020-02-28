import ACTIONS from "../constants";

const INITIAL_STATE = {
  patients: []
};

const patientReducers = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { patients } = state;
  switch (type) {
    case ACTIONS.PATIENT_ADD:
      return { ...state, patients: [...patients, payload] };
    case ACTIONS.PATIENT_GET_ALL:
      return { ...state, patients: payload };
    case ACTIONS.PATIENT_REMOVE:
      return {
        ...state,
        patients: patients.filter(patient => patient !== payload)
      };
    default:
      return state;
  }
};

export default patientReducers;
