import React, { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import "./layout.scss"
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { fetchCitiesThunk } from "../../store/slices/CitiesThunk";
import CitiesConfig from "../../config";

const PublicLayout:FC = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   useEffect(() => {
      navigate({pathname:CitiesConfig[0].name,search: `lat=${CitiesConfig[0]?.lat}&lon=${CitiesConfig[0]?.lon}`,})
   }, []);


   const getCitys = (city: any) => () => dispatch(fetchCitiesThunk(city))
   

   return (
      <>
         <header className="header">           
            <div className="h1_div">
               <h1 className="h1_title">5 Days Weather Forecast</h1> 
            </div>
            <div className="cities_div">
               <div className="cities">
                  {CitiesConfig.map((city, index) => (
                     <NavLink key={index} to={{
                        pathname: `/${city?.name}`,
                        search: `lat=${city?.lat}&lon=${city?.lon}`,
                     }} className={({isActive}: {isActive: boolean}) => isActive ? "active" : "h4_city" } onClick={getCitys(city)}>
                        <h4>{city?.label}</h4>
                     </NavLink>
                  ))}
               </div>  
            </div>       
         </header>
         <div className="container">
            <Outlet />
         </div>
      </>
   )
   
}

export default PublicLayout