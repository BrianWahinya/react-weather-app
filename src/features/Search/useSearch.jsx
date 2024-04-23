import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import useQueryWeather from "../../hooks/useQueryWeather";

const useSearch = () => {
  const [locationKey, setLocationKey] = useState("");
  const [userInput, setUserInput] = useState("");
  const [errorObj, setErrorObj] = useState(null);
  const { changeLocation } = useAppContext();

  const { isFetching, isLoading, isError, isSuccess, error, data, refetch } =
    useQueryWeather(userInput, locationKey);

  const changeInput = (e) => {
    // console.log("input", e.target.value);
    setErrorObj(null);
    setLocationKey("");
    const val = e.target.value;
    if (val.length < 26) {
      setUserInput(val);
    }
  };

  const submit = () => {
    const currentInput = userInput.trim().toLowerCase();
    // console.log("submit", currentInput);
    if (currentInput) {
      setErrorObj(null);
      setLocationKey(currentInput);
      refetch();
    }
  };

  useEffect(() => {
    setErrorObj(null);
    const keyEnterPress = (e) => {
      if (e?.key?.toLowerCase() === "enter") {
        submit();
      }
    };
    window.addEventListener("keydown", keyEnterPress);
    return () => window.removeEventListener("keydown", keyEnterPress);
  }, [userInput]);

  useEffect(() => {
    // console.log(data);
    setErrorObj(null);
    if (!isFetching && !isLoading) {
      setLocationKey("");
      if (isSuccess) {
        changeLocation(data);
        setUserInput("");
      } else if (isError) {
        setErrorObj(error);
      }
    }
  }, [isSuccess, isError, isFetching, isLoading, data]);

  return {
    userInput,
    changeInput,
    isFetching,
    isLoading,
    isError,
    errorObj,
    submit,
  };
};

export default useSearch;
