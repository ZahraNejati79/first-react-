import React, { Component, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import ProductList from "./components/productList/productList";
import Wrapper from "./components/hoc/Wrapper";
import ProviderContext from "./components/providerContext/providerContext";

const App = () => {
  return (
    <>
      <ProviderContext>
        <NavBar />
        <ProductList />
      </ProviderContext>
    </>
  );
};

export default Wrapper(App, "container");
