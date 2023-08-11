import { createSlice } from "@reduxjs/toolkit";
import { fetchParisWeather } from "./ParisThunk";
import { ParisInitialState } from "./ParisInitialState";

const ParisSlice =  createSlice({
   name: "Paris",
   initialState:ParisInitialState,
   reducers:{},
   extraReducers:(builder) => {
      builder
      .addCase(fetchParisWeather.pending, (state) => {})
      .addCase(fetchParisWeather.fulfilled, (state, action) => {})
      .addCase(fetchParisWeather.rejected, (state, action) => {})
   }
});

export default ParisSlice.reducer;