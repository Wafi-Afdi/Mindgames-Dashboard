import React from 'react'

function DashboardView() {
  return (
    <div className='basis-3/4 border-r-2 border-[#404040] py-[30px] flex flex-col pl-[150px]'>
        {/* Data Game  */}
        <div className='grid grid-cols-3 gap-x-[100px] max-w-[800px] w-full '>
            <div>
                <p className='text-[20px]'>Depression Level</p>
                <p className='text-[50px]'>
                    57%
                </p>
            </div>
            <div>
                <p className='text-[20px]'>Game Progress</p>
                <p className='text-[50px]'>
                    57%
                </p>
            </div>
            <div>
                <p className='text-[20px]'>Score</p>
                <p className='text-[50px]'>
                    57%
                </p>
            </div>
        </div>
        {/* Data Game End  */}

        {/* Video Feed */}
        <div className='w-full  mt-[3rem] max-w-[720px]'>
            <p className='text-[20px]'>Game View</p>
            <div className='w-[720px] h-[405px] bg-white  mt-[20px]'>

            </div>
        </div>
        {/* Video Feed End */}

        {/* Chart */}

        {/* Chart End*/}
    </div>
  )
}

export default DashboardView