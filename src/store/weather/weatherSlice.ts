import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false,
        weatherData: {}
    },
    reducers: {
        startLoadingWeather: ( state ) => {
            state.isLoading = true;
        },
        weatherLoaded: ( state, { payload } ) => {
            state.weatherData = payload;
            state.isLoading = false;
        },
    }
})

export const {
    startLoadingWeather,
    weatherLoaded
} = weatherSlice.actions