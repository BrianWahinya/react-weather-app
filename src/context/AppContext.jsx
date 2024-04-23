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
        // console.log("reducer", payload, state);
        const substate = deepCopy(state);
        const subdata = substate.data
          .slice(0, 5)
          .filter((item) => item.city.id !== payload.city.id);
        return { ...substate, data: [payload, ...subdata] };
      }
    case "clearData":
      return { ...deepCopy(state), data: [] };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const changeLocation = (data) => {
    dispatch({ type: "changeLocation", payload: data });
  };

  const clearData = () => {
    dispatch({ type: "clearData" });
  };

  return (
    <AppContext.Provider value={{ ...state, changeLocation, clearData }}>
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
