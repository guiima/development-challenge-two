import React, { Component } from "react";

import { Container } from "./styles";

export default class ListPatients extends Component {
  render() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
            </tr>
            <tr>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
            </tr>
            <tr>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
              <td>Rafael</td>
            </tr>
          </tbody>
        </table>
      </Container>
    );
  }
}
