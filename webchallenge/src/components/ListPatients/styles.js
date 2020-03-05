import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  margin-top: 50px;

  table {
    border-collapse: collapse;
    width: 100%;
    color: gray;
    font-size: 14px;
  }

  th {
    color: #1b1464;
  }

  td {
    color: gray;
  }

  td,
  th {
    border: 1px solid #c8d6e5;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  button {
    border: none;
    margin: 10px 0px;
    outline: none;
    background: none;
    cursor: pointer;
  }

  button#edit {
    margin-right: 10px;
    color: #0abde3;
  }

  button#delete {
    color: #1b1464;
  }
`;
