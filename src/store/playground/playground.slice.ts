import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlaygroundState } from "../../models/platground";
import { ARR_ARROW_CODES, MAP_ARROW_CODES } from "../../constants";

const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnsuccessful: 0
};

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length);
      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        success: null
      });
    },
    setEnteredValue: (state, action: PayloadAction<string>) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];
        const isSuccessful = action.payload === step.currentValue;

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1].enteredValue = action.payload;
          state.steps[state.currentStep - 1].success = isSuccessful;
        }

        if (isSuccessful) {
          state.totalSuccessful += 1;
        }
        else {
          state.totalUnsuccessful += 1;
          state.totalSuccessful = 0;
        }
      }
    },
    setUnsuccess: (state)=>{
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];

        if (step.enteredValue == null) {
          state.steps[state.currentStep - 1].success = false;
          state.totalUnsuccessful += 1;
          state.totalSuccessful = 0;
        }
      }
    }
  },
});
export const playgroundActions = playgroundSlice.actions;
export const playgroundReducer = playgroundSlice.reducer;
