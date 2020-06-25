import React, { useReducer, Children } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialstate = null;

  const [state, dispatch] = useReducer(AlertReducer, initialstate);

  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 5000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {Children.props}
    </AlertContext.Provider>
  );
};

export default AlertState;
