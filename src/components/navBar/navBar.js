import styles from "./navBar.module.css";
const NavBar = ({ count }) => {
  return (
    <div className={styles.navBar}>
      <h1>Frontend Shopping</h1>
      <span>{count}</span>
    </div>
  );
};

export default NavBar;
