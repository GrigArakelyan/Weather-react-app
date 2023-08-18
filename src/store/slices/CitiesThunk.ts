import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetWeatherData } from "../../types/GetWeatherData";
import { getCitiesData } from "../../services/getWeather";
import { CityConfigType } from "../../types/CitiesConfigType";


export const fetchCities = createAsyncThunk<GetWeatherData,CityConfigType,{rejectValue: string }>(
  "Cities/fetchCities",
  async (city, { rejectWithValue }) => {
    return getCitiesData(city.lat, city.lon, city.API)
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);