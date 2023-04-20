import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  body, input, textarea, button {
    font-size:  62.5%;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2';
  }
`
