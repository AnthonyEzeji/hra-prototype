import React from 'react'
import {ReactComponent as DoctorIcon} from '../assets/DoctorIcon.svg'

function ForPhysiciansCard() {
  return (
    <div className = 'flex justify-center py-5 z-30'>
    <div className="bg-stone-300 w-[60%] min-h-[300px]   flex flex-col justify-center items-center rounded-xl p-2 w-[85%] z-30 ">
        <h1 className = 'text-3xl text-center  w-fit flex items-center font-semibold flex-col  text-slate-800'>
            <img src='assets/DoctorIcon.svg' alt=''/>
            <DoctorIcon/>
            Physicians
        </h1>
        <p className = ' w-[50%] text-center drop-shadow-lg text-slate-800'>
        We provide professional liability coverage for physicians and allied healthcare professionals affiliated with our client hospitals.
        </p>
        <button>
            Learn More
        </button>
    </div>
</div>
  )
}

export default ForPhysiciansCard