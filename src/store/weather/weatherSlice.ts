import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'Weather',
    initialState: {
        isLoading: false
    },
    reducers: {
        startLoadingWeather: ( state ) => {
            state.isLoading = true;
        },
    }
})

export const {
    startLoadingWeather,
} = weatherSlice.actions