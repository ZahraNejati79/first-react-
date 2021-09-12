import Select from "react-select";
import styles from "./Select.module.css";
const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.Select}>
      <div>{title}</div>
      <Select {...rest} />
    </div>
  );
};

export default SelectComponent;
