import  Axios  from "../../lib/instance";
import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useParams } from "react-router"
import  CitiesConfig  from "../../config";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { addCityData } from "../../store/slices/CitiesSlice";
import { useSelector } from "react-redux";
import { selectCityWeatherData } from "../../store/selectores/CitiesSelector";
import MainWeather from "../../Components/MainWeather/Index";
import DaysWeather from "../../Components/DaysWeather";
import DailyForecast from "../../Components/DailyForecast";
import axios from "axios";

const Cities:FC = () => {

   const {name} = useParams();
   const API = "d511e704cb5a255e667acb2918f2b07f";

   const dispatch = useAppDispatch();
   const {data, loading, error} = useSelector(selectCityWeatherData);

   useEffect(() => {
      CitiesConfig.filter((city) => {
         if(city.name === name){
            Axios.get(`forecast?lat=${city.lat}&lon=${city.lon}&appid=${API}`)
            .then((res) => dispatch(addCityData(res.data)))
            .catch(error => console.error(error))
            return () => {
               dispatch(addCityData(undefined))
            }
         }
      })
   }, [name]);

   console.log(data, "data")

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         <MainWeather data={data}/>
         <DaysWeather data={data} />
         {/* <DailyForecast data={data}/> */}
      </div>
   )
}
export default Cities