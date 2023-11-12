import React from 'react'
import { useAppSelector } from '../../hooks/redux'

const Score = () => {
  const { totalSuccessful, totalUnsuccessful } = useAppSelector((state) => state.playground);
  return (
    <div>
      <h2 className='font-bold text-2xl text-sky-700'>Score</h2>
      <p className='font-medium'>On fail, the "Consecutive successful hits" value is reset to zero</p>
      <div className='my-5'>
        <span className='p-2 mr-3 border-2 border-green-400 rounded-lg text-green-400 bg-green-100 font-bold'>Succssesful: {totalSuccessful}</span>
        <span className='p-2 border-2 border-red-400 rounded-lg text-red-400 bg-red-100 font-bold'>Fails: {totalUnsuccessful}</span>
      </div>
    </div>
  )
}

export default Score