import { useEffect, useState } from "react";

export interface IFetchResponse {
  error: null;
  response: any;
  loading: boolean;
}

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortController.signal });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    error,
    loading,
    response,
  };
};
