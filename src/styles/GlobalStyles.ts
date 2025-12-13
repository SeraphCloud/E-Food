import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  background: '#FFF8F2',
  white: '#FFFFFF',
  lightPink: '#FFEBD9',
  textDark: '#4B4B4B'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.background};
    color: ${colors.textDark};
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`
