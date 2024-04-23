import { useQuery } from "@tanstack/react-query";

const useCustomQuery = (query, enabled = false) => {
  const { id, fn } = query;
  const result = useQuery({
    queryKey: id,
    queryFn: fn,
    staleTime: 30 * 60 * 1000,
    refetchInterval: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled,
    retry: 1,
    retryDelay: 2000,
  });
  return result;
};
export default useCustomQuery;
