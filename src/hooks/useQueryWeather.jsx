import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWeatherDataDaily } from "../api/methods";

const def = {
  isFetching: null,
  isLoading: null,
  isError: null,
  isSuccess: null,
  error: {},
  data: {},
  refetch: () => null,
};

const useQueryWeather = (location, key) => {
  // console.log("location", location);
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries({
  //   queryKey: ["weather", location],
  // });
  return useQuery({
    queryKey: ["weather", key],
    queryFn: location && (() => getWeatherDataDaily(location)),
    enabled: !!key,
    staleTime: 30 * 60 * 1000,
    refetchInterval: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    retryDelay: 2000,
  });
};

export default useQueryWeather;
