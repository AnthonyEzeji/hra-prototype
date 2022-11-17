import React from 'react'
import heroImg from '../assets/hero-image.png'
import {ChartPieIcon, ShieldExclamationIcon,Rec, UserCircleIcon, InformationCircle } from '@heroicons/react/outline'
import {HiOutlineTrendingUp,HiOutlineScale} from 'react-icons/hi'
import {BiStreetView} from 'react-icons/bi'
import { TbSchool } from "react-icons/tb"
import Carousel from './Carousel'
function Hero() {
  return (
    <div className='w-full h-fit bg-gray-400 flex  justify-start items-center pt-10  '>
        
        <div className='  grid-cols-1 md:grid-cols-3 max-w-[95%]  m-5 '>
           
               
           
            <div className='flex z-3 justify-center md:items-start w-full  h-full'>
                <div className='w-fit min-h-[200px]  flex-col ' >
                <p className='md:text-3xl lg:text-4xl w-fit max-w-[400px] text-3xl text-red-500 drop-shadow-lg font-bold'>Creating Partnerships to Advance, Protect, and Reward Superior Healthcare</p>
                <h1 className='py-3 max-w-[300px] xl:text-10xl lg:text-8xl text-5xl xs:text-5xl text-slate-600   md:text-7xl font-bold drop-shadow-lg'>Risk Management</h1>
                <button className = ' font-bold py-4 px-6 md:w-fit mt-2 drop-shadow-lg'><p>Get Started</p></button>
                </div>
               
                {<div  className=' absolute   flex-col      mx-[120px] md:left-1/2 transform     rounded-xl pr-[px] hidden md:flex   '>

            <div className='flex justify-start  items-center flex-wrap w-full h-fit min-h-[300px] min-w-[320px] shadow-2xl bg-slate-600  border-neutral-400 drop-shadow-md  text-2xl  rounded-3xl'>
                <p className = 'flex px-4 items-center  lg:py-4 py-1.5 md:text-[20px] lg:text-4xl text-[1.5vw] font-bold  text-medium  text-slate-200      ' > <HiOutlineTrendingUp  className='text-4xl text-red-700 mr-2 drop-shadow-lg '/>Data Analytics</p>
                <p className = 'flex px-4 items-center lg:py-4 py-1.5 md:text-[20px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold  text-slate-200    '><ShieldExclamationIcon className='text-red-700 w-10  text-red-700 mr-2 drop-shadow-lg '/> Patient Safety and Risk Managment </p>
                <p className = 'flex px-4 items-center lg:py-4 py-1.5 md:text-[20px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold text-medium  text-slate-200   '><HiOutlineScale className='text-red-700 text-4xl text-red-700 mr-2 drop-shadow-lg '/>Claims and Litigation Services</p>
                <p className = 'flex px-4 items-center lg:py-4 py-1.5 md:text-[20px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold text-medium  text-slate-200  '><BiStreetView className='text-red-700 text-4xl  text-red-700 mr-2 drop-shadow-lg '/>Self-Insured Programs</p>
                <p className = 'flex px-4 items-center lg:py-4 py-1.5 md:text-[20px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold text-medium  text-slate-200   '><TbSchool className='text-red-700 text-4xl  text-red-700 mr-2 drop-shadow-lg '/>Education</p>
                
  </div>

        </div>}
            </div>
           
 
        </div>
        
    </div>
  )
}

export default Hero

