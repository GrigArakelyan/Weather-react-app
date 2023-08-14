import  Axios  from "../../lib/instance";
import  "./Cities.scss"
import React, {FC, useEffect} from "react"
import { useParams } from "react-router"
import  CitiesConfig  from "../../config";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { addCityData } from "../../store/slices/CitiesSlice";
import { useSelector } from "react-redux";
import { selectCityWeatherData } from "../../store/selectores/CitiesSelector";
// import { GetWeatherData } from "../../types/GetWeatherData";

// type DataType = {
//    data:GetWeatherData | object;
//    loading: boolean;
//    error: string;
// }

const Cities:FC = () => {

   const {name} = useParams();
   const API = "ff4ee57a8788206d59b27085cc4e2e83";

   const dispatch = useAppDispatch();
   const {data, loading, error} = useSelector(selectCityWeatherData);


   useEffect(() => {
      CitiesConfig.filter((city) => {
         if(city.name === name){
            Axios.get(`weather?lat=${city.lat}&lon=${city.lon}&appid=${API}`)
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
      <div className="cities_Weather">
         <h2 className="h2_title">{data?.name}</h2>
      </div>
   )
}
export default Cities