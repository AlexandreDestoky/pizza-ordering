import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white:#fff;
    --black:#000;
    --lightGrey : #eee;
    --darkGrey : #bbb;
    --lightPrimary : #bd0f0f;
    --primary: #8b0000;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    background-color: var(--lightGrey);
    font-family: 'Roboto', sans-serif;
  }
`;
