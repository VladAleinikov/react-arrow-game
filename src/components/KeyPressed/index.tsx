import { useCallback, useEffect } from 'react'
import { MAP_ARROW_CODES } from '../../constants';
import { useActions } from '../../hooks/actions';
import { UseKeyPressedElement } from '../../hooks/keyPressed';
import SpanInCircle from '../SpanInCircle';

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
  }, [isTimerActive, setEnteredValue])
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  
  return (
    <div>
      <h2 className='font-bold text-2xl text-sky-700'>Key pressed</h2>
      <p className='font-medium'>Press the key corresponding to the key in "Random keys"</p>
      <SpanInCircle color={null}>
        {keyPressedElement}
      </SpanInCircle>
    </div>
  )
}

export default KeyPressed