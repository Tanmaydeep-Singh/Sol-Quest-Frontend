import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice";

export const store = configureStore({
  reducer: reducer
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
