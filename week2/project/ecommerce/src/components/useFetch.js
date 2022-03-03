import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        setData(data);
        setIsloading(false);

        if (data.length === 0 || response.status >= 400) {
          throw new Error('Something went wrong!');
        }
      } catch (err) {
        setError(err.message);
        setIsloading(false);
      }
    })();
  }, [url]);
  return { data, setData, error, isLoading };
};

export default useFetch;
