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
const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];
const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const filtertHandler = (selectedOption) => {
    console.log("selectedOption :", selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption });
    setValue(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    console.log("selectedOption :", selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
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
      <div className={styles.FilterSelect}>
        sort by :
        <Select
          className={styles.Select}
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};

export default Filter;
