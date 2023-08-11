import { createAsyncThunk } from "@reduxjs/toolkit";
import { getParisData } from "../../../services/getWeather";
import { GetWeatherData } from "../../../types/GetWeatherData";

export const fetchParisWeather = createAsyncThunk<GetWeatherData,undefined,{rejectValue: string}>(
  "Paris/fetchParisWeather",
  async (_, { rejectWithValue }) => {
    return getParisData()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);