import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import ListPatients from "./components/ListPatients";

import { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <PatientForm />
        <ListPatients />
      </Container>
    </>
  );
}

export default App;
