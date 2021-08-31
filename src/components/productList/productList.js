import React, { Component } from "react";
import Product from "../product/product";
class ProductList extends Component {
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
  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              product={product}
              key={product.id}
              onAdd={() => this.addHandler(product.id)}
              onSubtract={() => this.subtractHandler(product.id)}
              onDelete={() => this.removeHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
