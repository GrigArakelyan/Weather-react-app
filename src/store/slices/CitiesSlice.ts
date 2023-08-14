import { createSlice } from "@reduxjs/toolkit";
import { CitiesInitialState } from "./CitiesInitialState";

const CitiesSlice = createSlice({
   name: "Cities",
   initialState:CitiesInitialState,
   reducers:{
      addCityData: (state, {payload}) => {
         state.data = payload
      }
   },
   extraReducers:{}
});

export default CitiesSlice.reducer
export const { addCityData } = CitiesSlice.actions