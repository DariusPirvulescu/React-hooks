import React, { useState, useContext } from "react";

import { useFetchUser } from "./customHooks/useFetchUser";

// context
import { userContext } from "./contexts/userContext";

const UserFetch = () => {
  const [count, setCount] = useState(1);
  const { setUser } = useContext(userContext);

  const handleClick = () => {
    setCount((count) => {
      return count === 10 ? 1 : count + 1;
    });
  };

  /** To persist count value
   *    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
   *
   * Then:
   *    useEffect(() => {
   *      localStorage.setItem("count", JSON.stringify(count))
   *    }, [count])
   *
   */

  const { data, loading } = useFetchUser(
    `https://jsonplaceholder.typicode.com/users/${count}`
  );

  if (data) {
    setUser(data);
  }
  return (
    <div className="user-fetch">
      <span>user#: {count}</span>
      <br />
      <div className="user-name">{loading ? "loading..." : data}</div>
      <br />
      <br />
      <button onClick={handleClick}>fetch next user</button>
    </div>
  );
};

export default UserFetch;
