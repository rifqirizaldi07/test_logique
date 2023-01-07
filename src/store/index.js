import { configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./music.slice";

export * from "./music.slice";

export const store = configureStore({
    reducer: {
        music: musicReducer
    }
})