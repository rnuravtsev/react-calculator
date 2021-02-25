import ReactDOM from "react-dom";
import App from "./components/app/app";
import GlobalStyles from "./styles/global-styles";

ReactDOM.render(
  <>
    <GlobalStyles/>
    <App/>
  </>,
  document.querySelector(`#root`)
);
