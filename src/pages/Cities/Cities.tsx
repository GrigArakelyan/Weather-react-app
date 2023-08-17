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
import HourlyForecast from "../../Components/HourlyForecast";
import DailyForecast from "../../Components/DailyForecast";
import DaysWeather from "../../Components/DaysWeather";

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

   
   const addZero = (i: any) => {
      if (i < 10) {
         i = "0" + i
      }
      return i;
   }

   const dateNow = addZero(new Date().getHours()) + ":" + addZero(new Date().getMinutes());
   const dayData = data?.list.filter((dayData) => {
      const today = new Date().getDay()
      if(today === new Date(dayData.dt_txt).getDay()){
         return dayData
      }
   })

   console.log(data, "data") //////// console.log
   console.log(data?.list[0].weather[0].icon, "icon")

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         <MainWeather 
            data={data}
            dateNow={dateNow}
         />
         <HourlyForecast 
            data={data} 
            dayData={dayData} 
            addZero={addZero}
         />
         <DailyForecast 
            data={data} 
            addZero={addZero}
            />
         <DaysWeather data={data}/>
      </div>
   )
}
export default Cities