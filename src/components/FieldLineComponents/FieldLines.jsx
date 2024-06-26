import React from 'react'
import PenaltyAreaLines from './PenaltyAreaLines'
import GoalAreaLines from './GoalAreaLines'
import MiddleLine from './MiddleLine'
import CenterCircleLine from './CenterCircleLine'
import CenterSpot from './CenterSpot'

const FieldLines = () => {
  return (
    <>
      <div className='absolute flex justify-between w-full'>
        <PenaltyAreaLines borderSide='r' />
        <PenaltyAreaLines borderSide='l' />
      </div>
      <div className='absolute flex justify-between w-full'>
        <GoalAreaLines borderSide='r' />
        <GoalAreaLines borderSide='l' />
      </div>
      <MiddleLine />
      <CenterCircleLine />
      <CenterSpot />
    </>
  )
}

export default FieldLines
