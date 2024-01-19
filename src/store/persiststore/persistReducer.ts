import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    users: userSlice.reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)