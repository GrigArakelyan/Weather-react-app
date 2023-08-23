import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useAppDispatch } from "../../hook/useAppDispatch";
import { selectCityWeatherData } from "../../store/selectores/citiesSelector";
import MainWeather from "../Components/MainWeather/Index";
import HourlyForecast from "../Components/HourlyForecast";
import DailyForecast from "../Components/DailyForecast";
import DaysWeather from "../Components/DaysWeather";
import Loading from "../../Components/Loading/Loading";
import { fetchCitiesThunk } from "../../store/slices/citiesThunk";
import { useAppSelector } from "../../hook/useAppSelector";
import { useSearchParams } from "react-router-dom";

const Cities:FC = () => {
   const {data, loading, error} = useAppSelector(selectCityWeatherData);
   const [searchparams, setSearchParams] = useSearchParams();
   const dispatch = useAppDispatch();
   const lat = searchparams.get('lat')
   const lon = searchparams.get('lon')

   
   useEffect(() => {
      if(lat && lon) {
         dispatch(fetchCitiesThunk({lat, lon}))
      }
   }, [])
 

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         {loading && <Loading />}
         {error && 
            <div className="req_error_div">
               <p className="req_error">{`Error ! ${error}`}</p>
            </div>}
         {!loading && data &&
         <> 
            <MainWeather data={data}/>
            <HourlyForecast data={data}/>
            <DailyForecast data={data}/>
            <DaysWeather data={data}/>
         </>}
      </div>
   )
}
export default Cities