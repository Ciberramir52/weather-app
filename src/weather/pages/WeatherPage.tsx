import { useEffect } from "react";
import { useAppDispatch, useUsersStore, useWeatherStore } from "../../hooks";
import { NavBar, CurrentWeather, Forecast } from "../";
import "../WeatherPage.css";

export function WeatherPage() {

    const { activeUser } = useUsersStore();
    const { weatherData, getWeather } = useWeatherStore();

    const { currentWeather, forecastWeather } = weatherData;

    console.log( weatherData );
    

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch( getWeather({ lon: activeUser.lon, lat: activeUser.lat}) )
    },[])

    return ( 
        <>
            <NavBar user={ activeUser.name } />
            <div id="weather-container" >
                {
                    ( Object.keys( currentWeather ).length === 0 )
                        ? (
                            <div id="current">
                                <h3>No data available for now</h3>
                            </div>
                        )
                        : <CurrentWeather weather={ currentWeather } />
                }
                {
                    ( Object.keys( forecastWeather ).length === 0 )
                        ? (
                            <div id="forecast">
                                <h3>No data available for now</h3>
                            </div>
                        )
                        : <Forecast weather={ forecastWeather }/>
                }
            </div>
        </>
     );
}