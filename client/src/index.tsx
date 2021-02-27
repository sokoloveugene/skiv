import React from "react";
import ReactDOM from "react-dom";
import { autorun } from "mobx";
import { Store } from "./store/storeContext";
import RootStore from "./store/rootStore";
import App from "./components/App/App";
import { setLocalStorage } from "./helpers/localStorage";

const rootStore = new RootStore();

autorun(() => {
  setLocalStorage("cart", rootStore.cartStore.cart);
});

ReactDOM.render(
  <React.StrictMode>
    <Store store={rootStore}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
