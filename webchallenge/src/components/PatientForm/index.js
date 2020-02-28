import React, { Component } from "react";

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
  street: Yup.string().required("Insira a rua"),
  number: Yup.string().required("Insira o n°"),
  city: Yup.string().required("Insira a cidade"),
  state: Yup.string().required("Insira o estado"),
  zipCode: Yup.string().required("Insira o CEP"),
  email: Yup.string().required("Insira o e-mail"),
  phone: Yup.string().required("Insira o telefone")
});

export default class PatientForm extends Component {
  handleSubmit = (data, { resetForm }) => {
    console.log(data);
    resetForm();
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
              <Input name="name" placeholder="Nome Completo" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="rg" placeholder="RG" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="cpf" placeholder="CPF" />
            </FormErrCtrl>
          </FormRow>
          <FormRow>
            <FormErrCtrl>
              <Input name="street" placeholder="Rua" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="number" placeholder="N°" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="city" placeholder="Cidade" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="state" placeholder="Estado" />
            </FormErrCtrl>
          </FormRow>
          <FormRow>
            <FormErrCtrl>
              <Input name="zipCode" placeholder="CEP" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="email" type="email" placeholder="E-mail" />
            </FormErrCtrl>
            <FormErrCtrl>
              <Input name="phone" placeholder="Telefone" />
            </FormErrCtrl>
          </FormRow>
          <FormRowButton id="button">
            <button id="cancel" type="reset">
              Cancelar
            </button>
            <button type="submit" id="register">
              Cadastrar
            </button>
          </FormRowButton>
        </Form>
      </Container>
    );
  }
}
