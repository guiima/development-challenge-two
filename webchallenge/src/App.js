import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";

import { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <PatientForm />
      </Container>
    </>
  );
}

export default App;
