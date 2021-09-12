import { useState } from "react";
import { useProductAction } from "../providerContext/providerContext";
import styles from "./Filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";

const options = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "", label: "highest" },
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];
const Filter = () => {
  const dispatch = useProductAction();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const filtertHandler = (selectedOption) => {
    console.log("selectedOption :", selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    console.log("selectedOption :", selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <>
      <SearchBar filter={filter} />

      <div className={styles.filterContainer}>
        <p>Filter Products based on</p>
        <SelectComponent
          options={options}
          value={filter}
          onChange={filtertHandler}
          title="order by"
        />
        <SelectComponent
          options={sortOptions}
          value={sort}
          onChange={sortHandler}
          title="sort by"
        />
      </div>
    </>
  );
};

export default Filter;
