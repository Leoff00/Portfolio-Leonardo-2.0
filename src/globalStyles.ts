import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased !important;

    font-family: Arial, sans-serif;

    background: rgb(71,71,71);
    background: linear-gradient(
    180deg,
    rgba(71,71,71,1) 25%,
    rgba(51,51,51,1) 55%,
    rgba(57,57,57,1) 100%,
    rgba(255,255,255,1) 100%);

  }


  body html #root {
    height: 100%;
  }

  a, span {
    color: #000000;
  }

`;

export default GlobalStyle;
