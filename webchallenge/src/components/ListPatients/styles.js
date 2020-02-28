import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  margin-top: 50px;

  table {
    border-collapse: collapse;
    width: 100%;
    color: gray;
  }

  th {
    color: #1b1464;
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
`;
