import Select from "react-select";
import styles from "./Select.module.css";
const SelectComponent = ({ value, onChange, options, title, className }) => {
  return (
    <div className={className}>
      <div>{title}</div>
      <Select
        className={styles.Select}
        value={value}
        onChange={onChange}
        options={options}
        title={title}
      />
    </div>
  );
};

export default SelectComponent;
