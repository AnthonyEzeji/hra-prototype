import React from 'react'
import HRALogo from '../assets/hra logo.webp'
function Nav() {
  return (
    <div className='w-screen h-fit z-40  top-0 drop-shadow-xs justify-center items-center  text-slate-600 p-2 absolute flex  '>
     
      
     
<img className = 'h-auto w-[250px] m-0  md:flex hidden ' src={HRALogo} alt="" />
        
        <ul className="hidden lg:flex mx-[10%] ">
            <li className='md:text-[16px] w-fit font-light drop-shadow-lg  '>Solutions</li>
            <li className='md:text-[16px] w-fit font-light drop-shadow-lg  '>Who We Serve</li> 
            <li className='md:text-[16px] w-fit font-light drop-shadow-lg  '>About Us</li> 
            <li className='md:text-[16px] w-fit font-light drop-shadow-lg  '>Insights</li>
            <li className='md:text-[16px] w-fit font-light drop-shadow-lg  '>Contact</li>
          </ul>
        <div className=" flex ">
          <button className  = "bg-transparent text-black font-semibold border-none mr-5"> Sign In</button>
          <button className = 'bg-red-600'> Sign Up</button>

        </div>
      </div>
    
    
  )
}

export default Nav