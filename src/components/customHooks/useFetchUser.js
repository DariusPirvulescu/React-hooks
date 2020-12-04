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
  }, [url]);

  return { data, loading };
};
