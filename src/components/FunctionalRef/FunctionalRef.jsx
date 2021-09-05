import { useEffect, useRef, useState } from "react";
const FunctionalRef = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const countRef = useRef();
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = () => {
    setCount(Math.ceil(Math.random() * 100));
  };
  useEffect(() => {
    inputRef.current = input;
  }, [input]);
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  return (
    <div>
      <input type="text" value={input} onChange={changeHandler} />
      <p>
        input name :{input} previouse name : {inputRef.current}
      </p>
      <button onClick={clickHandler}>
        count:{count} previousCount:{countRef.current}
      </button>
    </div>
  );
};

export default FunctionalRef;
