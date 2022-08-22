import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

const logIn = async (user) => {

  const { username, password } = user;
  const email = username;
  const datajson = await api.authLogin(email, password);

  if (datajson.msg === "successful login" && datajson.token) {
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: {
        token: datajson.token,
        user: datajson.user,
      },
    };
  }
};

const register = async (user) => {
  const { email, password, name } = user;
  const datajson = await api.authRegister(email, password, name);
  if (datajson.msg === "user succesfelly created" && datajson.token) {
    // backend mal response message
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: name,
    };
  }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};
export default {
  logIn,
  logOut,
  register,
};
