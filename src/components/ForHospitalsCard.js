import React from 'react'
import {ReactComponent as DoctorIcon} from '../assets/DoctorIcon.svg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {RiHospitalLine} from 'react-icons/ri'
function ForHospitalsCard() {
  return (
    <div className = 'flex justify-center  z-20  md:mb-0 mb-5 w-[100%]   rounded-xl md:w-[40%] my-2 shadow-md hover:shadow-xl  '>
    <div className="bg-zinc-300  md:min-h-[400px]   flex  justify-center items-start rounded-xl md:w-[100%] w-[80%] z-30 min-w-[300px] ">
      <div className='w-[75%]  h-full rounded-tl-xl flex flex-col items-center justify-center'>
      <h1 className = 'text-3xl text-center  w-fit flex items-center font-black   text-gray-700'>
           
            <RiHospitalLine className='text-black font-'/>
            Hospitals
        </h1>
        <p className = ' w-full  md:w-[80%]   text-center md:text-2xl text-slate-800 p-10 font-light drop-shadow-sm'>
        Identify and solve unique insurance, risk-transfer, and risk management needs
        </p>
        <button className ='bg-red-600 text-zinc-300 border-[1px] border-red-600 hover:bg-none font-bold p-4 md:mb-0 mb-2'>

      Get Started
     </button>
        
      </div>
    
        
    </div>

</div>
  )
}

export default ForHospitalsCard