import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBerlinData } from "../../../services/getWeather";
import { GetWeatherData } from "../../../types/GetWeatherData";

export const fetchBerlinWeather = createAsyncThunk<GetWeatherData,undefined,{rejectValue: string}>(
  "Berlin/fetchBerlinWeather",
  async (_, { rejectWithValue }) => {
    return getBerlinData()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);