import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/hoc/wrapper";
import ClickCount from "./components/ClickCount";
import HoverCounter from "./components/HoverCount";

class App extends Component {
  state = {
    products: [
      { title: "React", price: "100 $", id: 1, quantity: 2 },
      { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
      { title: "CSS", price: "70 $", id: 3, quantity: 3 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const editedProduct = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: editedProduct });
  };
  addHandler = (id) => {
    const index = this.state.products.findIndex((product) => product.id === id);
    const productSelect = { ...this.state.products[index] };
    const product = [...this.state.products];
    productSelect.quantity++;
    product[index] = productSelect;
    this.setState({ products: product });
  };
  subtractHandler = (id) => {
    console.log("subtract", id);
    const index = this.state.products.findIndex((product) => product.id === id);
    const selectesItem = { ...this.state.products[index] };
    if (selectesItem.quantity === 1) {
      const editedProduct = this.state.products.filter(
        (product) => product.id !== id
      );
      this.setState({ products: editedProduct });
    } else {
      selectesItem.quantity--;
      const product = [...this.state.products];
      product[index] = selectesItem;
      this.setState({ products: product });
    }
  };
  totalCount = () => {
    return this.state.products.length;
  };
  // changeHandler(event, id) {
  //   const index = this.state.products.findIndex((product) => product.id === id);
  //   const product = { ...this.state.products[index] };
  //   product.title = event.target.value;
  //   const products = [...this.state.products];
  //   products[index] = product;
  //   this.setState({ products });

  //   // const product = [...this.state.products];
  //   // const selectItem = product.find((product) => product.id === id);
  //   // selectItem.title = event.target.value;
  //   // this.setState({ products: product });
  // }
  // componentDidUpdate(prevprops, prevState) {
  //   console.log("App.js", prevState);
  // }
  // => render
  //         <NavBar count={this.totalCount()} />
  //       <ProductList
  //         products={this.state.products}
  //         addHandler={this.addHandler}
  //         subtractHandler={this.subtractHandler}
  //         removeHandler={this.removeHandler}
  //         changeHandler={this.changeHandler}
  render() {
    return (
      <>
        <ClickCount />
        <HoverCounter />
      </>
    );
  }
}

export default Wrapper(App, "container");
