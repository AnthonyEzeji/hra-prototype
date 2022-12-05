import React from 'react'

function Contact() {
  return (
    <div className=' w-full h-fit min-h-screen flex flex-col items-center justify-start'>
        <div className ='flex flex-col items-center md:w-[90%] w-[99%] px-4'>
        <h1 className='md:mt-20 mt-60 lg:text-6xl md:text-4xl  font-semibold md:text-5xl text-4xl  text-gray-600  mb-20 w-full text-center'>
        Contact
     </h1>
    
     <div className="flex flex-col bg-gray-300 w-[80%] pt-10 px-4 items-center rounded-2xl pb-8">
     <p className = 'font-light md:text-2xl text-xl py-4 w-[80%]'>
     We want to hear from you! Please complete the form below to ensure your inquiry is directed to the appropriate department.  Or call us at 212-891-0700
     </p>
     <p className = 'font-light text-2xl p-1 w-[80%]'>
    
     </p>
        <div className='flex flex-col md:flex-row justify-between mb-4 w-[90%]'>
        <input className ='md:w-[50%] bg-white ring-1 ring-gray-300 p-2' type="text" placeholder='First Name' />
        <input className ='md:w-[50%] bg-white ring-1 ring-gray-300 p-2' type="text" placeholder='Last Name' />
        </div>
    <div className='flex flex-col md:flex-row justify-between mb-4 w-[90%]'>
        <input className='md:w-[50%] bg-white ring-1 ring-gray-300 p-2'  type="text" placeholder='Email' />
        <input className='md:w-[50%] bg-white ring-1 ring-gray-300 p-2' type="text" placeholder='Phone Number' />
        </div>
     
        <input className='w-[90%] p-2 mb-4 bg-white ring-1 ring-gray-300' type="text" placeholder='Company' />
        <input className='w-[90%] p-2 mb-4 bg-white ring-1 ring-gray-300' type="text" placeholder='Reason For Contacting' />
        <textarea className='w-[90%] p-2 bg-white ring-1 ring-gray-300 min-h-[200px] flex flex-col justify-start' type="text" placeholder='Message' />
        <button className = 'bg-red-600 text-zinc-200 font-semibold text-2xl w-[90%] mt-10 border-[1px] border-red-600'>Submit</button>
     </div>
        </div>
     
    </div>
  )
}

export default Contact