import React from 'react'
export interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Controls = (props:IControlsProps) => {
      const { isTimerActive, setIsTimerActive} = props;
  return (
        <div>
              <button disabled={isTimerActive} onClick={e => setIsTimerActive(true)}>Play</button>
              <button disabled={!isTimerActive} onClick={e => setIsTimerActive(false)}>Stop</button>
    </div>
  )
}

export default Controls