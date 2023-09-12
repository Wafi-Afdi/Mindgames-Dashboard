import React from 'react'

function infoCard({message = "Default Message"}) {
  return (
    <div className='border-4  rounded-2xl border-[#404040] px-4 py-4 w-full'>
        <p className='text-[20px]'>{message}</p>
    </div>
  )
}

export default infoCard