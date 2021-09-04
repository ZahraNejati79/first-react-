import React from "react";
const MemoComp = (props) => {
  return <div>MemoComp {props.name}</div>;
};

export default React.memo(MemoComp);
