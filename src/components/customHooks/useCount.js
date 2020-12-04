import { useState } from "react";

export const useCount = (initValues) => {
  const [countValues, setCount] = useState(initValues);

  return [
    countValues,
    function (event) {
      const sign = event.target.innerHTML;
      let name = event.target.name

      setCount((countValues) => {
        let newCount = sign === "+" ? countValues[name] + 1 : countValues[name] - 1
        return {
          ...countValues,
          [name]: newCount,
        };
      });
      // setCount(sign === "+" ? count + 1 : count - 1)
    },
  ];
};
