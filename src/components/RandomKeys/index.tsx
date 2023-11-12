import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { MAP_ARROW_CODES } from "../../constants";
import { IMapArrowCodes } from "../../models/arrows";
import SpanInCircle from "../SpanInCircle";
import Loading from "../Loading";

export interface IRandomKeysProps {
  isTimerActive: boolean;
}
const RandomKeys = (props: IRandomKeysProps) => {
  const { isTimerActive } = props;
  const { steps } = useAppSelector((state) => state.playground);
  return (
    <div>
      <h2 className='font-bold text-2xl text-sky-700'>Random keys</h2>
      {steps.length === 0 && !isTimerActive && <p className='font-medium'>Press "Play" to start the game and wait for the first arrow appear</p>}
      {steps.length === 0 && isTimerActive && <Loading/>}
      {steps.map((step, id) => (
        <SpanInCircle color={step.success}>
          {MAP_ARROW_CODES[step.currentValue as keyof IMapArrowCodes]}
        </SpanInCircle>
      ))}
    </div> 
  );
};

export default RandomKeys;
