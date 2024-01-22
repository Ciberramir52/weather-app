import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false
    },
    reducers: {
        startLoadingWeather: ( state ) => {
            state.isLoading = true;
        },
        weatherLoaded: ( state ) => {
            state.isLoading = false;
        },
    }
})

export const {
    startLoadingWeather,
    weatherLoaded
} = weatherSlice.actions