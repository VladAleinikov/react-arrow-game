import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import Controls from "./Controls";
import RandomKeys from "./RandomKeys";
import { INTERVAL_TIME } from "../constants";
import KeyPressed from "./KeyPressed";

const Playground = () => {
  const { currentStep } = useAppSelector((state) => state.playground);
  const { setCurrentStep, setSteps, setUnsuccess } = useActions();
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        setUnsuccess();
        setCurrentStep();
        setSteps();
      }, INTERVAL_TIME);
    }
    else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    }
  }, [isTimerActive]);

  return (
    <div>
      <p>{currentStep}</p>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
    </div>
  );
};

export default Playground;
