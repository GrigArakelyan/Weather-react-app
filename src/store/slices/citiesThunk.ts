import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetWeatherData } from "../../types/getWeatherData";
import { getCitiesData } from "../../services/getWeather";


export const fetchCitiesThunk = createAsyncThunk<GetWeatherData, {lat: string; lon: string}, {rejectValue: string }>(
  "Cities/fetchCitiesThunk",
  async (city, { rejectWithValue }) => {
    return getCitiesData(city.lat, city.lon)
      .then(({data}) => data )
      .catch((error) => rejectWithValue(error.message));
  }
);