import { weatherAPI } from "../api";
import { AppThunk, useAppSelector } from ".";
import { type RootState, LatLon, startLoadingWeather, weatherLoaded } from "../store";
import { getEnvVariables } from "../helpers";



const { VITE_WEATHER_API_URL: apiKey } = getEnvVariables();

export const useWeatherStore = () => {

  const { isLoading, weatherData } = useAppSelector( ( state: RootState ) => state.weather );

  const getWeather = ( { lon = 0, lat = 0 }: LatLon ): AppThunk => {
    return async dispatch => {
      try {
        dispatch( startLoadingWeather() );
        const { data: forecastData } = await weatherAPI.get('/forecast',{
          params: {
            lat: lat,
            lon: lon,
            cnt: 40,
            appid: apiKey,
          }
        })

        const { data: currentData } = await weatherAPI.get('/weather',{
          params: {
            lat: lat,
            lon: lon,
            appid: apiKey,
          }
        })

        const weatherData = {
          currentWeather: currentData,
          forecastWeather: forecastData,
        }
        
        console.log( weatherData );
        
        dispatch( weatherLoaded( weatherData ) );
      } catch(err) {
        console.error(err);
        console.error('No response available');
        dispatch( weatherLoaded( { currentWeather: {}, forecastWeather: {}  } ) );
      }
    };
  }

  return {
    isLoading,
    weatherData,
    
    getWeather

  }
}