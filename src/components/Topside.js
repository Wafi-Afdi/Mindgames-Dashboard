import React from 'react'
import { BsPersonFill, BsFillChatLeftDotsFill } from "react-icons/bs";
function Topside() {
  return (
    <div className='w-full px-10 py-8 flex justify-between border-b-2 border-[#404040] items-center'>
        <h1 className='text-[36px] font-bold'>
            Dashboard
        </h1>
        <div className='flex gap-10  items-center'>
            <BsFillChatLeftDotsFill className='w-[25px] h-[25px] cursor-pointer' />
            <div className='flex gap-3 items-center'>
                <p className='text-[20px]'>
                    Whiz Kids
                </p>
                <BsPersonFill className='w-[40px] h-[40px]' /> 
            </div>
        </div>
    </div>
  )
}

export default Topside