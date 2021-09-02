import { useEffect, useState } from "react";

const FunctionCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("document title updatting");
    document.title = `clicked ${counter} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <button onClick={() => setCounter(counter + 1)}>count : {counter}</button>
    </div>
  );
};

export default FunctionCounter;
