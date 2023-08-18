// import  Axios  from "../../lib/instance";
import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useParams } from "react-router"
import  CitiesConfig  from "../../config";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { addCityData } from "../../store/slices/CitiesSlice";
// import { useSelector } from "react-redux";
import { selectCityWeatherData } from "../../store/selectores/CitiesSelector";
import MainWeather from "../../Components/MainWeather/Index";
import HourlyForecast from "../../Components/HourlyForecast";
import DailyForecast from "../../Components/DailyForecast";
import DaysWeather from "../../Components/DaysWeather";
import { addZero } from "../../helpers/functions";
import Loading from "../../GlobalComponents/Loading/Loading";
import { fetchCities } from "../../store/slices/CitiesThunk";
import { useAppSelector } from "../../hook/useAppSelector";
import { InitialStateData } from "../../store/slices/InitialState";

const Cities:FC = () => {
   const {name} = useParams();
   const dispatch = useAppDispatch();

   useEffect(() => {
      CitiesConfig.filter((city) => {
         if(city.name === name){
            dispatch(fetchCities(city))
         }
      })
      return () => {
         dispatch(addCityData(InitialStateData))
         }
   }, [name]);
   
   const {data, loading, error} = useAppSelector(selectCityWeatherData);

   const dateNow = addZero(new Date().getHours()) + ":" + addZero(new Date().getMinutes());

   const dayData = data?.list.filter((dayData) => {
      const today = new Date().getDay()
      if(today === new Date(dayData.dt_txt).getDay()){
         return dayData
      }
   })

   console.log(data, "data") //////// console.log

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         {loading ? <Loading /> :
         error ?  
            <div>{error}</div>  : 
         <> 
            <MainWeather 
               data={data}
               dateNow={dateNow}/>
            <HourlyForecast 
               data={data} 
               dayData={dayData}
               />
            <DailyForecast 
               data={data}/>
            <DaysWeather data={data}/>
         </>}
         
         
      </div>
   )
}
export default Cities