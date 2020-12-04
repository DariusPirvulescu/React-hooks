import React from "react";

import Counter from "./Counter";

const App = () => {
  return <div>
    <Counter />
  </div>
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
