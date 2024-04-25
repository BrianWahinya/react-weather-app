import { useEffect, useState } from "react";
import { getBrowserLocation } from "../api/methods";
import { useAppContext } from "../context/AppContext";
import useQueryWeather from "./useQueryWeather";
import useCustomQuery from "./useCustomQuery";

const useDefaultLocation = () => {
  const { data, changeLocation } = useAppContext();
  const [locationDef, setLocationDef] = useState("");

  let isInitialRender = true && data.length < 1;

  const {
    isFetching: isFetchingL,
    isLoading: isLoadingL,
    isSuccess: isSuccessL,
    isError: isErrorL,
    data: locationData,
    refetch: refetchL,
  } = useCustomQuery({
    id: ["browserLocation", locationDef],
    fn: isInitialRender && (() => getBrowserLocation()),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetchL();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isFetchingL && !isLoadingL) {
      if (isSuccessL) {
        setLocationDef(locationData.city);
      }
      isInitialRender = false;
    }
  }, [isFetchingL, isLoadingL, locationData]);

  const {
    isFetching: isFetchingA,
    isLoading: isLoadingA,
    isError: isErrorA,
    isSuccess: isSuccessA,
    error: errorA,
    data: dataA,
    refetch: refetchA,
  } = useQueryWeather(locationDef, locationDef);

  useEffect(() => {
    if (locationDef) {
      refetchA();
    }
  }, [locationDef]);

  useEffect(() => {
    if (!isFetchingA && !isLoadingA) {
      if (isSuccessA) {
        changeLocation(dataA);
      }
      setLocationDef("");
      isInitialRender = false;
    }
  }, [isFetchingA, isLoadingA, isErrorA, isSuccessA, dataA]);
};
export default useDefaultLocation;
