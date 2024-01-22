import { weatherAPI } from '../../api';
import { startLoadingWeather, weatherLoaded } from '../../store/weather';
import { AppThunk } from '../../hooks';

export interface LatLon {
  lon: number;
  lat: number;
}

const apiKey = import.meta.env.VITE_WEATHER_API_URL

export const getWeather = ( { lon = 0, lat = 0 }: LatLon ): AppThunk => {
  return async dispatch => {
    try {
      dispatch( startLoadingWeather() );
      const { data } = await weatherAPI.get('/forecast',{
        params: {
          lat: lat,
          lon: lon,
          cnt: 5,
          appid: apiKey,
        }
      })
      console.log(data);
      dispatch( weatherLoaded() );
    } catch(err) {
      console.error(err);
      
    }
  };
}