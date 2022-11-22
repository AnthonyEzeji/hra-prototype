import React from 'react'
import HRALogo from '../assets/hra logo.webp'
function Nav() {
  return (
    <div className='w-[100%] h-fit z-40 sticky top-0 drop-shadow-lg  bg-black text-white p-1  '>
     
      <div className="w-full h-full  flex justify-between items-center ">
        <div className='flex items-center  '>
<img className = 'h-auto w-[220px]   md:flex hidden' src="https://fojp.jiveon.com/resources/images/palette-1068/TDCG_HRA_Logo_Red_White_192x42_f.png" alt="" />
        </div>
        <ul className="hidden lg:flex ">
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