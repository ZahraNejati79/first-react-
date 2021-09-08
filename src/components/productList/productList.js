import React, { Component } from "react";
import Product from "../product/product";
import {
  useProductAction,
  useProducts,
} from "../providerContext/providerContext";

const ProductList = () => {
  const { addHandler, subtractHandler, removeHandler, changeHandler } =
    useProductAction();

  const products = useProducts();
  console.log("products", products);
  return (
    <div>
      {products.map((product, index) => {
        return (
          <Product
            product={product}
            key={product.id}
            onAdd={() => addHandler(product.id)}
            onSubtract={() => subtractHandler(product.id)}
            onDelete={() => removeHandler(product.id)}
            changeHandler={(event) => changeHandler(event, product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
