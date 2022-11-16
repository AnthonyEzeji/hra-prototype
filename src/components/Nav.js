import React from 'react'

function Nav() {
  return (
    <div className='w-screen h-[80px] z-10 sticky top-0 drop-shadow-lg border-t-[2px] border-red-300 bg-zinc-200 '>
     
      <div className="w-full h-full px-2 flex justify-between items-center">
        <div className='flex items-center'>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl"></h1>
          <ul className="hidden md:flex">
            <li>Solutions</li>
            <li>Who We Serve</li> 
            <li>About Us</li> 
            <li>Insights</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" flex ">
          <button className  = "bg-transparent text-black font-semibold border-none"> Sign In</button>
          <button className = ''> Sign Up</button>

        </div>
      </div>
    
      </div>
  )
}

export default Nav