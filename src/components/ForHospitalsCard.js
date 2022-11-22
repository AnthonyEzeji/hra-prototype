import React from 'react'
import { RiHospitalLine } from "react-icons/ri";
function ForHospitalsCard() {
  return (
    <div className = 'flex justify-center z-20 py-5 '>
        <div className="bg-stone-300 z-20 w-[60%] min-h-[300px]   flex flex-col justify-center items-center rounded-xl p-2  w-[85%]">
            <h1 className = 'text-3xl text-center   w-fit flex flex-col items-center font-semibold  text-slate-800'>
                <RiHospitalLine/>
                Hospitals
            </h1>
            <p className = ' w-[50%] text-center drop-shadow-lg text-slate-800'>
                We partner with healthcare organizations to identify and solve their unique insurance, risk-transfer, and risk management needs.
            </p>
            <button>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default ForHospitalsCard