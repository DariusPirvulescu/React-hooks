import React, { useRef, useEffect, useState } from "react";

const Name = () => {
  const [value, setValue] = useState("");

  const renderCount = useRef(0);
  const prevName = useRef("");
  const nameInp = useRef();

  useEffect(() => {
    renderCount.current += 1;

    prevName.current = value;
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input ref={nameInp} onChange={handleChange} placeholder="input name" />
      <p>I rendered {renderCount.current} times</p>
      <h4>Persist a value after render</h4>
      <p>My name used to be: </p>

      <p style={{ fontStyle: "italic" }}>{prevName.current}</p>
    </div>
  );
};

export default Name;
