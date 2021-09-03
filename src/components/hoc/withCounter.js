import { useState } from "react";
const withCounter = (wrappendComponent, incrementvalue) => {
  const UpdateComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementvalue);
    };
    return <wrappendComponent count={count} incrementCount={incrementCount} />;
  };
  return <UpdateComponent />;
};

export default withCounter;
