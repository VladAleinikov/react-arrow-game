import React from 'react'
import Controls from '../Controls'

export interface IDescriptionProps {
      isTimerActive: boolean;
      setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Description = (props: IDescriptionProps) => {
      const { isTimerActive, setIsTimerActive } = props;
      return (
            <div className="flex flex-col gap-4 w-[40%] min-h-[500px] m-2 p-5 border border-sky-200 rounded-md shadow-lg">
                  <h2 className='font-bold text-2xl text-sky-700'>Arrow-game description</h2>
                  <p className='text-lg font-medium'>Player's goal is to press the keyboard arrow key that was shown on him before the next one appears.</p>
                  <p className='text-lg font-medium'>After threeconsecutive successful hits - game won, after three fails - lost</p>
                  <Controls
                        isTimerActive={isTimerActive}
                        setIsTimerActive={setIsTimerActive}
                  />
            </div>
      )
}

export default Description