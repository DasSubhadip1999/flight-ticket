import axios from "axios";

const API_URL = "/api/tickets";

export const getTicketService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);

  return res.data;
};

export const createTicketService = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = axios.post(API_URL, ticketData, config);

  return res.data;
};
