import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { weatherSlice } from "../weather";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    users: userSlice.reducer,
    weather: weatherSlice.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)