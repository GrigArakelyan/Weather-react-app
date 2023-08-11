import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTokyoData } from "../../../services/getWeather";
import { GetWeatherData } from "../../../types/GetWeatherData";

export const fetchTokyoWeather = createAsyncThunk<GetWeatherData,undefined,{rejectValue: string}>(
  "myProfile/fetchMyProfile",
  async (_, { rejectWithValue }) => {
    return getTokyoData()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);