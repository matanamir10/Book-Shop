import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "./config/axios";
import { App } from "./containers/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/storeConfig";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
