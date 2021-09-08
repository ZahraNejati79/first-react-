import React, { useContext, useReducer, useState } from "react";

const ProductContext = React.createContext();
const ProductContextDidPatcher = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([
    { title: "React", price: "100 $", id: 1, quantity: 2 },
    { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
    { title: "CSS", price: "70 $", id: 3, quantity: 3 },
  ]);
  console.log(setProduct);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDidPatcher.Provider value={setProduct}>
        {children}
      </ProductContextDidPatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductAction = () => {
  const products = useContext(ProductContext);
  const setProduct = useContext(ProductContextDidPatcher);
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
  return { addHandler, subtractHandler, removeHandler, changeHandler };
};
