import axios from "axios";

export const AUTHENTICATE = "authenticate";
export const SIGNOUT = "signout";

export const autoAuthenticate = () => {
  return async (dispatch) => {
    const { data: user } = await axios.get("/api/users/currentuser");
    dispatch({
      type: AUTHENTICATE,
      value: user.currentUser,
    });
  };
};

export const authenticate = (url, values) => {
  return async (dispatch) => {
    const { data: user } = await axios.post(url, values);
    dispatch({
      type: AUTHENTICATE,
      value: user,
    });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    await axios.post("/api/users/signout");
    dispatch({
      type: SIGNOUT,
    });
  };
};
