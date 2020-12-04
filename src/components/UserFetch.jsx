import React, { useState } from "react";

import { useFetchUser } from "./customHooks/useFetchUser";

const UserFetch = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((count) => {
      return count === 10 ? 1 : count + 1;
    });
  };

  const { data, loading } = useFetchUser(
    `https://jsonplaceholder.typicode.com/users/${count}`
  );

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
