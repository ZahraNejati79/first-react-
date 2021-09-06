import React, { useState } from "react";
export const CounterContext = React.createContext();
export const CounterContextDidPatcher = React.createContext();
const CounterProvider = ({ Children }) => {
  const [count, setCount] = useState(4);
  console.log("counterprovider");
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDidPatcher.Provider value={setCount}>
        {Children}
      </CounterContextDidPatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
