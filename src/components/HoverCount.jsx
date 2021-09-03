import React, { useState } from "react";
import withCounter from "./hoc/withCounter";
const HoverCounter = ({ count, incerementCount }) => {
  console.log("HHHHHHHHHHHoooooooverrrrrrrrr");
  return (
    <div>
      <h2 onMouseOver={incerementCount}>hover Add {count}</h2>
    </div>
  );
};

export default withCounter(HoverCounter, 10);
