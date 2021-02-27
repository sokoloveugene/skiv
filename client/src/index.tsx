import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./store/storeContext";
import RootStore from "./store/rootStore";
import App from "./components/App/App";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Store store={rootStore}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
