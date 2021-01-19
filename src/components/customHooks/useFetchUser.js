import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchUser = (url) => {
  const [{ data, loading }, setState] = useState({ loading: true, data: null });

  useEffect(() => {
    setState({ data: null, loading: true });

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setTimeout(() => {
    //       setState({ data: result.name, loading: false });
    //     }, 500);
    //   });

    /** Using Axios async/await to fetch */
    // const fetchUser = async () => {
    //   const result = await axios.get(url)
    //   console.log(result)
    //   setState({ data: result.data.name, loading: false})
    // }

    // fetchUser()

    /** Or even keuler, call function without
     * assigning it to a variable
     */
    (async () => {
      const result = await axios.get(url);
      console.log(result);
      setState({ data: result.data.name, loading: false });
    })();
  }, [url, setState]);

  return { data, loading };
};

/**
 * When does useEffect run ?
 *
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

/**
 * Axios config
 *
 * instead of writing the params in the url
 * 'https://site.com/?name=Dario'
 *
 * axios allows to pass params in the .get() fct
 * axios.get('https://site.com/', {
 *   params: {
 *     name: 'Dario'
 *   }
 * })
 */
