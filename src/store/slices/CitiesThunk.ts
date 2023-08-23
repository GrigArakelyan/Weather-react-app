import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetWeatherData } from "../../types/GetWeatherData";
import { getCitiesData } from "../../services/getWeather";
import { CityConfigType } from "../../types/CitiesConfigType";


export const fetchCitiesThunk = createAsyncThunk<GetWeatherData, {lat: string; lon: string}, {rejectValue: string }>(
  "Cities/fetchCitiesThunk",
  async (city, { rejectWithValue }) => {
    return getCitiesData(city.lat, city.lon)
      .then(({data}) => data )
      .catch((error) => rejectWithValue(error.message));
  }
);