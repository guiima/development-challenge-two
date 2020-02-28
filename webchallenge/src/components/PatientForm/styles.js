import styled from "styled-components";

export const Container = styled.div`
  /* height: 100%; */

  form {
    border: 1px solid;
    border-color: #c8d6e5;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px 15px;

    input {
      margin: 10px 5px;
      border: 1px solid;
      border-color: #c8d6e5;
      border-radius: 5px;
      padding: 5px;
      color: gray;
      outline: none;

      ::placeholder {
        color: #8395a7;
      }
    }

    input#number {
      width: 50px;
    }

    input#state {
      width: 96px;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
`;

export const FormRowButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button#cancel {
    border: 1px solid;
    border-color: #1b1464;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
    color: #1b1464;
    background: white;

    :hover {
      background: #1b1464;
      color: white;
    }
  }

  button#register {
    border: 1px solid;
    border-color: #0abde3;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10px;
    background: #0abde3;
    color: white;

    :hover {
      background: white;
      color: #0abde3;
    }
  }

  button {
    margin: 10px 0px;
    outline: none;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;

  span {
    color: #1b1464;
    font-weight: bold;
    font-size: 25px;
  }
`;

export const FormErrCtrl = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #ee5253;
    margin-left: 5px;
  }
`;
