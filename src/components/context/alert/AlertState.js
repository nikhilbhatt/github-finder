import React, { useReducer, Children } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialstate = null;

  const [state, dispatch] = useReducer(AlertReducer, initialstate);

  const setAlert = (msg, type) => {
    // setAlertState({ msg, type });
    // setTimeout(() => setAlertState(null), 5000);
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
        }),
      5000
    );
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
