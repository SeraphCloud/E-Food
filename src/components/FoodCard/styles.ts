import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 340px;
  background-color: #E66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: #FFEBD9;

  img {
    max-width: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 8px;
    line-height: 22px;
  }

  button {
    background-color: #FFEBD9;
    padding: 4px 0;
    text-align: center;
    color: #E66767;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;
