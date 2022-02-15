/**
 * This component grabs a joke from the https://www.icndb.com/ (The internet Chuck Norris Database).
 * While we are fetching, the component shows a simple 'Loading...' text. If there is an error it shows an error message.
 *
 * We used this as it doesn't need an API key and gives back a relatively simple object.
 * The loading/error handling is also a little simplistic, but we are looking to try out testing API calls so keeping it simple will help!
 */

/**
 * The structure the API gives back is:
 * {
 *   "type": string,
 *   "value": {
 *      "id": number,
 *      "joke": string,
 *      "categories": Array of strings
 *   }
 * }
 */

import { useEffect, useState } from 'react';

function RandomJoke() {
  const APIURL = 'http://api.icndb.com/jokes/random';
  const [joke, setJoke] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(APIURL)
      .then((response) => response.json())
      .then((result) => {
        if (mounted) {
          setJoke(result.value.joke);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (hasError) {
    return 'Something went wrong with grabbing your joke. Please try again later.';
  } else if (isLoading) {
    return 'Loading...';
  } else {
    return joke;
  }
}

export default RandomJoke;
