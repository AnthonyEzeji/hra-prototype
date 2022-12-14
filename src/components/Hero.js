import React from 'react'
import heroImg from '../assets/hero-image.png'
import {ChartPieIcon, ShieldExclamationIcon,Rec, UserCircleIcon, InformationCircle } from '@heroicons/react/outline'
import {HiOutlineTrendingUp,HiOutlineScale} from 'react-icons/hi'
import {BiStreetView} from 'react-icons/bi'
import { TbSchool } from "react-icons/tb"
import Carousel from './Carousel'
import '../css/Circle.css'
import '../css/Hero.css'
function Hero() {
  return (
    <div className='w-screen h-screen bg-zinc-300 flex  justify-start items-center p-10 overflow-clip   '>
        
        <div className='  grid-cols-1 md:grid-cols-3 max-w-[95%]  m-1 '>
           
               
           
            <div className='flex  justify-center md:items-start w-full  h-full '>
                <div className='w-fit min-h-[200px]  flex-col z-30 ' >
                <p className='md:text-3xl lg:text-4xl w-fit max-w-[400px] text-3xl text-red-600 drop-shadow-sm font-bold'>Creating Partnerships to Advance, Protect, and Reward Superior Healthcare</p>
                <h1 className='py-3 max-w-[300px] xl:text-10xl lg:text-8xl text-5xl xs:text-5xl text-slate-600  md:text-7xl font-bold drop-shadow-lg'>Risk Management</h1>
                {<button id='get-started' className = ' text-zinc-300 font-bold py-4 px-6 md:w-fit mt-2 drop-shadow-lg bg-red-600 border-0'><p>Get Started</p></button>}
                </div>
               
                {<div  className=' absolute       mx-[120px] md:left-1/2 transform     rounded-xl pr-[px] hidden md:flex z-20   '>

            <div className='flex justify-start     items-start flex-wrap w-full h-fit min-h-[300px] min-w-red-700  drop-shared-900    text-2xl  rounded-2xl '>
                <p id='p-tag' className = 'flex px-4 items-center  lg:py-2 py-1.5 md:text-[22px] lg:text-4xl text-[1.5vw] font-bold   text-slate-700 drop-shadow-lg shadow-lg   rounded-3xl    ' > <HiOutlineTrendingUp  className='text-4xl text-red-700 mr-2  '/>Data Analytics</p>
                <p id='p-tag' className = 'flex px-4 items-center lg:py-2 py-1.5 md:text-[22px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold  text-slate-700 drop-shadow-lg shadow-lg  rounded-3xl    '><ShieldExclamationIcon className=' w-10  text-red-700 mr-2  '/>Risk Managment </p>
                <p id='p-tag' className = 'flex px-4 items-center lg:py-2 py-1.5 md:text-[22px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold  text-slate-700 drop-shadow-lg shadow-lg  rounded-3xl   '><HiOutlineScale className=' text-4xl text-red-700 mr-2 '/>Claims and Litigation Services</p>
                <p id='p-tag' className = 'flex px-4 items-center lg:py-2 py-1.5 md:text-[22px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold  text-slate-700 drop-shadow-lg shadow-lg rounded-3xl  '><BiStreetView className=' text-4xl  text-red-700 mr-2  '/>Self-Insured Programs</p>
                <p id='p-tag' className = 'flex px-4 items-center lg:py-2 py-1.5 md:text-[22px]  lg:text-4xl text-[1.5vw] sm:text-2xl font-bold  text-slate-700  drop-shadow-lg shadow-lg  rounded-3xl  ' ><TbSchool className=' text-4xl  text-red-700 mr-2  '/>Education</p>
                
  </div>

        </div>}
            </div>
          
        </div>
        <div className=' hidden 2xl:flex'>
        <div style={{top:'10%', left:'20%',zIndex:1}} className="circle"></div>
        <div style={{top:'20%', left:'65%', fontSize:'7rem' ,zIndex:1}} className="circle"></div>
        <div style={{top:'15%', left:'35%', fontSize:'4rem' ,zIndex:1}} className="circle"></div>
        <div style={{top:'0%', left:'60%', fontSize:'2rem',zIndex:1}} className="circle"></div>
        <div style={{top:'40%', left:'15%', fontSize:'3rem',zIndex:1}} className="circle"></div>
        </div>
   

    </div>
  )
}

export default Hero

