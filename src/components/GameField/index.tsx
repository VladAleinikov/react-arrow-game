import React from 'react'
import RandomKeys from '../RandomKeys';
import KeyPressed from '../KeyPressed';
import Score from '../Score';

interface IGameField{
      isTimerActive: boolean
}
const GameField = (props: IGameField) => {
      const { isTimerActive } = props;
      
      return (
            <div className="flex flex-col gap-4 w-[40%] min-h-[500px] m-2 p-5 border border-sky-200 rounded-md shadow-lg">
                  <RandomKeys isTimerActive={isTimerActive} />
                  <KeyPressed isTimerActive={isTimerActive} />
                  <Score />
            </div>
  )
}

export default GameField