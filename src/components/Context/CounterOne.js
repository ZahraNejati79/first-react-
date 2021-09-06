import { useCount, useCountAction } from "./CounterProvider";

import { useContext } from "react";
const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive, decrement } = useCountAction();

  return (
    <div>
      <h2>count is: {count}</h2>
      <button onClick={addOne}> Add One</button>
      <button onClick={addFive}> Add Five</button>
      <button onClick={decrement}> decrement</button>
    </div>
  );
};

export default CounterOne;
