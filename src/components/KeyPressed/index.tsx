import React, { useCallback, useEffect } from 'react'
import { MAP_ARROW_CODES } from '../../constants';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';
import { UseKeyPressedElement } from '../../hooks/keyPressed';

interface IKeyPressedProps{
      isTimerActive: boolean
}
const KeyPressed = (props: IKeyPressedProps) => {
  const { isTimerActive } = props;
  const { setEnteredValue } = useActions();
  const keyPressedElement = UseKeyPressedElement();
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
      setEnteredValue(e.key);
    }
  }, [isTimerActive])
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  
  return (
    <div>
      <h3>KeyPressed</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed