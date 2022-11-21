import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAirlinesService } from "./airlineService";

const LC_airline = JSON.parse(localStorage.getItem("airlines"));

const initialState = {
  airline: LC_airline ? LC_airline : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const findAirlines = createAsyncThunk(
  "airlines/find",
  async (airlineData, thunkAPI) => {
    try {
      return await findAirlinesService(airlineData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const airlineSlice = createSlice({
  name: "airline",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAirlines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findAirlines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.airline = action.payload;
      })
      .addCase(findAirlines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = airlineSlice.actions;
export default airlineSlice.reducer;
