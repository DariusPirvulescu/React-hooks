import { useState } from "react";

export const useCount = (initValue) => {
  const [count, setCount] = useState(initValue);

  return [
    count,
    function (event) {
      const sign = event.target.innerHTML;
      let name = event.target.name

      setCount((count) => {
        let newCount = sign === "+" ? count[name] + 1 : count[name] - 1
        return {
          ...count,
          [name]: newCount,
        };
      });
      // setCount(sign === "+" ? count + 1 : count - 1)
    },
  ];
};
