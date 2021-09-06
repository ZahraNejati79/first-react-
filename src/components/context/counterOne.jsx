import { CounterContext, CounterContextDidPatcher } from "./counterProvider";
import { useContext } from "react";
const CounterOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDidPatcher);
  console.log("counterone");
  return (
    <div>
      <h2>count is: {count}</h2>
      <button onClick={() => setCount(count + 1)}> Add One</button>
    </div>
  );
};

export default CounterOne;
