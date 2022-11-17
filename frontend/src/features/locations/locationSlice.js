import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocationsService } from "./locationService";

const initialState = {
  locations: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getLocations = createAsyncThunk(
  "location/get",
  async (_, thunkAPI) => {
    try {
      return await getLocationsService();
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

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.locations = action.payload;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default locationSlice.reducer;
