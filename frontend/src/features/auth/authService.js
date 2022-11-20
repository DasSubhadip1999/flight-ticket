import axios from "axios";

const REGISTER_URL = "api/users/register";
const LOGIN_URL = "api/users/login";

export const registerService = async (user) => {
  const res = await axios.post(REGISTER_URL, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

export const loginService = async (user) => {
  const res = await axios.post(LOGIN_URL, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

export const logoutService = async () => {
  localStorage.removeItem("user");
};
