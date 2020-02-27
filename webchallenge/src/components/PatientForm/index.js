import React, { Component } from "react";

import { Container, FormRow, FormRowButton, FormHeader } from "./styles";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  rg: Yup.string().required(),
  cpf: Yup.string().required(),
  street: Yup.string().required(),
  number: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zipCode: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().required()
});

export default class PatientForm extends Component {
  handleSubmit = (data, { resetForm }) => {
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
            <Input name="name" placeholder="Nome Completo" />
            <Input name="rg" placeholder="RG" />
            <Input name="cpf" placeholder="CPF" />
          </FormRow>
          <FormRow>
            <Input name="street" placeholder="Rua" />
            <Input name="number" placeholder="Número" />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
          </FormRow>
          <FormRow>
            <Input name="zipCode" placeholder="CEP" />
            <Input name="email" placeholder="E-mail" />
            <Input name="phone" placeholder="Telefone" />
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
