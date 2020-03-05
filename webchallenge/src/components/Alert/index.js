import React from "react";
import { MdClose, MdDone } from "react-icons/md";
import PropTypes from "prop-types";

import { Container, MessageBody, FooterDialog } from "./styles";

export default function Alert({ message, cancel, accept }) {
  const handleClose = () => {
    cancel();
  };

  const handleDone = () => {
    accept();
  };

  return (
    <Container>
      <MessageBody>{message}</MessageBody>
      <FooterDialog>
        <MdClose onClick={handleClose} id="close" />
        <MdDone onClick={handleDone} id="done" />
      </FooterDialog>
    </Container>
  );
}

Alert.defaultProps = {
  message: "Error",
  cancel: () => {},
  accept: () => {}
};

Alert.propTypes = {
  message: PropTypes.string,
  cancel: PropTypes.func,
  accept: PropTypes.func
};
