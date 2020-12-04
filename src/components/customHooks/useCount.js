import { useState } from "react";

export const useCount = (initValue) => {
  const [count, setCount] = useState(initValue);

  return [
    count,
    function (event) {
      const sign = event.target.innerHTML;

      setCount(sign === "+" ? count + 1 : count - 1);
    },
  ];
};
