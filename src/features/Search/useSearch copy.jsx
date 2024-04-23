import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getWeatherData, getWeatherDataDaily } from "../../api/methods";
import { useAppContext } from "../../context/AppContext";
import useMultipleQueries from "../../hooks/useMultipleQueries";
import useIndDepQueries from "../../hooks/useDepQueries";
import useCustomQuery from "../../hooks/useCustomQuery";

const useSearch = () => {
  const [location, setLocation] = useState("");
  const [queryKey, setQueryKey] = useState([]);
  const [errorObj, setErrorObj] = useState({});
  const { changeLocation } = useAppContext();

  const resultA = useQuery({
    queryKey: ["dailyData", queryKey[0]],
    queryFn: () => getWeatherData(location),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: queryKey.length > 0,
    retry: 1,
    retryDelay: 2000,
  });

  const resultB = useQuery({
    queryKey: ["hourlyData", queryKey[0]],
    queryFn: () => getWeatherDataDaily(location),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: queryKey.length > 0,
    retry: 1,
    retryDelay: 2000,
    gcTime: 5 * 60 * 1000,
  });

  const {
    isFetching,
    isLoading,
    isError,
    isSuccess,
    error,
    data: dataA,
    refetch: refetchA,
  } = resultA;

  const {
    isFetching: isFetchingB,
    isLoading: isLoadingB,
    isError: isErrorB,
    isSuccess: isSuccessB,
    data: dataB,
    refetch: refetchB,
  } = resultB;

  const onChange = (e) => {
    setErrorObj({});
    setQueryKey([]);
    const val = e.target.value;
    if (val.length < 26) {
      setLocation(val);
    }
  };

  const submit = (e) => {
    // e.preventDefault();
    const currentLocation = location.toLowerCase();
    setErrorObj({});
    if (currentLocation) {
      // queryClient.invalidateQueries(["dailyData", null]);
      // queryClient.invalidateQueries(["hourlyData", null]);
      setQueryKey([currentLocation]);
      refetchA();
      refetchB();
    }
  };

  useEffect(() => {
    const keyEnterPress = (e) => {
      if (e?.key?.toLowerCase() === "enter" && location.length > 1) {
        submit();
      }
    };
    window.addEventListener("keydown", keyEnterPress);
    return () => window.removeEventListener("keydown", keyEnterPress);
  }, [location]);

  useEffect(() => {
    if (isError) {
      //   console.log(error);
      setErrorObj(error);
    }
    if (isSuccess && isSuccessB) {
      console.log("search", dataA, dataB);
      setErrorObj({});
      changeLocation(dataA, dataB);
      setLocation("");
      setQueryKey([]);
    }
  }, [isSuccess, isSuccessB, isError]);

  return {
    location,
    isFetching: isFetching || isFetchingB,
    isLoading: isLoading || isLoadingB,
    isError,
    errorObj,
    onChange,
    submit,
  };
};
export default useSearch;
