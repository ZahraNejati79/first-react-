import { useState } from "react";
import styles from "./Search.module.css";
import { useProductAction } from "../../components/providerContext/providerContext";

const SearchBar = ({ filter }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductAction();
  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e.target.value });
    setValue(e.target.value);
  };
  return (
    <div className={styles.search}>
      <p>search for </p>
      <input
        value={value}
        onChange={changeHandler}
        placeholder="search for"
        type="text"
      ></input>
    </div>
  );
};

export default SearchBar;
