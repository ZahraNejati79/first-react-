import React, { useContext, useReducer, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDidPatcher = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state + action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDidPatcher.Provider value={dispatch}>
        {children}
      </CounterContextDidPatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  return useContext(CounterContextDidPatcher);
};
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
