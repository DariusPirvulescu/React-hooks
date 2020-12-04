import React from "react";

import Counter from "./Counter";

const App = () => {
  return <div className="container">
    <h1>Counter</h1>
    <Counter initValue={10} step={1}/>
    <Counter initValue={5} step={5}/>
    <Counter />
  </div>
};

export default App;
