import { useCount, useCountAction } from "./CounterProvider";

import { useContext } from "react";
const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();

  return (
    <div>
      <h2>count is: {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: "decrement", value: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterOne;
