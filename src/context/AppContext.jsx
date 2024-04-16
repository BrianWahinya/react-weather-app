import { createContext, useContext, useEffect, useReducer } from "react";
import { deepCopy } from "../helpers/utils";
import { getBrowserLocation, getWeatherData } from "../api/methods";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const AppContext = createContext();

const defaultState = {
  data: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "changeLocation":
      if (payload) {
        // console.log("reducer", payload);
        return { ...deepCopy(state), data: [payload] };
      }
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const changeLocation = (locationData) => {
    dispatch({ type: "changeLocation", payload: locationData });
  };

  const { data: browserLocation, refetch } = useQuery({
    queryKey: ["browserLocation"],
    queryFn: () => getBrowserLocation(),
    staleTime: 60 * 60 * 1000,
    refetchInterval: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: false,
    retry: 0,
  });

  const { isFetching, isError, isLoading, data, error } = useQuery({
    queryKey: ["weatherData", browserLocation?.city.toLowerCase()],
    queryFn: () => getWeatherData(browserLocation?.city),
    staleTime: 30 * 60 * 1000,
    refetchInterval: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!browserLocation?.city,
    retry: 1,
    retryDelay: 2000,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isFetching && !isLoading && !isError && state.data.length < 1) {
      changeLocation(data);
    }
  }, [isFetching, isLoading, isError]);

  return (
    <AppContext.Provider value={{ ...state, changeLocation }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
