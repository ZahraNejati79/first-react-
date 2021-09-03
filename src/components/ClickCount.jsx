import React, { Component, useState } from "react";
import withCounter from "./hoc/withCounter";
const ClickCount = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onClick={incrementCount}>Click Add {count}</h2>
    </div>
  );
};

export default withCounter(ClickCount, 5);
