import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locations/locationSlice";
import authReducer from "../features/auth/authSlice";
import airlineReducer from "../features/airlines/airlineSlice";
import ticketReducer from "../features/ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    airline: airlineReducer,
    ticket: ticketReducer,
  },
});
