import React, { useReducer, useState } from "react";

// initialState = 0;
// const reduce = (state, action) => {
//   switch (action) {
//     case "addOne":
//       return count + 1;
//     case "addFive":
//       return count + 5;
//     case "decrement":
//       return count - 1;
//   }
// };
// const CounterOne = () => {
//   const [count, dispatch] = useReducer(reduce, initialState);
//   return (
//     <div>
//       <h2> count is: {count}</h2>
//       <button onClick={() => dispatch("addOne")}></button>
//       <button onClick={() => dispatch("addFive")}></button>
//       <button onClick={() => dispatch("decrement")}></button>
//     </div>
//   );
// };

// export default CounterOne;
const initialState = {
  firstButton: 0,
  secondButton: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add1":
      return { ...state, firstButton: state.firstButton + action.value };
    case "add2":
      return { ...state, secondButton: state.secondButton + action.value };
    case "decrement1":
      return { ...state, firstButton: state.firstButton + action.value };
    case "decrement2":
      return { ...state, secondButton: state.secondButton + action.value };
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> count is: {count.firstButton}</h2>
      <h2> count is: {count.secondButton}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add1", value: 1 })}>
          {" "}
          Add{" "}
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: -1 })}>
          {" "}
          Decrement{" "}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          {" "}
          Add{" "}
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: -1 })}>
          {" "}
          Decrement{" "}
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
