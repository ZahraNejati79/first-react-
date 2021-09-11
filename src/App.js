import React, { Component, useState } from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import NavBar from "./components/navBar/navBar";
import ProductList from "./components/productList/productList";
import Wrapper from "./components/hoc/Wrapper";
import ProviderContext from "./components/providerContext/providerContext";
import SearchBar from "./common/Search/Search";

const App = () => {
  return (
    <>
      <ProviderContext>
        <NavBar />
        <SearchBar />
        <Filter />
        <ProductList />
      </ProviderContext>
    </>
  );
};

export default Wrapper(App, "container");
