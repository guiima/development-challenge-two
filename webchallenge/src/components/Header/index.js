import React, { Component } from "react";

import { Container } from "./styles";
import logo from "../../assets/med-logo.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt="Logo" />
      </Container>
    );
  }
}
