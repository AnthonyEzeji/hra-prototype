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
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div  className="z-40 m-0  flex flex-col   w-screen h-fit  ">
          <div className = 'bg-zinc-300 w-[100%] h-[25px] fixed z-40 flex justify-end drop-shadow-xl shadow-2xl  '>
<div className = 'flex text-gray-700 w-[100%] justify-end'>
  <p className='border-x-[1px] border-gray-400  text-center min-w-[70px] text-sm'>
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
    <div className='md:w-full md:h-fit flex flex-col md:flex-row-reverse   bg-zinc-200 justify-center  '>
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
   
     
{<div className=' bg-zinc-300 flex flex-col min-h-screen  w-full justify-evenly items-start   mt-40  items-center pb-20  '>
<h1 className='md:mt-40 mt-60 lg:text-6xl md:text-4xl  font-bold md:text-5xl text-4xl  text-gray-600  mb-20'>Who We Serve</h1>
<div className='md:flex  justify-evenly mb-40'>
<ForHospitalsCard/>
  <ForPhysiciansCard/>
</div>
<Carousel/>
  </div>}
<div className='bg-zinc-300 flex flex-col min-h-screen   w-full justify-start items-center pb-20 '>
<h1 className='md:mt-20 mt-60 lg:text-6xl md:text-4xl  font-bold md:text-5xl text-4xl  text-gray-600  mb-20'>Solutions</h1>
<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className={' md:w-[50%] flex justify-evenly p-0'}>
        <Tab><h1 className = {selectedIndex===0?'font-black md:text-3xl text-2xl text-gray-700 ':'font-black md:text-3xl text-2xl text-gray-400'}>Hospitals</h1></Tab>
        <Tab><h1  className = {selectedIndex===1?'font-black md:text-3xl text-2xl text-gray-700 ':'font-black md:text-3xl text-2xl text-gray-400'}>Physicians</h1></Tab>
    
      </Tab.List>
      <Tab.Panels className=' md:w-[80%] flex justify-center items-center pt-10'>
        <Tab.Panel className='w-full h-fit flex md:flex-row flex-col'><Menu as='div' className='relative inline-block text-left w-full flex justify-center  '>
            <Menu.Button className='flex items-center '>
              <p>Data Analytics</p>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-900"
              aria-hidden="true"
            />
            
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[360px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none mt-8 p-2 min-h-[200px]'>
                <div className='py-1 bg-zinc-300'>
                <h1 className ='font-bold text-2xl text-red-700'>Data Analytics</h1>
                <p></p>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as='div' className='relative inline-block text-left text-left w-full flex justify-center  '>
            <Menu.Button className='flex items-center '>
              <p>Risk Management</p>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-900"
              aria-hidden="true"
            />
            
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[360px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none mt-8'>
                <div className='py-1'>
                 
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu >
          <Menu as='div' className='relative inline-block text-left text-left w-full flex justify-center  '>
            <Menu.Button className='flex items-center '>
              <p>Claims and Litigation Services </p>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-900"
              aria-hidden="true"
            />
            
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[360px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none mt-8'>
                <div className='py-1'>
                 
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as='div' className='relative inline-block text-left text-left w-full flex justify-center '>
            <Menu.Button className='flex items-center '>
              <p>Claims and Litigation Services </p>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-900"
              aria-hidden="true"
            />
            
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[360px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none mt-8'>
                <div className='py-1'>
                 
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu></Tab.Panel>
        <Tab.Panel class='tab-panel'></Tab.Panel>
     
      </Tab.Panels>
    </Tab.Group>
</div>

    </div>
  );
}

export default App;
