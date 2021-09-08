import {
  useProductAction,
  useProducts,
} from "../providerContext/providerContext";
import styles from "./navBar.module.css";

const NavBar = () => {
  const products = useProducts();
  useProductAction();
  const total = products.length;
  return (
    <div className={styles.navBar}>
      <h1>Frontend Shopping</h1>
      <span>{total}</span>
    </div>
  );
};

export default NavBar;
