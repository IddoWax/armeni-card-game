import DefaultApi from './DefaultApi'
import React, {useContext, useMemo } from "react";

const APIClientContext = React.createContext(undefined);

export const APIClientProvider = ({ children }) => {
  // Create the API client
  const api = useMemo(() => {
    const config = {
        baseURL:'http://127.0.0.1:8000',
        timeout: 1000 
        }
    return new DefaultApi(config);
  }, []);
  return (
    <APIClientContext.Provider value={api}>
      {!!api && children}
    </APIClientContext.Provider>
  );
};

const useAPIClient = () => {
  const api = useContext(APIClientContext);
  if (api === undefined) {
    console.log("Api undefined");
    throw new Error("API client is not provided within this context");
  }
  return api;
};


export default useAPIClient;