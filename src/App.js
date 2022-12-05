import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HRAlogo from './assets/hra logo.webp'
import Carousel from './components/Carousel'
import ForHospitalsCard from './components/ForHospitalsCard';
import ForPhysiciansCard from './components/ForPhysiciansCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './css/Splide.css'
import './css/Circle.css'
import LandingImage from './assets/landing image 3.webp'
import Nav2 from './components/Nav2';
import { ChevronDownIcon, ShieldExclamationIcon } from '@heroicons/react/outline';
import { HiOutlineScale, HiOutlineTrendingUp } from 'react-icons/hi';
import { BiStreetView } from 'react-icons/bi';
import { TbSchool } from 'react-icons/tb';
import { Menu, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import './css/Tab.css'
import SolutionCard from './components/SolutionCard';
import Contact from './components/Contact';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div  className="z-40 m-0  flex flex-col   w-screen h-fit  ">
          <div className = 'bg-gray-300 w-[100%] h-[25px] fixed z-40 flex justify-end drop-shadow-xl shadow-2xl  '>
<div className = 'flex text-gray-700 w-[100%] justify-end'>
<p className='border-x-[1px] border-gray-400  text-center min-w-[70px] text-sm'>
    Contact
  </p>
  <p className='border-r-[1px] border-gray-400  text-center min-w-[70px] text-sm'>
    Careers
  </p>
  <p className='  border-gray-400 text-center min-w-[70px] text-sm'>
    Blogs
  </p>
</div>
</div>
  <Nav2></Nav2>
     <Splide className = 'w-screen h-screen mt-0 pt-0  ' >
  {<SplideSlide className='p-0 h-screen '>
  <Hero/>
  </SplideSlide>}
  {<SplideSlide className='p-0 h-screen md:h-fit w-[99vw] flex  justify-center  '>
    <div className='md:w-full md:h-fit flex flex-col md:flex-row-reverse   bg-slate-100 justify-center  border-b-[1px] border-gray-300'>
    <div className=' md:h-fit h-screen flex flex-col p   md:w-[30%] justify-start  mx-[5%]  mt-20 lg:mt-40 p-2 rounded-2xl '>
      <h1 className = 'lg:text-7xl md:text-4xl sm:text-5xl text-4xl font-bold w-[100%] text-white mb-5 text-gray-600 drop-shadow-md    '>
Risk Management
      </h1>
      <p className='w-auto max-h-[300px] lg:text-3xl md:text-xl sm:text-2xl text-gray-900 font-normal  mb-5 drop-shadow-2xl  '>
      Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
      </p>
      <button className=' text-white w-full h-fit py-5 text-2xl bg-red-600 border-2 border-red-600'>
        Get Started
      </button>
    </div>
    <img className=' md:h-[100vh] md:mt-0 mt-4 h-auto  flex md:w-[60%] object-cover' src={LandingImage} alt="" >

    </img>
   
    </div>

  
   </SplideSlide>}
</Splide>
   
     
{<div className=' bg-zinc-100 flex flex-col min-h-screen  w-full justify-evenly items-start   mt-40  items-center pb-20  '>
<h1 className='md:mt-40 mt-60 lg:text-6xl md:text-4xl  font-semibold md:text-5xl text-4xl  text-gray-700  mb-20 border-b-[10px] border-gray-200'>Who We Serve</h1>
<div className='md:flex  justify-evenly mb-40'>
<ForHospitalsCard/>
  <ForPhysiciansCard/>
</div>
<Carousel/>
  </div>}
<div className='bg-slate-100 flex flex-col min-h-screen   w-full justify-start items-center pb-20 '>
<h1 className='md:mt-20 mt-60 lg:text-6xl md:text-4xl  font-semibold md:text-5xl text-4xl  text-gray-600  mb-20'>Solutions</h1>
<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className={' w-fit flex justify-evenly p-0 bg-gray-200'}>
        <Tab><h1 className = {selectedIndex===0?'font-black md:text-3xl text-2xl text-gray-700 ':'font-black md:text-3xl text-2xl text-gray-400 '}>Hospitals</h1></Tab>
        <Tab><h1  className = {selectedIndex===1?'font-black md:text-3xl text-2xl text-gray-700  ':'font-black md:text-3xl text-2xl text-gray-400'}>Physicians</h1></Tab>
    
      </Tab.List>
      <Tab.Panels className=' md:w-[70%] w-[90%] flex justify-center items-center pt-10 '>
        <Tab.Panel className='w-fit h-fit flex items-center justify-center  flex-col'>
          
      <p className=' p-6 text-2xl text-slate-600 w-full drop-shadow-md leading-loose font-light'>
      We have a strong history of leading patient safety initiatives and leveraging data to minimize risk and prevent claims. For decades, our expertise was exclusive to aiding the closed system of hospitals at which we were founded. We take pride in the fact that we are now able to take this experience and use it to help hospitals throughout the nation manage their risk.
      </p>
    <div className ='drop-shadow-md bg-gray-200 rounded-md flex flex-col items-start  w-full'>
    
   <div className = 'w-full hover:bg-slate-300'>
   <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
          Risk Transfer
        </h1>
        <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Professional and General Liability Coverage.
        </p>

   </div>
     <div className = 'w-full hover:bg-slate-300 border-t-[1px] border-slate-300'>
     <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
        Self-Insurance Programs​​
        </h1>
        <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Design, setup and self-insurance administration services​.
        </p>
     </div>
     <div className = 'w-full hover:bg-slate-300 border-t-[1px] border-slate-300'>
     <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
       Claims and Litigation
        </h1>
        <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Over 30 years experience handling hospital claims.
        </p>
     </div>
     <div className = 'w-full hover:bg-slate-300 border-t-[1px] border-slate-300'>
     <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
     Patient Safety and Risk Management
        </h1>
        <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Education, training, and risk management best practices.
        </p>
     </div>
          <div className = 'w-full hover:bg-slate-300 border-t-[1px] border-slate-300'>
     <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
     Data Analytics Services
        </h1>
        <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Leveraging claims, risk, and clinical data in support of patient safety initiatives.
        </p>
     </div>
      
    </div>
         </Tab.Panel>
        <Tab.Panel class='tab-panel'></Tab.Panel>
     
      </Tab.Panels>
    </Tab.Group>
</div>
<Contact/>
    </div>
  );
}

export default App;
