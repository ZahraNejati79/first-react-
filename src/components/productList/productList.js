import React, { Component } from "react";
import Product from "../product/product";
class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product, index) => {
          return (
            <Product
              product={product}
              key={product.id}
              onAdd={() => this.props.addHandler(product.id)}
              onSubtract={() => this.props.subtractHandler(product.id)}
              onDelete={() => this.props.removeHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
