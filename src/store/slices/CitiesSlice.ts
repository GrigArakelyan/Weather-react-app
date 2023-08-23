import { createSlice } from "@reduxjs/toolkit";
import { CitiesInitialState } from "./CitiesInitialState";
import { fetchCitiesThunk } from "./CitiesThunk";

const CitiesSlice = createSlice({
   name: "Cities",
   initialState:CitiesInitialState,
   reducers:{
      clearCitiesData: (state, {payload}) => {
         state.data = payload;
      }
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
export const { clearCitiesData } = CitiesSlice.actions