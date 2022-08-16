import { authLogin, authRegister, authLogout   } from "../types/types";
import AuthService from "../helpers/authService";

export const login = (user) => (dispatch) => {
  return AuthService.logIn(user).then(
    (response) => {
      if (response.status === "success") {
        dispatch({
          type: authLogin,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const register = (user) => (dispatch) => {
  return AuthService.register(user).then(
    (response) => {
      if (response.status === "success register") {
        dispatch({
          type: authRegister,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: authLogout,
      });
      Promise.resolve();
      return response;
    }
  });
};