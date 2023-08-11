import { RootState } from "../store";

export const selectLondonWeatherData = ({ London }:RootState) => London;
export const selectBerlinWeatherData = ({ Berlin }:RootState) => Berlin;
export const selectTokyoWeatherData = ({ Tokyo }:RootState) => Tokyo;
export const selectParisWeatherData = ({ Paris }:RootState) => Paris;
export const selectNewYorkWeatherData = ({ NewYork }:RootState) => NewYork;