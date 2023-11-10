import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import Controls from "./Controls";
import RandomKeys from "./RandomKeys";
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "../constants";
import KeyPressed from "./KeyPressed";
import Score from "./Score";
import Modal from "./Modal";

const Playground = () => {
  const { currentStep, totalSuccessful, totalUnsuccessful } = useAppSelector((state) => state.playground);
  const { setCurrentStep, setSteps, setUnsuccess } = useActions();
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean | null>(null);

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

  useEffect(() => {
    const win = totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT;
    const lose = totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT;
    
    win && setIsSuccessEndGame(true);
    lose && setIsSuccessEndGame(false);

    if (win || lose) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [totalSuccessful, totalUnsuccessful])


  return (
    <div>
      <p>{currentStep}</p>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && <Modal isSuccessEndGame={isSuccessEndGame} setIsShowModal={setIsShowModal}/>}
    </div>
  );
};

export default Playground;
