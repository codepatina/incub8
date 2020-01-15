import React from "react";

let user = "";
let token = "";
let user_id = "";

const defaultState = {
  user,
  token,
  user_id,
  setUser: () => {},
  setToken: () => {},
  setUserID: () => {}
};

export const LoginContext = React.createContext(defaultState);
