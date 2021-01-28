import React, { useState, useMemo } from "react";

import { LuckyNumberContext } from "./contexts/LuckyNumberContext";

import Counter from "./Counter";
import Form from "./Form";
import UserFetch from "./UserFetch";
import Name from "./Name";
import Width from "./Width";
import SongsList from "./memo/SongsList";
import LuckyContextChild from "./LuckyContextChild";

const App = () => {
  const [luckyNr, setLuckyNumber] = useState(0);

  const luckyProviderValue = useMemo(() => ({ luckyNr, setLuckyNumber }), [
    luckyNr,
    setLuckyNumber
  ]);

  return (
    <div className="container">
      <h1>Counter</h1>
      <Counter initValue={10} step={1} />
      <Counter initValue={5} step={5} />
      <Counter />

      <hr />
      <h1>Form</h1>
      <Form />

      <hr />
      <h1>User API Fetch</h1>
      <UserFetch />

      <hr />
      <h1>useRef Hook</h1>
      <Name />

      <hr />
      <h1>useLayoutEffect Hook</h1>
      <Width />
      <LuckyNumberContext.Provider value={luckyProviderValue}>
        <hr />
        <h1>{"{ Memo }"} + useCallback = love</h1>
        <SongsList />

        <hr />
        <h1>LuckyNumber Context </h1>
        <LuckyContextChild />
      </LuckyNumberContext.Provider>
    </div>
  );
};

export default App;
