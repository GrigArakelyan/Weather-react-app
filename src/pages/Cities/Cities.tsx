// import  Axios  from "../../lib/instance";
import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useParams } from "react-router"
import  CitiesConfig  from "../../config";
// import { useAppDispatch } from "../../hook/useAppDispatch";
// import { addCityData } from "../../store/slices/CitiesSlice";
import { useSelector } from "react-redux";
import { selectCityWeatherData } from "../../store/selectores/CitiesSelector";
import MainWeather from "../../Components/MainWeather/Index";
import HourlyForecast from "../../Components/HourlyForecast";
import DailyForecast from "../../Components/DailyForecast";
import DaysWeather from "../../Components/DaysWeather";
import { addZero } from "../../helpers/functions";
import Loading from "../../GlobalComponents/Loading/Loading";
import { fetchCities } from "../../store/slices/CitiesThunk";

const Cities:FC = () => {
   const {name} = useParams();
   // const API = "d511e704cb5a255e667acb2918f2b07f";
   // const dispatch = useAppDispatch();
   // useEffect(() => {
   //    CitiesConfig.filter((city) => {
   //       if(city.name === name){
   //          Axios.get(`forecast?lat=${city.lat}&lon=${city.lon}&appid=${API}`)
   //          // .then((res) => dispatch(addCityData(res.data)))
   //          // .catch(error => dispatch(addCityData(error)))
   //          return () => {
   //             dispatch(addCityData(undefined))
   //          }
   //       }
   //    })
   // }, [name]);


   useEffect(() => {
      CitiesConfig.filter((city) => {
         if(city.name === name){
            fetchCities(city)
         }
      })
   }, [name]);
   
   const {data, loading, error} = useSelector(selectCityWeatherData);

   const dateNow = addZero(new Date().getHours()) + ":" + addZero(new Date().getMinutes());

   const dayData =data?.list.filter((dayData) => {
      const today = new Date().getDay()
      if(today === new Date(dayData.dt_txt).getDay()){
         return dayData
      }
   })

   console.log(data, "data") //////// console.log

   return (
      <div key={data?.city.id} className="cities_Weather">
         <h2 className="h2_title">{data?.city.name}</h2>
         {/* {data?.message ?  */}
            {/* <div>{error.message}</div>  :  */}
            {/* {loading ? <Loading /> :
         <> */}
            <MainWeather 
               data={data}
               dateNow={dateNow}/>
            <HourlyForecast 
               data={data} 
               dayData={dayData}/>
            <DailyForecast 
               data={data}/>
            <DaysWeather data={data}/>
         {/* </>} */}
         {/* } */}
         
      </div>
   )
}
export default Cities