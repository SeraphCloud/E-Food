import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
	orange: "#E66767",
	cream: "#FFEBD9",
	offwhite: "#FFF8F2",
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
  }

  body {
    background-color: ${Colors.offwhite};
  }

  `;

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
