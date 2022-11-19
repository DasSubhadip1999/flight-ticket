import axios from "axios";

const REGISTER_URL = "api/users/register";

export const registerService = async (user) => {
  const res = await axios.post(REGISTER_URL, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};
