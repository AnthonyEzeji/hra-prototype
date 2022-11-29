import React from 'react'
import {ReactComponent as DoctorIcon} from '../assets/DoctorIcon.svg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
function ForPhysiciansCard() {
  return (
    <div className = 'flex justify-center  z-30  md:mb-0 mb-5    rounded-xl w-[50%] m-2'>
    <div className="bg-stone-300  min-h-[200px]   flex  justify-center items-start drop-shadow-xl shadow-lg rounded-xl md:w-[100%] w-[320px] z-30 ">
      <div className='w-[75%]  h-full rounded-tl-xl flex flex-col items-center justify-center'>
      <h1 className = 'text-3xl text-center  w-fit flex items-center font-bold   text-black'>
            <img src='assets/DoctorIcon.svg' alt=''/>
            <DoctorIcon/>
            Physicians
        </h1>
        <p className = ' w-full  drop-shadow-lg text-center text-slate-800'>
      Professional liability coverage for physicians and allied healthcare professionals
        </p>
      </div>
      <button id='learn-more' className = 'border-0 border-l-[.5px]  border-gray-400 h-full w-[25%]  flex flex-col justify-center items-center  rounded-r-xl p-0 m-0 rounded-l-none bg-slate-600 '>
        <p className='font-semibold text-2xl'><BsFillArrowRightCircleFill/></p>
      
      </button>
        
        
    </div>
</div>
  )
}

export default ForPhysiciansCard