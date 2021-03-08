import React, { createContext, useReducer } from "react";
import { appReducer } from "./app-reducer";
import appState from "./app-state";
import useAppStore from "./app-store";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, appState);
  const actions = useAppStore(state, dispatch);

  return (
    <AppContext.Provider value={{ appState: state, appActions: actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
