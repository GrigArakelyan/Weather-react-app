import  Axios  from "../../lib/instance";
import React, {FC} from "react"
import { useParams } from "react-router"

const Cities:FC = () => {

   const API = "ff4ee57a8788206d59b27085cc4e2e83";


   const {lat, lon, name} = useParams()
   console.log(lat, lon, name);

   const getWeather = `weather?lat=${lat}&lon=${lon}&appid=${API}`
   Axios.get(getWeather)
   .then(({data}) => {console.log(data, "data")})
   .catch(error => console.error(error))

   return (
      <div>
         <h2>{name}</h2>
      </div>
   )
}
export default Cities