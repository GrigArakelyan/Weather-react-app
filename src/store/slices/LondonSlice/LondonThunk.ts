import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLondonData } from "../../../services/getWeather";
import { GetWeatherData } from "../../../types/GetWeatherData";

export const fetchLondonWeather = createAsyncThunk<GetWeatherData,undefined,{rejectValue: string}>(
  "London/fetchLondonWeather",
  async (_, { rejectWithValue }) => {
    return getLondonData()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);