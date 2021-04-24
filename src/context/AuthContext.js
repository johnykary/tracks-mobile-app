import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return {errorMessage: '', token: action.payload}  
    default:
      return state;
  }
};

const signup = (dispatch) =>  async ({ email, password }) => {
    try {
      //make api request to sign in with email and password
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      //navigate to main flow

    } catch (e) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };


const signin = (dispatch) => {
  return async ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {
    //Just sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
