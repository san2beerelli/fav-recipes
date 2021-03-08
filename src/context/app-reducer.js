import AppState from "./app-state";

export const appReducer = (state, action) => {
  if (action.type in AppState) {
    return { ...state, [action.type]: action.payload };
  } else {
    throw new Error("mutation type not defined");
  }
};
