import { createSlice } from "@reduxjs/toolkit";
import { fetchNewYorkWeather } from "./NewYorkThunk";
import { NewYorkInitialState } from "./NewYorkInitialState";

const NewYorkSlice =  createSlice({
   name: "NewYork",
   initialState:NewYorkInitialState,
   reducers:{},
   extraReducers:(builder) => {
      builder
      .addCase(fetchNewYorkWeather.pending, (state) => {})
      .addCase(fetchNewYorkWeather.fulfilled, (state, action) => {})
      .addCase(fetchNewYorkWeather.rejected, (state, action) => {})
   }
});

export default NewYorkSlice.reducer;