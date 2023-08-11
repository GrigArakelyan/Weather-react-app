import { createSlice } from "@reduxjs/toolkit";
import { fetchBerlinWeather } from "./BerlinThunk";
import { BerlinInitialState } from "./BerlinInitialState";

const BerlinSlice =  createSlice({
   name: "Berlin",
   initialState:BerlinInitialState,
   reducers:{},
   extraReducers:(builder) => {
      builder
      .addCase(fetchBerlinWeather.pending, (state) => {})
      .addCase(fetchBerlinWeather.fulfilled, (state, action) => {})
      .addCase(fetchBerlinWeather.rejected, (state, action) => {})
   }
});

export default BerlinSlice.reducer;