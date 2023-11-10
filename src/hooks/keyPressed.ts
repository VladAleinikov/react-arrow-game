import { MAP_ARROW_CODES } from "../constants";
import { IMapArrowCodes } from "../models/arrows";
import { useAppSelector } from "./redux"

export const UseKeyPressedElement = (): string =>{
      const { steps, currentStep } = useAppSelector(state => state.playground);
      
      if (steps.length) {
            const enteredValue = steps[currentStep - 1].enteredValue;

            if (enteredValue) {
                  return MAP_ARROW_CODES[enteredValue as keyof IMapArrowCodes]
            }
      }
      return "⌛️";
}