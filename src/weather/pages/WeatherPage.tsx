import { useEffect } from "react";
import { useAppDispatch, useUsersStore, useWeatherStore } from "../../hooks";
import { NavBar, CurrentWeather, Forecast } from "../";
import '../WeatherPage.css'

export function WeatherPage() {

    const { activeUser } = useUsersStore();
    const { weatherData, getWeather } = useWeatherStore();

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch( getWeather({ lon: activeUser.lon, lat: activeUser.lat}) )
    },[])

    return ( 
        <>
            <NavBar user={ activeUser.name } />
            <div id='weather-container' >
                <CurrentWeather weather={ weatherData } />
                <Forecast weather={ weatherData }/>
            </div>
        </>
     );
}