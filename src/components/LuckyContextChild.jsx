import React, { useContext, useState } from "react";
import { LuckyNumberContext } from "./contexts/LuckyNumberContext";

const LuckyContextChild = () => {
  const [inputVal, setInputVal] = useState("");
  const { luckyNr, setLuckyNumber } = useContext(LuckyNumberContext);

  return (
    <>
      <h5>
        This component is under the
        <pre>luckyNumber context</pre>
        together with the Memo (SongList) component.
      </h5>
      <h3 style={{ textDecoration: "underline" }}>
        Lucky number is: {luckyNr}
      </h3>
      <input
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      />
      <br />
      <br />
      <button onClick={() => setLuckyNumber(inputVal)}>Set Lucky Number</button>
    </>
  );
};

export default LuckyContextChild;
