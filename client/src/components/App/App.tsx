import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "pages/ProductPage";
import HomePage from "pages/HomePage";
import CatalogPage from "pages/CatalogPage";
import Cart from "pages/Cart";
import Header from "../Header";
import Footer from "../Footer";
import * as s from "./App.styled";

const App: React.FC = () => {
  return (
    <s.MainContainer>
      <Router>
        <s.GlobalStyle />
        <Header />
        <s.Content>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/catalog">
              <CatalogPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </s.Content>
        <Footer />
      </Router>
    </s.MainContainer>
  );
};

export default App;
