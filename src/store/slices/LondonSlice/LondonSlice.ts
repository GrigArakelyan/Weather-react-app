import { createSlice } from "@reduxjs/toolkit";
import { fetchLondonWeather } from "./LondonThunk";
import { LondonInitialState } from "./LondonInitialState";

const LondonSlice =  createSlice({
   name: "London",
   initialState:LondonInitialState,
   reducers:{},
   extraReducers:(builder) => {
      builder
      .addCase(fetchLondonWeather.pending, (state) => {
         state.loading = true;
      })
      .addCase(fetchLondonWeather.fulfilled, (state, {payload}) => {
         state.loading = false;
         state.error = '';
         state.data = payload;
         console.log(state.data, "data state")
      })
      .addCase(fetchLondonWeather.rejected, (state, {payload}) => {
         state.loading = false;
         state.error = payload;
      })
   }
});

export default LondonSlice.reducer;