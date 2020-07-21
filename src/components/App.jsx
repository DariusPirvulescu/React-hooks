import React, { useState } from "react";


const App = () => {
  const [count, setCount] = useState(10)

  // console.log("count", count);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

// same for using a Class
// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>0</h1>
//         <button>+</button>
//       </div>
//     );
//   }
// }


export default App;
