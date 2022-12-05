import React from 'react'
import {ReactComponent as DoctorIcon} from '../assets/DoctorIcon.svg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
function ForPhysiciansCard() {
  return (
    <div className = 'flex justify-center  z-20   w-[100%]    rounded-xl md:w-[40%] my-2 shadow-md hover:shadow-xl'>
    <div className="bg-gray-200  md:min-h-[400px]   flex  justify-center items-start  rounded-xl md:w-[100%] w-[80%] z-30 min-w-[300px] ">
      <div className='w-[75%]  h-full rounded-tl-xl flex flex-col items-center justify-center'>
      <h1 className = 'text-3xl text-center  w-fit flex items-center font-bold   text-gray-500'>
            <img src='assets/DoctorIcon.svg' alt=''/>
            <DoctorIcon/>
            New York Physicians
        </h1>
        <p className = ' w-full   drop-shadow-sm text-center text-slate-800 md:text-2xl p-10 font-light'>
      Professional liability coverage for physicians and allied healthcare professionals
        </p>
        <button className ='bg-red-600 text-zinc-300 border-[1px] border-red-600 hover:bg-none font-bold p-4 md:mb-0 mb-2 w-full text-2xl'>

Learn More
</button>
      </div>
     
        
        
    </div>
</div>
  )
}

export default ForPhysiciansCard