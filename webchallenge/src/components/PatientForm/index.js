import React, { Component } from "react";

import { connect } from "react-redux";

import patientActions from "../../actions";

import {
  Container,
  FormRow,
  FormRowButton,
  FormHeader,
  FormErrCtrl
} from "./styles";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Insira o nome"),
  rg: Yup.string().required("Insira o RG"),
  cpf: Yup.string().required("Insira o CPF"),
  birth: Yup.string().required("Insira a data de nascimento"),
  street: Yup.string().required("Insira a rua"),
  number: Yup.string().required("Insira o n°"),
  city: Yup.string().required("Insira a cidade"),
  state: Yup.string().required("Insira o estado"),
  zip_code: Yup.string().required("Insira o CEP"),
  email: Yup.string().required("Insira o e-mail"),
  phone: Yup.string().required("Insira o telefone")
});

class PatientForm extends Component {
  state = {
    id: "",
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
    phone: "",
    update: false
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.patient !== this.props.patient) {
      const { patient } = this.props;
      this.loadPatient(patient);
    }
  }

  formatDate = date => {
    const newDate = date.split("-");

    const year = newDate[0];
    const month = newDate[1];
    const day = newDate[2].split("T");

    return `${year}-${month}-${day[0]}`;
  };

  loadPatient(patient) {
    console.log("pateeee", patient);
    this.setState({ update: true });
    this.setState({ id: patient.id });
    this.setState({ name: patient.name });
    this.setState({ rg: patient.rg });
    this.setState({ cpf: patient.cpf });
    this.setState({ birth: this.formatDate(patient.birth) });
    this.setState({ street: patient.street });
    this.setState({ number: patient.number });
    this.setState({ city: patient.city });
    this.setState({ state: patient.state });
    this.setState({ zip_code: patient.zip_code });
    this.setState({ email: patient.email });
    this.setState({ phone: patient.phone });
  }

  handleSubmit = data => {
    if (this.state.update) {
      const { update } = this.props;
      console.log("o id", this.props.patient.id);
      update([data, this.props.patient.id]);
      this.clear();
      this.setState({ update: false });
    } else {
      const { add } = this.props;
      add(data);
      this.clear();
    }
  };

  nameChange = event => {
    this.setState({ name: event.target.value });
  };

  rgChange = event => {
    this.setState({ rg: event.target.value });
  };

  cpfChange = event => {
    this.setState({ cpf: event.target.value });
  };

  birthChange = event => {
    this.setState({ birth: event.target.value });
  };

  streetChange = event => {
    this.setState({ street: event.target.value });
  };

  numberChange = event => {
    this.setState({ number: event.target.value });
  };

  cityChange = event => {
    this.setState({ city: event.target.value });
  };

  stateChange = event => {
    this.setState({ state: event.target.value });
  };

  zip_codeChange = event => {
    this.setState({ zip_code: event.target.value });
  };

  emailChange = event => {
    this.setState({ email: event.target.value });
  };

  phoneChange = event => {
    this.setState({ phone: event.target.value });
  };

  clear = () => {
    this.setState({ update: false });
    this.setState({ id: "" });
    this.setState({ name: "" });
    this.setState({ rg: "" });
    this.setState({ cpf: "" });
    this.setState({ birth: "" });
    this.setState({ street: "" });
    this.setState({ number: "" });
    this.setState({ city: "" });
    this.setState({ state: "" });
    this.setState({ zip_code: "" });
    this.setState({ email: "" });
    this.setState({ phone: "" });
  };

  render() {
    return (
      <Container>
        <Form schema={schema} onSubmit={this.handleSubmit}>
          <FormHeader>
            <span>Cadastro de pacientes</span>
          </FormHeader>
          <FormRow>
            <FormErrCtrl>
              <label>Nome</label>
              <Input
                name="name"
                placeholder="Nome completo"
                onChange={this.nameChange}
                value={this.state.name}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>RG</label>
              <Input
                name="rg"
                placeholder="Insira o RG"
                onChange={this.rgChange}
                value={this.state.rg}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>CPF</label>
              <Input
                name="cpf"
                placeholder="Insira o CPF"
                onChange={this.cpfChange}
                value={this.state.cpf}
              />
            </FormErrCtrl>
          </FormRow>
          <FormRow>
            <FormErrCtrl>
              <label>Rua</label>
              <Input
                name="street"
                placeholder="Insira a rua"
                onChange={this.streetChange}
                value={this.state.street}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>N°</label>
              <Input
                name="number"
                placeholder="N°"
                onChange={this.numberChange}
                value={this.state.number}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>Cidade</label>
              <Input
                name="city"
                placeholder="Insira a cidade"
                onChange={this.cityChange}
                value={this.state.city}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>Estado</label>
              <Input
                name="state"
                placeholder="Sigla"
                onChange={this.stateChange}
                value={this.state.state}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>CEP</label>
              <Input
                name="zip_code"
                placeholder="Insira o CEP"
                onChange={this.zip_codeChange}
                value={this.state.zip_code}
              />
            </FormErrCtrl>
          </FormRow>
          <FormRow>
            <FormErrCtrl>
              <label>Data de Nascimento</label>
              <Input
                name="birth"
                type="date"
                onChange={this.birthChange}
                value={this.state.birth}
              />
            </FormErrCtrl>
            <FormErrCtrl id="email">
              <label>E-mail</label>
              <Input
                name="email"
                type="email"
                placeholder="Insira o e-mail"
                onChange={this.emailChange}
                value={this.state.email}
              />
            </FormErrCtrl>
            <FormErrCtrl>
              <label>Telefone</label>
              <Input
                name="phone"
                placeholder="Insira o telefone"
                onChange={this.phoneChange}
                value={this.state.phone}
              />
            </FormErrCtrl>
          </FormRow>
          <FormRowButton id="button">
            <button id="cancel" type="button" onClick={this.clear}>
              Cancelar
            </button>
            {this.state.update && (
              <button type="submit" id="update">
                Alterar
              </button>
            )}
            {!this.state.update && (
              <button type="submit" id="register">
                Cadastrar
              </button>
            )}
          </FormRowButton>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patientReducers.patients,
  patient: state.patientReducers.patient
});

const mapDispatchToProps = dispatch => ({
  add: patient => dispatch(patientActions.addPatientRequest(patient)),
  remove: patient => dispatch(patientActions.remove(patient)),
  update: patient => dispatch(patientActions.update(patient))
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);
