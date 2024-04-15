import { createContext, useContext, useReducer } from "react";
import { deepCopy } from "../helpers/utils";

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
