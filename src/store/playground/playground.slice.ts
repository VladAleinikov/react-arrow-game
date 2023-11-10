import { createSlice } from "@reduxjs/toolkit";
import { playgroundState } from "../../models/platground";


const initialState: playgroundState = {
  currentStep: 0,
};

export const playgroundSlice = createSlice({
      name: "playground",
      initialState,
      reducers: {
            setCurrentStep: (state) => {
                  state.currentStep += 1
            },

      }
});
export const playgroundActions = playgroundSlice.actions;
export const playgroundReducer = playgroundSlice.reducer;