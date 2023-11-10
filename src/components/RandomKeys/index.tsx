import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { MAP_ARROW_CODES } from "../../constants";
import { IMapArrowCodes } from "../../models/arrows";

export interface IRandomKeysProps {
  isTimerActive: boolean;
}
const RandomKeys = (props: IRandomKeysProps) => {
  const { isTimerActive } = props;
  const { steps } = useAppSelector((state) => state.playground);
  return (
    <div>
      {steps.map((step, id) => (
        <p key={step.step}>
          {MAP_ARROW_CODES[step.currentValue as keyof IMapArrowCodes]}
        </p>
      ))}
    </div>
  );
};

export default RandomKeys;
