import React, { useRef, useEffect, useState } from "react";

const Name = () => {
  const [value, setValue] = useState("");

  const renderCount = useRef(0);
  // const nameInp = useRef()

  useEffect(() => {
    renderCount.current += 1;
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} placeholder="input name" />
      <p>I rendered {renderCount.current} times</p>
    </div>
  );
};

export default Name;
