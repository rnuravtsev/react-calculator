import ReactDOM from "react-dom";
import App from "./components/app/app";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>,
    document.querySelector(`#root`)
);
