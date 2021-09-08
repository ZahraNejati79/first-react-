import React, { useContext, useReducer, useState } from "react";
import { productsData } from "../db/products";

const ProductContext = React.createContext();
const ProductContextDidPatcher = React.createContext();

// const initialState = [
//   { title: "React", price: "100 $", id: 1, quantity: 2 },
//   { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
//   { title: "CSS", price: "70 $", id: 3, quantity: 3 },
// ];
const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const index = state.findIndex((product) => product.id === action.id);
      const productSelect = { ...state[index] };
      const product = [...state];
      productSelect.quantity++;
      product[index] = productSelect;
      return product;
    }
    case "decrement": {
      const index = state.findIndex((product) => product.id === action.id);
      const selectesItem = { ...state[index] };
      if (selectesItem.quantity === 1) {
        const editedProduct = state.filter(
          (product) => product.id !== action.id
        );
        return editedProduct;
      } else {
        selectesItem.quantity--;
        const product = [...state];
        product[index] = selectesItem;
        return product;
      }
    }
    case "edit": {
      const index = state.findeIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updateProductIndex = [...product];
      updateProductIndex = product;
      return updateProductIndex;
    }
    case "delete": {
      console.log("clicked", action.id);
      const editedProduct = state.filter((product) => product.id !== action.id);
      return editedProduct;
    }
    case "filter": {
      if (action.event === "") {
        return productsData;
      } else {
        const Filtered = productsData.filter((product) => {
          return product.availableSize.indexOf(action.event) >= 0;
        });

        return Filtered;
      }
    }
    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDidPatcher.Provider value={dispatch}>
        {children}
      </ProductContextDidPatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDidPatcher);

// const addHandler = (id) => {
//   const index = products.findIndex((product) => product.id === id);
//   const productSelect = { ...products[index] };
//   const product = [...products];
//   productSelect.quantity++;
//   product[index] = productSelect;
//   setProduct(product);
// };

// const subtractHandler = (id) => {
//   console.log("subtract", id);
//   const index = products.findIndex((product) => product.id === id);
//   const selectesItem = { ...products[index] };
//   if (selectesItem.quantity === 1) {
//     const editedProduct = products.filter((product) => product.id !== id);
//     setProduct(editedProduct);
//   } else {
//     selectesItem.quantity--;
//     const product = [...products];
//     product[index] = selectesItem;
//     setProduct(product);
//   }
// };

// const removeHandler = (id) => {
//   console.log("clicked", id);
//   const editedProduct = products.filter((product) => product.id !== id);
//   setProduct(editedProduct);
// };
// const changeHandler = (event) => {
//   const index = products.findeIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   product.title = event.target.value;
//   const updateProductIndex = [...product];
//   updateProductIndex = product;
//   return updateProductIndex;
// };
// return { addHandler, subtractHandler, removeHandler, changeHandler };
