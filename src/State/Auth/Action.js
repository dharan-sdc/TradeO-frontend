import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./ActionTypes";

export const register = (UserData) => async (dispatch) => {

  dispatch({ type: REGISTER_REQUEST })
  //backend-url
  const baseUrl = "http://localhost:8097"

  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, UserData);
    const user = response.data;
    console.log(user);

    dispatch({ type: REGISTER_SUCCESS, payload: user.jwt })
    localStorage.setItem("jwt", user.jwt);

  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message })
    console.log(error);
  }
}

export const login = (UserData) => async (dispatch) => {

  dispatch({ type: LOGIN_REQUEST })
  //backend-url
  const baseUrl = "http://localhost:8097"

  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, UserData.data);
    const user = response.data;
    console.log(user);

    dispatch({ type: LOGIN_SUCCESS, payload: user.jwt })
    localStorage.setItem("jwt", user.jwt);
    UserData.navigate("/")
  } catch (error) {
    let errorMsg = "An error occurred"; // Default error message

    if (error.response) {
      errorMsg = error.response.data?.message || "Server error occurred";
    } else if (error.request) {
      // Request was made but no response received
      errorMsg = "No response from server. Please check your internet connection.";
    } else {
      errorMsg = error.message;
    }

    dispatch({ type: LOGIN_FAILURE, payload: errorMsg });
    console.error("Login Error:", errorMsg);
  }
}

export const getUser = (jwt) => async (dispatch) => {

  dispatch({ type: GET_USER_REQUEST })
  //backend-url
  const baseUrl = "http://localhost:8097"

  try {
    const response = await axios.get(`${baseUrl}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
    const user = response.data;
    console.log(user);


    dispatch({ type: GET_USER_SUCCESS, payload: user })

  } catch (e) {
    dispatch({ type: GET_USER_FAILURE, payload: e.message })
    console.log(e);
  }
}

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
}