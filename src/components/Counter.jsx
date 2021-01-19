import React from "react";

import { useCount } from "./customHooks/useCount";

const Counter = ({ initValue, step }) => {
  // const [count, setCount] = useState(10)
  // const step = 2;
  // // console.log("count", count);

  // const increase = () => {
  //   setCount(count + step)
  // }

  // const decrease = () => {
  //   setCount(count - step)
  // }

  const [count, handleClick] = useCount(initValue, step);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>-</button>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

Counter.defaultProps = {
  initValue: 1,
  step: 1
};

export default Counter;

/**
 * Adding a manual event listener
 * (outside of React)
 *
 * useEffect(() => {
 *  document.body.addEventListener("clikc", cb)
 *
 *  // Also remove it with the useEffect cleanup fct
 *
 * return () {
 *  document.body.removeEventListener("click", cb)
 * }
 *
 * }, [])
 */
