import React, { useState, useCallback } from "react";

import { Song, MemoizedSong } from "./Song";
import { MemoizedLikes } from "./Likes";

const style = {
  title: {
    textDecoration: "underline",
  },
};

const SongsList = () => {
  const [renderCount, setRenderCount] = useState(1);
  const [likes, setLikes] = useState(20);
  const likeSteps = [1, 5, 10];

  const render = () => {
    setRenderCount(renderCount + 1);
  };

  /** USE CALLBACK */
  const increment = useCallback(
    (step) => {
      setLikes((prevLikes) => setLikes(prevLikes + step));
    },
    [setLikes]
  );

  return (
    <div>
      <h2>SongsList</h2>
      <p>
        SongsList
        <br />
        has rendered {renderCount} {renderCount > 1 ? "times" : "time"}
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
      <p>SongList Likes: {likes}</p>
      {likeSteps.map((step) => {
        return <MemoizedLikes increment={increment} step={step} key={step} />;
      })}
      <p>
        Because of useCallback, Memoized Likes has rendered only once (check
        console)
      </p>
    </div>
  );
};

export default SongsList;
