import axios from "axios";
const URL = "/api/flights/airlines";

export const findAirlinesService = async (airlineData) => {
  const res = await axios.post(URL, airlineData);

  localStorage.setItem("airlines", JSON.stringify(res.data));

  return res.data;
};
