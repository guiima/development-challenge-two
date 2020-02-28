import React, { Component } from "react";
import { connect } from "react-redux";

import patientActions from "../../actions";

import { Container } from "./styles";

class ListPatients extends Component {
  state = {
    patient: ""
  };

  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  render() {
    const { patients } = this.props;
    const { patient } = this.state;
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Rua</th>
              <th>N°</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>CEP</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <th>{patient.name}</th>
                <th>{patient.rg}</th>
                <th>{patient.cpf}</th>
                <th>{patient.street}</th>
                <th>{patient.number}</th>
                <th>{patient.city}</th>
                <th>{patient.state}</th>
                <th>{patient.zip_code}</th>
                <th>{patient.email}</th>
                <th>{patient.phone}</th>
                <th>
                  <button>Editar</button>
                  <button>deletar</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patientReducers.patients
});

const mapDispatchToProps = dispatch => ({
  add: patient => dispatch(patientActions.add(patient)),
  getAll: () => dispatch(patientActions.requestGetAll()),
  remove: patient => dispatch(patientActions.remove(patient))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPatients);
