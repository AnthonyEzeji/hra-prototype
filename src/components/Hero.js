import React from 'react'
import heroImg from '../assets/hero-image.png'
import {ChartPieIcon, ShieldExclamationIcon,Rec, UserCircleIcon, InformationCircle } from '@heroicons/react/outline'
import {HiOutlineTrendingUp,HiOutlineScale} from 'react-icons/hi'
import {BiStreetView} from 'react-icons/bi'
import { TbSchool } from "react-icons/tb"
function Hero() {
  return (
    <div className='w-full h-screen bg-neutral -300 flex flex-col justify-start '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-10 '>
            <div className='flex flex-col justify-center md:items-start w-full h-full'>
                <p className='text-2xl'>Creating Partnerships to Advance, Protect, and Reward Superior Healthcare</p>
                <h1 className='py-3 text-4xl md:text-7xl font-bold'>Risk Management</h1>
                <button className = ' font-semibold py-3 px-6 sm:w-[60%] mt-2'>Get Started</button>
            </div>
            <div className='w-[80%]'>
                <img className='w-full ml-10  ' src ={heroImg}></img>
            </div>
        <div className=' absolute md:top-[630px] top-[650px]  flex-col py-4 md:flex md:min-w-[760px]  mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
            <p className='font-semibold text-3xl'>Solutions</p>
            <div className='flex justify-center flex-wrap '>
                <p className = 'flex px-4 items-center py-2 text-slate-800 ' > <HiOutlineTrendingUp  className='w-4 text-red-600 mr-2'/>Data Analytics</p>
                <p className = 'flex px-4 items-center py-2 text-slate-800 '><ShieldExclamationIcon className='w-4  text-red-600 mr-2'/> Patient Safety and Risk Managment </p>
                <p className = 'flex px-4 items-center py-2 text-slate-800 '><HiOutlineScale className='w-4  text-red-600 mr-2'/>Claims and Litigation Services</p>
                <p className = 'flex px-4 items-center py-2 text-slate-800 '><BiStreetView className='w-4  text-red-600 mr-2'/>Self-Insured Programs</p>
                <p className = 'flex px-4 items-center py-2 text-slate-800 '><TbSchool className='w-4  text-red-600 mr-2'/>Education</p>
                
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default Hero

