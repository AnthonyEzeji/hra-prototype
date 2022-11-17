import React from 'react'
import HRALogo from '../assets/hra logo.webp'
function Nav() {
  return (
    <div className='w-[100%] h-[80px] z-10 sticky top-0 drop-shadow-lg  bg-red-500 text-white '>
     
      <div className="w-full h-full px-2 flex justify-between items-center">
        <div className='flex items-center'>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl"><img className ='max-w-[60%]' src={HRALogo} alt="" /></h1>
        </div>
        <ul className="hidden lg:flex">
            <li className='md:text-[16px] w-fit font-semibold drop-shadow-lg text-slate-200 '>Solutions</li>
            <li className='md:text-[16px] w-fit font-semibold drop-shadow-lg text-slate-200 '>Who We Serve</li> 
            <li className='md:text-[16px] w-fit font-semibold drop-shadow-lg text-slate-200 '>About Us</li> 
            <li className='md:text-[16px] w-fit font-semibold drop-shadow-lg text-slate-200 '>Insights</li>
            <li className='md:text-[16px] w-fit font-semibold drop-shadow-lg text-slate-200 '>Contact</li>
          </ul>
        <div className=" flex ">
          <button className  = "bg-transparent text-white font-semibold border-none"> Sign In</button>
          <button className = ''> Sign Up</button>

        </div>
      </div>
    
      </div>
  )
}

export default Nav