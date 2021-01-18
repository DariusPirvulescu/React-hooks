import { useState, useEffect } from "react";

export const useFetchUser = (url) => {
  const [{ data, loading }, setState] = useState({ loading: true, data: null });

  useEffect(() => {
    setState({ data: null, loading: true });

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setState({ data: result.name, loading: false });
        }, 500);
      });
  }, [url, setState]);

  return { data, loading };
};

/**
 * When useEffect runs:
 * useEffect(cb, x)
 * x is always an Array []
 *
 * x === []
 * cb runs only once, during 1st render
 *
 * x === null
 * cb runs during initial render and after
 * every rerender
 *
 * x === [data]
 * cb runs during initial render and
 * (every rerender + after data value changes)
 *
 */
