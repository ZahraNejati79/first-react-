import React, { Component } from "react";
import ProductList from "./components/productList/productList";
import "./App.css";
import NavBar from "./components/navBar/navBar";

class App extends Component {
  state = {
    products: [
      { title: "React", price: "100 $", id: 1, quantity: 2 },
      { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
      { title: "CSS", price: "70 $", id: 3, quantity: 3 },
    ],
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const editedProduct = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: editedProduct });
  };
  addHandler = (id) => {
    console.log("Add", id);
    const productAddCopy = [...this.state.products];
    const selectedproduct = productAddCopy.find((product) => product.id === id);
    selectedproduct.quantity++;
    this.setState({ products: productAddCopy });
  };
  subtractHandler = (id) => {
    console.log("subtract", id);
    const productSubtractCopy = [...this.state.products];
    const selectedSubtract = productSubtractCopy.find(
      (product) => product.id === id
    );

    if (selectedSubtract.quantity === 1) {
      const productFilter = this.state.products.filter(
        (product) => product.id !== id
      );

      this.setState({ products: productFilter });
    } else {
      selectedSubtract.quantity--;
      this.setState({ products: productSubtractCopy });
    }
  };
  totalCount = () => {
    return this.state.products.length;
  };
  render() {
    return (
      <div className="container" id="title">
        <NavBar count={this.totalCount()} />
        <ProductList
          products={this.state.products}
          addHandler={this.addHandler}
          subtractHandler={this.subtractHandler}
          removeHandler={this.removeHandler}
        />
      </div>
    );
  }
}

export default App;
