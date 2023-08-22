import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useParams } from "react-router"
import  CitiesConfig  from "../../config";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { clearCitiesData } from "../../store/slices/CitiesSlice";
import { selectCityWeatherData } from "../../store/selectores/CitiesSelector";
import MainWeather from "../../Components/MainWeather/Index";
import HourlyForecast from "../../Components/HourlyForecast";
import DailyForecast from "../../Components/DailyForecast";
import DaysWeather from "../../Components/DaysWeather";
import Loading from "../../GlobalComponents/Loading/Loading";
import { fetchCities } from "../../store/slices/CitiesThunk";
import { useAppSelector } from "../../hook/useAppSelector";
import { InitialStateData } from "../../store/slices/InitialState";
import { useSearchParams } from "react-router-dom";

const Cities:FC = () => {
   const {data, loading, error} = useAppSelector(selectCityWeatherData);
   const [searchparams, setSearchParams] = useSearchParams();
   const {name} = useParams();
   const dispatch = useAppDispatch();


   useEffect(() => {
      CitiesConfig.filter((city) => {
         if((city.name).toLowerCase() === (name)?.toLowerCase()){
            dispatch(fetchCities(city))
            setSearchParams({name: city.name, lat: city.lat, lon: city.lon})
         }
      })
      return () => {
         dispatch(clearCitiesData(InitialStateData))
         }
   }, [name]);
   

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         {loading ? <Loading /> :
         error ?  
            <div className="req_error_div">
               <p className="req_error">{`Error ! ${error}`}</p>
            </div>  : 
         data &&
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