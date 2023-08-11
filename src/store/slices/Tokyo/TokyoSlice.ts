import { createSlice } from "@reduxjs/toolkit";
import { fetchTokyoWeather } from "./TokyoThunk";
import { TokyoInitialState } from "./TokyoInitialState";


const TokyoSlice = createSlice({
   name: "Tokyo",
   initialState:TokyoInitialState,
   reducers:{},
   extraReducers: (builder) => {
      builder
      .addCase(fetchTokyoWeather.pending,(state, action) => {})
      .addCase(fetchTokyoWeather.fulfilled,(state, action) => {})
      .addCase(fetchTokyoWeather.rejected,(state, action) => {})
   }
});

export default TokyoSlice.reducer