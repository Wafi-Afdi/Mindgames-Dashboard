import React from 'react'
import { FaBookMedical } from "react-icons/fa";
import { BsGraphUp, BsFillGrid3X3GapFill, BsPersonFill, BsFillGearFill, BsFillQuestionCircleFill } from "react-icons/bs";
import {IoNotificationsSharp } from "react-icons/io5";


function Navbar() {
  return (
    <nav className='max-w-[300px] w-full h-screen border-r-2 border-[#404040] flex items-center flex-col py-[50px]'>
        <div className='w-full px-[30px]'>
            <h1 className='text-[36px] font-bold'>
                MINDGAMES
            </h1>
            <div className='grid-cols-1 w-full mt-[40px] gap-y-[50px] grid'>
                <div className='w-full'>
                    <h2 className='text-[30px] font-bold text-left'>
                        Menu
                    </h2>
                    <div className='h-[2px] max-w-[353px] w-full bg-[#404040] mt-2'/>
                    <div className='grid-cols-1 w-full mt-[20px] gap-y-[15px] grid text-[20px]'>
                        <a className='flex gap-4 items-center cursor-pointer '>
                            <BsFillGrid3X3GapFill className='w-[20px] h-[20px]'/>
                            <p>Dashboard</p>
                        </a>
                        <a className='flex gap-4 items-center cursor-pointer'>
                            <FaBookMedical className='w-[20px] h-[20px]'/>
                            <p>Medical History</p>
                        </a>
                        <a className='flex gap-4 items-center cursor-pointer'>
                            <BsGraphUp className='w-[20px] h-[20px]'/>
                            <p>Analytic</p>
                        </a>
                        <a className='flex gap-4 items-center cursor-pointer'>
                            <IoNotificationsSharp className='w-[20px] h-[20px]'/>
                            <p>Notification</p>
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-[30px] font-bold text-left'>
                        Preference
                    </h2>
                    <div className='h-[2px] max-w-[353px] w-full bg-[#404040] mt-2'/>
                    <div className='grid-cols-1 w-full mt-[10px] gap-y-[15px] grid text-[20px]'>
                        <a className='flex gap-4 items-center cursor-pointer'>
                            <BsPersonFill className='w-[20px] h-[20px]'/>
                            <p>Profile</p>
                        </a>
                        <a className='flex gap-4 items-center cursor-pointer'>
                            <BsFillGearFill className='w-[20px] h-[20px]'/>
                            <p>Settings</p>
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-[30px] font-bold text-left'>
                        Support
                    </h2>
                    <div className='h-[2px] max-w-[353px] w-full bg-[#404040] mt-2'/>
                    <div className='grid-cols-1 w-full mt-[10px] gap-y-[5px] grid text-[20px]'>
                    <a className='flex gap-4 items-center cursor-pointer'>
                            <BsFillQuestionCircleFill className='w-[20px] h-[20px]'/>
                            <p>Help & Support</p>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar