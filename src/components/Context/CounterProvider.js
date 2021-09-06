import React, { useContext, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDidPatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(4);
  console.log(count);
  console.log(children);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDidPatcher.Provider value={setCount}>
        {children}
      </CounterContextDidPatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  const setCounter = useContext(CounterContextDidPatcher);
  const addOne = () => {
    return setCounter((prevCout) => prevCout + 1);
  };
  const addFive = () => {
    return setCounter((prevCout) => prevCout + 5);
  };
  const decrement = () => {
    return setCounter((prevCout) => prevCout - 1);
  };
  return { addOne, addFive, decrement };
};
