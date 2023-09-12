import React from 'react'
import InfoCard from './infoCard'
function GameLog() {
  return (
    <div className='px-[20px] py-[40px] flex flex-col basis-1/4'>
      <InfoCard message='Game Ended'/>
    </div>
  )
}

export default GameLog