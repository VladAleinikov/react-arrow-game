import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "../constants";
import Modal from "./Modal";
import Description from "./Description";
import GameField from "./GameField";

const Playground = () => {
  const { totalSuccessful, totalUnsuccessful } = useAppSelector((state) => state.playground);
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
  }, [isTimerActive, setCurrentStep, setSteps, setUnsuccess]);

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
    <div className="container flex justify-around items-center m-auto min-w-[800px] min-h-[100vh]">
      <GameField isTimerActive={isTimerActive}/>
      
      <Description isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} />
      {isShowModal && <Modal isSuccessEndGame={isSuccessEndGame} setIsShowModal={setIsShowModal} />}

    </div>
  );
};

export default Playground;
