import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locations/locationSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
  },
});
