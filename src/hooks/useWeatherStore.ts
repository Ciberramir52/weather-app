import { weatherAPI } from '../api';
import { startLoadingWeather, weatherLoaded } from '../store/weather';
import { AppThunk, useAppSelector } from '.';
import { type RootState } from "../store";

export interface LatLon {
  lon: number;
  lat: number;
}

const apiKey = import.meta.env.VITE_WEATHER_API_URL

export const useWeatherStore = () => {

  const { isLoading, weatherData } = useAppSelector( ( state: RootState ) => state.weather );

  const getWeather = ( { lon = 0, lat = 0 }: LatLon ): AppThunk => {
    return async dispatch => {
      try {
        dispatch( startLoadingWeather() );
        const { data } = await weatherAPI.get('/forecast',{
          params: {
            lat: lat,
            lon: lon,
            cnt: 40,
            appid: apiKey,
          }
        })
        dispatch( weatherLoaded( data ) );
      } catch(err) {
        console.error(err);
        console.error('No response available');
        dispatch( weatherLoaded( {} ) );
      }
    };
  }

  return {
    isLoading,
    weatherData,
    
    getWeather

  }
}