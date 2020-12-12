import React, { useState } from "react";

const style = {
  textRoot: {
    display: "flex",
    "justify-content": "center",
    height: "30px"
  },
  text: {
    fontStyle: "italic"
  },
  span: {
    fontWeight: "bold"
  }
};

const Width = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="text to measure"
      />
      <div style={style.textRoot}>
        <p style={style.text}>{value}</p>
      </div>
      <p>Text width is:</p>
    </div>
  );
};

export default Width;
