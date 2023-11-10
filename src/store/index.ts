import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playgroundReducer } from './playground/playground.slice';


export const store = configureStore({
      reducer: {
      playground: playgroundReducer
}
});

export type RootState = ReturnType<typeof store.getState>