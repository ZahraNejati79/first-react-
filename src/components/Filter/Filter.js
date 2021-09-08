import { useState } from "react";
import { useProductAction } from "../providerContext/providerContext";
import Select from "react-select";
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
    // dispatch({ type: "filter", event: e.target.value });
    // setValue(e.target.value);
  };
  return (
    <div>
      <h2>Filter Products based on</h2>
      <div>
        order by :
        <Select value={value} onChange={filtertHandler} options={options} />
      </div>
    </div>
  );
};

export default Filter;
