import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "App";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>,
);
