import React, { useContext } from "react";

const productContext = Raact.createContect();
const productContextDidPatcher = Raact.createContect();

const initialState = {
  products: [
    { title: "React", price: "100 $", id: 1, quantity: 2 },
    { title: "JavaScript", price: "90 $", id: 2, quantity: 4 },
    { title: "CSS", price: "70 $", id: 3, quantity: 3 },
  ],
};
const reducer =(state,)=>{

}
const ProductContext = ({ children }) => {
  const [product, action] = useContext(reducer, initialState);
  return (
    <productContext.provider value={initialState.products[index].}>
      <productContextDidPatcher.provider>
        {children}
      </productContextDidPatcher.provider>
    </productContext.provider>
  );
};

export default ProductContext;

export const useProduct = () => useContext(productContext);
export const useProductAction = () => useContext(productContextDidPatcher);
