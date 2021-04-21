import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    //make api request to sign up with email and password
    //if we sign up, modify our state, and say we are authenticated
    //if signin up fails, reflect error message
  };
};

const signip = (dispatch) => {
  return ({ email, password }) => {
    //make api request to sign in with email and password
    //Handle success
    //Handle fail
  };
};

const signout = (dispatch) => {
  return () => {
    //Just sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signip, signout },
  { isSignedIn: false }
);
