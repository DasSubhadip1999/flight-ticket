import axios from "axios";

const API_URL = "api/flights";

export const getLocationsService = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
