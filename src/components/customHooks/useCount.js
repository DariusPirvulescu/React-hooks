import { useState } from "react";

export const useCount = (initValue, step) => {
  const [count, setCount] = useState(initValue);

  return [
    count,
    function (event) {
      const sign = event.target.innerHTML;

      setCount(sign === "+" ? count + step : count - step);
    },
  ];
};
