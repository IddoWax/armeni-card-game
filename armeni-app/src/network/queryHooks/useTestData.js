import { useQuery } from "react-query";
import useAPIClient from "../Api";

const TEST_ACCESS_IDENTITY = "test_access_data";

export default function useTestData () {
  const api = useAPIClient();
   const { isLoading, error, data, isFetching} = useQuery(
    [TEST_ACCESS_IDENTITY],
    () =>
      api.api.get('/test_api')
    );
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    return data.data;
};


