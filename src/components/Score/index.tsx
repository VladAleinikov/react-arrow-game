import React from 'react'
import { useAppSelector } from '../../hooks/redux'

const Score = () => {
      const {to } = useAppSelector((state) => state.playground);
  return (
    <div>Score</div>
  )
}

export default Score