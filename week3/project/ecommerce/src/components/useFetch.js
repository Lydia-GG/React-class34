import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsloading(false);
      } catch (err) {
        setError(true);
        setIsloading(false);
      }
    })();
  }, []);
  return { data, setData, error, isLoading };
};

export default useFetch;
