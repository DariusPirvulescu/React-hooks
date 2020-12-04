import React from "react";

import Counter from "./Counter";
import Form from "./Form";
import UserFetch from "./UserFetch";

const App = () => {
  return <div className="container">
    <h1>Counter</h1>
    <Counter initValue={10} step={1}/>
    <Counter initValue={5} step={5}/>
    <Counter />

    <hr />
    <h1>Form</h1>
    <Form />

    
  </div>
};

export default App;
