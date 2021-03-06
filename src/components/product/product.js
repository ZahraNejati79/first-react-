// import "./product.css";
import styles from "./product.module.css";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";

const Product = ({ product, onAdd, onSubtract, onDelete, changeHandler }) => {
  return (
    <div className={styles.product}>
      <p>product name : {product.title} </p>
      <p>product price : {product.price}</p>
      <span className={styles.quantity}>{product.quantity}</span>

      {/* <input type="text" onChange={changeHandler} value={product.title}></input> */}

      <button className={styles.addButton} onClick={onAdd}>
        +
      </button>
      <button
        className={`${styles.subtractButton} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onSubtract}
      >
        {product.quantity > 1 ? "-" : <FaTrash />}
      </button>
      <button className={styles.deleteButton} onClick={onDelete}>
        delete
      </button>
    </div>
  );
};
export default Product;

// const Product = ({ product, onAdd, onSubtract, onDelete, click }) => {
//   return (
//     <div className={styles.product} onClick={click}>
//       <p>product name : {product.title} course</p>
//       <p>product price : {product.price}</p>
//       <span className={styles.quantity}>{product.quantity}</span>
//       {/* <form>
//         <input type="text" onChange={changeHandler}></input>
//       </form> */}
//       <button className={styles.addButton} onClick={onAdd}>
//         +
//       </button>
//       <button
//         className={`${styles.subtractButton} ${
//           product.quantity === 1 && styles.remove
//         }`}
//         onClick={onSubtract}
//       >
//         {product.quantity > 1 ? "-" : <FaTrash />}
//       </button>
//       <button className={styles.deleteButton} onClick={onDelete}>
//         delete
//       </button>
//     </div>
//   );
// };

// export default Product;
