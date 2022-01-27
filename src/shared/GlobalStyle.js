import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${'' /* VARIABLES */}
  }

  * {
    box-sizing: border-box;

  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img {
    ${'' /* width: 100px; */}
  }
`