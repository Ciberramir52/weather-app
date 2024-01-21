import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persiststore";
import { persistStore } from "redux-persist";

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;