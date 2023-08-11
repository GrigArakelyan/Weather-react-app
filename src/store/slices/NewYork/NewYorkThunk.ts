import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewYorkData } from "../../../services/getWeather";
import { GetWeatherData } from "../../../types/GetWeatherData";

export const fetchNewYorkWeather = createAsyncThunk<GetWeatherData,undefined,{rejectValue: string}>(
  "NewYork/fetchNewYorkWeather",
  async (_, { rejectWithValue }) => {
    return getNewYorkData()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);