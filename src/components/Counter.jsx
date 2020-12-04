import React from "react";

import { useCount } from "./customHooks/useCount";

const Counter = ({ initValue }) => {
  // const [count, setCount] = useState(10)
  // const step = 2;
  // // console.log("count", count);

  // const increase = () => {
  //   setCount(count + step)
  // }

  // const decrease = () => {
  //   setCount(count - step)
  // }

  const [count, handleChange] = useCount(initValue);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleChange}>
        -
      </button>
      <button onClick={handleChange}>
        +
      </button>
    </div>
  );
};

export default Counter;
