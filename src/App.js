import React, { Component } from "react";
import render from "react-dom";
import Product from "./components/product/product.js";

class App extends Component {
  state = {
    products: [
      { title: "React", price: "100 $" },
      { title: "JavaScript", price: "90 $" },
      { title: "CSS", price: "70 $" },
    ],
  };

  render() {
    return (
      <div className="container" id="title">
        <h1>Shopping App</h1>
        {this.state.products.map((product) => {
          console.log(product.title);
          return <Product name={product.title} price={product.price} />;
        })}
      </div>
    );
  }
}

export default App;
