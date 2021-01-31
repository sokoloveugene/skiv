import React from "react";
import GlobalStyle from "./App.styled";
import Header from "../Header";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>Hello</div>
    </>
  );
};

export default App;
