import axios from "axios";

import { AUTH_USER, AUTH_ERROR } from "./types";
import { ControlPanelApi } from "../config/dev-config.json";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${ControlPanelApi.Url}/user/register`,
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email already Use"
    });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const signin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        `${ControlPanelApi.Url}/user/login`,
        formProps
      );
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Invalid login credentials"
      });
    }
  };
