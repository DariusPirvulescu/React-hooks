import React, { useRef, useEffect } from "react";

const style = {
  root: {
    backgroundColor: "gray",
    padding: "10px 0",
    marginBottom: "5px"
  }
};

export const Song = ({ name, artist, type }) => {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <div style={style.root}>
        <div>
          Name: <em>{name}</em>
        </div>
        <div>
          Artist: <em>{artist}</em>
        </div>
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
