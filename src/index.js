import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import ScrollToTop from "./shared/scrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
