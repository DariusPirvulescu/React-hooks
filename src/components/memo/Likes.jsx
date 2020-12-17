import React from "react";

import { useRenderCount } from "../customHooks/useRenderCount";

const Likes = ({ step, increment }) => {
  const renderTimes = useRenderCount();
  console.log(`LIKES HAS RENDERED ${renderTimes} time`);

  return (
    <span>
      <button onClick={() => increment(step)}>{step}</button>{" "}
    </span>
  );
};

export const MemoizedLikes = React.memo(Likes);
