import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as s from "./App.styled";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CatalogPage from "../../pages/CatalogPage";
import Header from "../Header";
import Footer from "../Footer";

const App: React.FC = () => {
  return (
    <s.MainContainer>
      <s.GlobalStyle />
      <Header />
      <s.Content>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/catalog">
              <CatalogPage />
            </Route>
          </Switch>
        </Router>
      </s.Content>
      <Footer />
    </s.MainContainer>
  );
};

export default App;
