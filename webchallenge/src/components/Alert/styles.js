import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  border: 1px solid;
  border-radius: 5px;
  border-color: #c8d6e5;
  color: #1b1464;
  font-weight: bold;
  font-size: 20px;
  min-width: 300px;
  max-width: 300px;
  margin: 50px;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin-left: -5px;
`;

export const MessageBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const FooterDialog = styled.div`
  border-top: 1px solid;
  border-color: #c8d6e5;
  display: flex;
  justify-content: center;
  padding: 5px;

  svg#close {
    color: #0abde3;
    margin-right: 30px;
  }
`;
