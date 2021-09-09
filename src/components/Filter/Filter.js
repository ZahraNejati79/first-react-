import { useState } from "react";
import { useProductAction } from "../providerContext/providerContext";
import Select from "react-select";
import styles from "./Filter.module.css";
const options = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");
  const filtertHandler = (selectedOption) => {
    console.log("selectedOption :", selectedOption);
    dispatch({ type: "filter", selectedOption });
    setValue(selectedOption);
  };
  return (
    <div className={styles.filterContainer}>
      <p>Filter Products based on</p>
      <div className={styles.FilterSelect}>
        order by :
        <Select
          className={styles.Select}
          value={value}
          onChange={filtertHandler}
          options={options}
        />
      </div>
    </div>
  );
};

export default Filter;
