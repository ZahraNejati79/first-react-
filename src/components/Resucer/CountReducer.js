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
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h2> count is: {count}</h2>
        {console.log("count is:", count)}
        <button onClick={() => dispatch({ type: "add", value: 1 })}>Add</button>
        <button onClick={() => dispatch({ type: "decrement", value: -1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "rese t", value: 0 })}>
          Reset
        </button>
      </div>
      <div>
        <h2> count is: {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
          Add
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: -1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset", value: 0 })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
