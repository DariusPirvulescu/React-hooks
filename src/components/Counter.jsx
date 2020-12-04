import React from "react";

import {useCount} from "./customHooks/useCount";

const Counter = () => {
  // const [count, setCount] = useState(10)
  // const step = 2;
  // // console.log("count", count);

  // const increase = () => {
  //   setCount(count + step)
  // }

  // const decrease = () => {
  //   setCount(count - step)
  // }

  const [countValues, handleChange] = useCount({val1: 10, val2: 5})

  return (
    <div >
      <h2>{countValues.val1}</h2>
      <button name="val1" onClick={handleChange}>-</button>
      <button name="val1" onClick={handleChange}>+</button>

      <h2>{countValues.val2}</h2>
      <button name="val2" onClick={handleChange}>-</button>
      <button name="val2" onClick={handleChange}>+</button>
    </div>
  );
}

export default Counter;