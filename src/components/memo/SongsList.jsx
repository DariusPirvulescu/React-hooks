import React, { useState } from "react";

import { Song, MemoizedSong } from "./Song";

const style = {
  title: {
    textDecoration: "underline"
  }
};

const SongsList = () => {
  const [renderCount, setRenderCount] = useState(0);

  const render = () => {
    setRenderCount(renderCount + 1);
  };
  return (
    <div>
      <h2>SongsList</h2>
      <p>
        SongsList
        <br />
        has rendered {renderCount} times
      </p>

      <button onClick={render}>Render Parent </button>
      <h4 style={style.title}>Default Child</h4>

      <Song
        name="National Anthem of USSR"
        artist="The Alexandrov Red Army Chorus"
        type="Default"
      />

      <h4 style={style.title}>Memoized Child</h4>

      <MemoizedSong
        name="Wide is My Motherland"
        artist="Isaac Dunaevsky"
        type="Memoized"
      />
      <br />
    </div>
  );
};

export default SongsList;
