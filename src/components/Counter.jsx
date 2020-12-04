import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(10)
  const step = 2;
  // console.log("count", count);

  const increase = () => {
    setCount(count + step)
  }

  const decrease = () => {
    setCount(count - step)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;