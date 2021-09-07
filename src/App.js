import React, { Component, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import ProductList from "./components/productList/productList";
import Wrapper from "./components/hoc/Wrapper";

const App = () => {
  const [products, setProduct] = useState([
    { title: "React", price: "100 $", id: 1, quantity: 2 },
    { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
    { title: "CSS", price: "70 $", id: 3, quantity: 3 },
  ]);
  const addHandler = (id) => {
    const index = products.findIndex((product) => product.id === id);
    const productSelect = { ...products[index] };
    const product = [...products];
    productSelect.quantity++;
    product[index] = productSelect;
    setProduct(product);
  };
  const subtractHandler = (id) => {
    console.log("subtract", id);
    const index = products.findIndex((product) => product.id === id);
    const selectesItem = { ...products[index] };
    if (selectesItem.quantity === 1) {
      const editedProduct = products.filter((product) => product.id !== id);
      setProduct(editedProduct);
    } else {
      selectesItem.quantity--;
      const product = [...products];
      product[index] = selectesItem;
      setProduct(product);
    }
  };
  const removeHandler = (id) => {
    console.log("clicked", id);
    const editedProduct = products.filter((product) => product.id !== id);
    setProduct(editedProduct);
  };
  const changeHandler = () => {};
  const totalCount = () => {
    return products.length;
  };
  return (
    <div>
      <NavBar count={totalCount()} />
      <ProductList
        products={products}
        addHandler={addHandler}
        subtractHandler={subtractHandler}
        removeHandler={removeHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default Wrapper(App, "container");
