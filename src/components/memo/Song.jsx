import React, { useRef, useEffect } from "react";

export const Song = ({ name, artist, type }) => {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <div>
        Name: <em>{name}</em>
      </div>
      <div>
        Artist: <em>{artist}</em>
      </div>

      <div>
        <b>{type} element</b>
        <br />
        has rendered
        <br />
        {renderCount.current} {renderCount.current > 1 ? "times" : "time"}
      </div>
    </div>
  );
};

export const MemoizedSong = React.memo(Song);
