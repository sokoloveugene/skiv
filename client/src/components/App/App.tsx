import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRouteFromUnauthorized from "components/ProtectedRouteFromUnauthorized";
import ProductPage from "pages/ProductPage";
import HomePage from "pages/HomePage";
import CatalogPage from "pages/CatalogPage";
import SearchPage from "pages/SearchPage";
import Cart from "pages/Cart";
import CheckoutPage from "pages/CheckoutPage";
import LoginPage from "pages/LoginPage";
import CreateProductPage from "pages/CreateProductPage";
import EditProductPage from "pages/EditProductPage";
import Header from "../Header";
import Footer from "../Footer";
import * as s from "./App.styled";

const App: React.FC = () => {
  return (
    <>
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
              <Route path="/find">
                <SearchPage />
              </Route>
              <Route path="/checkout">
                <CheckoutPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <ProtectedRouteFromUnauthorized path="/create">
                <CreateProductPage />
              </ProtectedRouteFromUnauthorized>
              <ProtectedRouteFromUnauthorized path="/edit/:id">
                <EditProductPage />
              </ProtectedRouteFromUnauthorized>
            </Switch>
          </s.Content>
        </Router>
      </s.MainContainer>
      <Footer />
    </>
  );
};

export default App;
