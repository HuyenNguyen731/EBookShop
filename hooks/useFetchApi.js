import { useEffect, useState } from "react";
import { API_URL } from "@env";

export const useFetchApi = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `${API_URL}/api/${endpoint}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [endpoint]);

  return { isLoading, response, error };
};
