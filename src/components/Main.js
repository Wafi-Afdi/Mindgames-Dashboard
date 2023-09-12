import React from 'react'
import DashboardView from './DashboardView'
import GameLog from './GameLog'

function Main() {
  return (
    <div className='flex flex-row w-full h-full'>
        <DashboardView />
        <GameLog/>
    </div>
  )
}

export default Main