import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { weatherSlice  } from "../weather";
import { userSlice  } from "../user";
import { uiSlice } from "../ui";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    users: userSlice.reducer,
    weather: weatherSlice.reducer,
    ui: uiSlice.reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)