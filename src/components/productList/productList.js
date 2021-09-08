import React, { Component } from "react";
import Product from "../product/product";
import {
  useProductAction,
  useProducts,
} from "../providerContext/providerContext";

const ProductList = () => {
  const dispatch = useProductAction();

  const products = useProducts();
  console.log("products", products);
  return (
    <div>
      {products.map((product, index) => {
        return (
          <Product
            product={product}
            key={product.id}
            onAdd={() => dispatch({ type: "add", id: product.id })}
            onSubtract={() => dispatch({ type: "decrement", id: product.id })}
            onDelete={() => dispatch({ type: "delete", id: product.id })}
            changeHandler={(event) =>
              dispatch({ type: "add", id: product.id, event: event })
            }
          />
        );
      })}
    </div>
  );
};

export default ProductList;
