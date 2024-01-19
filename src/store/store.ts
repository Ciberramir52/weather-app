import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: {
        users: userSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>