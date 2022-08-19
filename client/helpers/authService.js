import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

const logIn = async (user) => {
  console.log("user info", user);
  const { username, password } = user;
  const email = username;
  const datajson = await api.authLogin(email, password);

  console.log(datajson);

  if (datajson.msg === "successful login" && datajson.token) {
    AsyncStorage.setItem("token", JSON.stringify({ token: datajson.token }));
    AsyncStorage.setItem("user", JSON.stringify({ user: datajson.user }));
    // console.log(datajson);
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

//corregir AsyncStorage.setItem("user", JSON.stringify(user)); por datos de DataJson, guardar en el front end
const register = async (user) => {
  console.log("user info", user);
  const { email, password, name } = user;

  const datajson = await api.authRegister(email, password, name);

  console.log(datajson);

  if (datajson.msg === "user succesfelly created" && datajson.token) {
    // backend mal response message
    console.log("entranding");
    AsyncStorage.setItem("user", JSON.stringify(user));
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
