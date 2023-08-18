import { createSlice } from "@reduxjs/toolkit";
import { CitiesInitialState } from "./CitiesInitialState";
import { fetchCities } from "./CitiesThunk";

const CitiesSlice = createSlice({
   name: "Cities",
   initialState:CitiesInitialState,
   reducers:{
      addCityData: (state, {payload}) => {
         state.data = payload
      }
   },
   extraReducers: (builder) => {
      builder
      .addCase(fetchCities.pending, (state) => {
         state.error = "";
         state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, {payload}) => {
         state.loading = false;
         state.error = "";
         state.data = payload;
         console.log(state.data, "state.data")
      })
      .addCase(fetchCities.rejected, (state, {payload}) => {
         state.loading = false;
         state.error = payload
      })
   }
});

export default CitiesSlice.reducer
export const { addCityData } = CitiesSlice.actions