import { createSlice } from "@reduxjs/toolkit";
import { CitiesInitialState } from "./citiesInitialState";
import { fetchCitiesThunk } from "./citiesThunk";

const CitiesSlice = createSlice({
   name: "Cities",
   initialState:CitiesInitialState,
   reducers:{
   },
   extraReducers: (builder) => {
      builder
      .addCase(fetchCitiesThunk.pending, (state) => {
         state.error = "";
         state.loading = true;
      })
      .addCase(fetchCitiesThunk.fulfilled, (state, {payload}) => {
         state.loading = false;
         state.error = "";
         state.data = payload;
      })
      .addCase(fetchCitiesThunk.rejected, (state, {payload}) => {
         state.loading = false;
         state.error = payload;
      })
   }
});

export default CitiesSlice.reducer