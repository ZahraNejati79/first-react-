import { useState } from "react";
const withCounter = (WrappendComponent, incrementvalue) => {
  const UpdateComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementvalue);
    };
    return <WrappendComponent count={count} incrementCount={incrementCount} />;
  };
  return UpdateComponent;
};

export default withCounter;
