import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import ListPatients from "./components/ListPatients";

import { Container } from "./styles";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Container>
          <PatientForm />
          <ListPatients />
        </Container>
      </Provider>
    </>
  );
}

export default App;
