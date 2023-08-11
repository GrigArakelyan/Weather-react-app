import { configureStore } from "@reduxjs/toolkit";
import LondonSlice from "./slices/LondonSlice/LondonSlice";
import TokyoSlice from "./slices/Tokyo/TokyoSlice";
import NewYorkSlice from "./slices/NewYork/NewYorkSlice";
import ParisSlice from "./slices/Paris/ParisSlice";
import BerlinSlice from "./slices/Berlin/BerlinSlice";


const store = configureStore({
  reducer: {
    London: LondonSlice,
    Tokyo: TokyoSlice,
    Berlin: BerlinSlice,
    Paris: ParisSlice,
    NewYork: NewYorkSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store