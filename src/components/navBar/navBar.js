import styles from "./navBar.module.css";
const NavBar = (props) => {
  return (
    <div className={styles.navBar}>
      <h1>Frontend Shopping</h1>
      <span>{props.count}</span>
    </div>
  );
};

export default NavBar;
