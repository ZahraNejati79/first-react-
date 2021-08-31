// import "./product.css";
import styles from "./product.module.css";
import { FaTrash } from "react-icons/fa";
const Product = (props) => {
  console.log(props);
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.product.name} course</p>
      <p>product price : {props.product.price}</p>
      <span className={styles.quantity}>{props.product.quantity}</span>
      <button className={styles.addButton} onClick={props.onAdd}>
        +
      </button>
      <button
        className={`${styles.subtractButton} ${
          props.product.quantity === 1 && styles.remove
        }`}
        onClick={props.onSubtract}
      >
        {props.product.quantity > 1 ? "-" : <FaTrash />}
      </button>
      <button className={styles.deleteButton} onClick={props.onDelete}>
        delete
      </button>
    </div>
  );
};
export default Product;
