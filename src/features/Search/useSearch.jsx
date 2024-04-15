import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../api/methods";
import { useAppContext } from "../../context/AppContext";

const useSearch = () => {
  const [location, setLocation] = useState("");
  const [queryKeys, setQueryKeys] = useState([]);
  const [errorObj, setErrorObj] = useState({});
  const { changeLocation } = useAppContext();

  const queryClient = useQueryClient();
  const { isFetching, isError, isLoading, data, error, refetch } = useQuery({
    queryKey: queryKeys,
    queryFn: () => getWeatherData(location),
    staleTime: 30 * 60 * 1000,
    refetchInterval: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: queryKeys.length > 0,
    retry: 1,
    retryDelay: 2000,
  });

  const onChange = (e) => {
    setErrorObj({});
    setQueryKeys([]);
    setLocation(e.target.value);
  };

  const submit = (e) => {
    // e.preventDefault();
    setErrorObj({});
    if (location) {
      queryClient.invalidateQueries(["weatherData", location.toLowerCase()]);
      setQueryKeys(["weatherData", location.toLowerCase()]);
      refetch();
    }
  };

  useEffect(() => {
    if (isError) {
      //   console.log(error);
      setErrorObj(error);
    }
    if (!isFetching && !isLoading && !isError) {
      //   console.log("search", data);
      setErrorObj({});
      changeLocation(data);
      setLocation("");
    }
  }, [isError, isFetching, isLoading]);

  return {
    location,
    isFetching,
    isLoading,
    isError,
    errorObj,
    onChange,
    submit,
  };
};
export default useSearch;
