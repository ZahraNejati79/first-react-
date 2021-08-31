import React, { Component } from "react";
import ProductList from "./components/productList/productList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container" id="title">
        <ProductList />
      </div>
    );
  }
}

// const App = () => {
//   const [products, setproducts] = useState([
//     { title: "React", price: "100 $" },
//     { title: "JavaScript", price: "90 $" },
//     { title: "CSS", price: "70 $" },
//   ]);
//   const clickHandeler = () => {
//     setproducts([
//       { title: "React", price: "80 $" },
//       { title: "JavaScript", price: "50 $" },
//       { title: "CSS", price: "30 $" },
//     ]);
//   };
//   return (
//     <div className="container" id="title">
//       <h1>Shopping App</h1>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickHandeler}>change price</button>
//     </div>
//   );
// };

// const App = () => {
//   return <Product />;
// };

export default App;
