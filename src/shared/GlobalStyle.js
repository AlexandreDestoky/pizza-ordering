import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${'' /* VARIABLES */}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body {
    box-sizing: border-box;
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
  }

`