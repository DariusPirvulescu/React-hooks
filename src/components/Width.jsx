import React, { useLayoutEffect, useState, useRef } from "react";

const style = {
  textRoot: {
    display: "flex",
    "justify-content": "center",
    height: "30px"
  },
  text: {
    fontStyle: "italic",
    textDecoration: "underline"
  },
  span: {
    fontWeight: "bold"
  }
};

const Width = () => {
  const [value, setValue] = useState("");
  const measuredEl = useRef();

  const [measuredWidth, setMeasuredWidth] = useState(0);

  useLayoutEffect(() => {
    setMeasuredWidth(measuredEl.current.getBoundingClientRect().width);
  });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="text to measure"
      />
      <div style={style.textRoot}>
        <p ref={measuredEl} style={style.text}>
          {value}
        </p>
      </div>
      <div>^^^</div>
      <p>Text width is: {measuredWidth}</p>
    </div>
  );
};

export default Width;
