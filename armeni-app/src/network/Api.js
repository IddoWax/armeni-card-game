import axios from 'axios';
import {useState, useEffect } from "react";

// set up the config of api client
// TODO: this should be defined with environment variable instead of being hardcoded
const config = {
  baseURL:'http://127.0.0.1:8000',
  timeout: 1000 
  }
const apiClient=axios.create(config);


// A wrapper funciton to call get requests using our set up apiclient
// Input: the requested path w/o the base url
// The function returns the response data/ error message/ loading state
// the useState is used to ensure the data is properly updated after promise is fulfilled
const useAxiosGet = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    apiClient
      .get(path)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };

}


// A wrapper funciton to call get requests using our set up apiclient
// Input: the requested path w/o the base url, and payload to send to server
// The function returns the response data/ error message/ loading state
// the useState is used to ensure the data is properly updated after promise is fulfilled
const useAxiosPost = (path, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    apiClient
      .post(path, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, error, isLoading };

}

export {useAxiosGet, useAxiosPost};