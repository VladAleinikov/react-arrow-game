import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import Controls from "./controls";

const Playground = () => {
  const { currentStep } = useAppSelector((state) => state.playground);
  const { setCurrentStep } = useActions();
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        setCurrentStep();
      }, 1000);
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
    </div>
  );
};

export default Playground;
