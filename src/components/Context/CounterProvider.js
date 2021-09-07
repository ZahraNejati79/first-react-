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
export const useCountAction = () => useContext(CounterContextDidPatcher);
// export const useCountAction = () => {
//   const setCounter = useContext(CounterContextDidPatcher);
//   const addOne = () => {
//     setCounter((PrevCount) => PrevCount + 1);
//   };
//   const addFive = () => {
//     setCounter((PrevCount) => PrevCount + 1);
//   };
//   const decrement = () => {
//     setCounter((PrevCount) => PrevCount - 1);
//   };
//   return { addOne, addFive, decrement };
// };
