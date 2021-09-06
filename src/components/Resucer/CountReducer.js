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
//       <butto onClick={() => dispatch("addOne")}></butto>
//       <butto onClick={() => dispatch("addFive")}></butto>
//       <butto onClick={() => dispatch("decrement")}></butto>
//     </div>
//   );
// };

// export default CounterOne;
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("count:", { count });
  return (
    <div>
      <h2> count is: {count}</h2>
      <butto onClick={() => dispatch("addOne")}> Add one </butto>
      <butto onClick={() => dispatch("addFive")}> Add Five </butto>
      <butto onClick={() => dispatch("decrement")}> Decrement </butto>
    </div>
  );
};

export default CounterOne;
