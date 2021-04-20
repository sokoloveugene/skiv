import React from "react";
import ReactDOM from "react-dom";
import { autorun } from "mobx";
import { enableLogging } from "mobx-logger";
import { Store } from "store/storeContext";
import RootStore from "store/rootStore";
import App from "components/App";
import { setLocalStorage } from "helpers/localStorage";

enableLogging();

// eslint-disable-next-line
export const rootStore = new RootStore();

autorun(() => {
  setLocalStorage("cart", rootStore.cartStore.cart);
});

autorun(() => {
  setLocalStorage("wishList", rootStore.wishStore.wishList);
});

ReactDOM.render(
  <React.StrictMode>
    <Store store={rootStore}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
