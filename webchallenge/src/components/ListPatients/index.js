import React, { Component } from "react";
import { connect } from "react-redux";

import { MdClear, MdCreate } from "react-icons/md";

import patientActions from "../../actions";

import { Container } from "./styles";

class ListPatients extends Component {
  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  handleDelete = id => {
    const { remove } = this.props;
    remove(id);
  };

  handleEdit = id => {
    const { get } = this.props;
    get(id);
  };

  render() {
    const { patients } = this.props;
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
              <th>Nascimento</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.rg}</td>
                <td>{patient.cpf}</td>
                <td>{patient.street}</td>
                <td>{patient.number}</td>
                <td>{patient.city}</td>
                <td>{patient.state}</td>
                <td>{patient.zip_code}</td>
                <td>{patient.birth}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>
                  <button id="edit" onClick={() => this.handleEdit(patient.id)}>
                    <MdCreate />
                  </button>
                  <button
                    id="delete"
                    onClick={() => this.handleDelete(patient.id)}
                  >
                    <MdClear />
                  </button>
                </td>
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
  getAll: () => dispatch(patientActions.requestGetAll()),
  remove: patient => dispatch(patientActions.remove(patient)),
  get: patient => dispatch(patientActions.get(patient))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPatients);
