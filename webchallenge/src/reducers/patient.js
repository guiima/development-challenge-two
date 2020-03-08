import ACTIONS from "../constants";

const INITIAL_STATE = {
  patients: [],
  patient: {
    name: "",
    rg: "",
    cpf: "",
    birth: "",
    street: "",
    number: "",
    city: "",
    state: "",
    zip_code: "",
    email: "",
    phone: ""
  }
};

const patientReducers = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { patient } = state;
  switch (type) {
    case ACTIONS.PATIENT_GET_ALL:
      return { ...state, patients: payload };
    case ACTIONS.PATIENT_LOAD:
      return {
        ...state,
        patient: {
          id: payload.id,
          name: payload.name,
          rg: payload.rg,
          cpf: payload.cpf,
          birth: payload.birth,
          street: payload.street,
          number: payload.number,
          city: payload.city,
          state: payload.state,
          zip_code: payload.zip_code,
          email: payload.email,
          phone: payload.phone
        }
      };
    default:
      return state;
  }
};

export default patientReducers;
