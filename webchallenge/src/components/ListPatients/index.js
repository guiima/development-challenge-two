import React, { Component } from "react";
import { connect } from "react-redux";

import { MdClear, MdCreate } from "react-icons/md";

import patientActions from "../../actions";
import Alert from "../Alert";

import { Container } from "./styles";

class ListPatients extends Component {
  state = {
    positionX: "",
    positionY: "",
    alert: false,
    patientId: ""
  };

  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }

  handleDelete = patient => {
    const { remove } = this.props;
    remove(this.state.patientId);
    this.setState({ alert: false });
  };

  handleDeleteDialog = data => {
    this.setState({ positionX: data[0].clientX });
    this.setState({ positionY: data[0].clientY });
    this.setState({ patientId: data[1] });
    this.setState({ alert: true });
    window.scrollTo(0, 0);
  };

  handleEdit = id => {
    const { get } = this.props;
    get(id);
  };

  handleCancel = () => {
    this.setState({ alert: false });
  };

  render() {
    const { patients } = this.props;
    return (
      <>
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
                  <td>{patient.formatedDate}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>
                    <button
                      id="edit"
                      onClick={() => this.handleEdit(patient.id)}
                    >
                      <MdCreate />
                    </button>
                    <button
                      id="delete"
                      onClick={e => this.handleDeleteDialog([e, patient.id])}
                    >
                      <MdClear />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
        {this.state.alert && (
          <Alert
            message="Tem certeza que deseja excluir este paciente?"
            cancel={this.handleCancel}
            accept={this.handleDelete}
            // style={{
            //   top: this.state.positionX,
            //   left: this.state.positionY
            // }}
          />
        )}
      </>
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
