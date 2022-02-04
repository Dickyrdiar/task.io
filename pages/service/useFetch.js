import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = '#';
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true ,
  "Authorization": "Bearer #",
}

export const useFetch = ({url, method, body}) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
    let isMounthed = true 

    const fetchData = async () => {
      try {
        console.log('fetchData', url)
        console.log('with body', body)
        setLoading(true);
        const result = await axios.request({
          url,
          method,
          headers: { ...headers },
          data: body,
          cancelToken: source.token,
        })
        setResponse(result.data);
        console.log("getting data from", url)
        console.log("result", result)
      } catch (error) {
        console.log("error", error.response)
        if (error && error.response.status === 401) {
          console.log("Token expired")
          window.location.href = '/login';
        } 
        isMounthed && setError(error.response.data.message);
      } finally {
        isMounthed && setLoading(false);
      }
    }

    isMounthed && fetchData();

    return () => {
      isMounthed = false;
      source.cancel(`cancel req ${url}`);
    }
  }, [])

  return { response, error, loading };
}