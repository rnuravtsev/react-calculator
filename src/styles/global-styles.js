import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
  font-family: 'JetBrains Mono', 'Arial', monospace;
  }
`;

export default GlobalStyles;
