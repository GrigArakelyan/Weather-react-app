import { configureStore } from "@reduxjs/toolkit";
import CitiesSlice from "./slices/citiesSlice";


const store = configureStore({
  reducer: {
    Cities : CitiesSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store