import React, { createContext, useContext } from "react";
import RootStore from "./rootStore";

const StoreContext = createContext<RootStore>({} as RootStore);

export const useStoreContext = () => {
  return useContext(StoreContext);
};

interface StoreI {
  store: RootStore;
  children: React.ReactNode;
}

export const Store: React.FC<StoreI> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
