import React ,{Fragment} from 'react'
import HRALOGO from '../assets/hra logo.webp'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Menu, Transition, } from '@headlessui/react'
import {ChartPieIcon, ShieldExclamationIcon,Rec, UserCircleIcon, InformationCircle } from '@heroicons/react/outline'
import {HiOutlineTrendingUp,HiOutlineScale, HiOutlineUserGroup} from 'react-icons/hi'
import {BiInfoCircle, BiStreetView, BiNews} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import { TbSchool } from "react-icons/tb"
import {FcAbout} from 'react-icons/fc'
import '../css/Nav2.css'
import { RiHospitalLine } from 'react-icons/ri'
import {ReactComponent as DoctorIcon} from '../assets/DoctorIcon.svg'
import {MdOutlineInsertComment} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Nav2() {
  return (
    <div class='navbar' className='w-screen h-[10vh] flex p-3 drop-shadow-lg  z-40  top-[25px] bg-zinc-300 text-white items-center fixed  border-b-[1px] border-gray-300' >
  
<div className='lg:w-[20%] w-[50%] lg:h-[70%] min-h-[50px] md:h-[90%] md:w-[40%]  hidden md:flex justify-centermd:justify-start'><img src={HRALOGO} className='z-10  lg:w-[70%] md:w-[50%]' alt="" /></div>
<div className='lg:w-[60%]  flex  justify-center'>
    <ul className = 'w-fit  items-center hidden lg:flex'>
        <li> <Menu as='div' className='relative inline-block text-left  '>
            <Menu.Button className='flex items-center '>
              <p>Solutions</p>
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
                 
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex '
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <HiOutlineTrendingUp className = 'text-3xl'/>
                       <p class='menu-item-p'>Data Analytics</p>
                       
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <ShieldExclamationIcon className='w-8'/>
                        <p class='menu-item-p'> Patient Safety & Risk Management</p>
                   
                       
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <HiOutlineScale className = 'text-3xl'/>
                        <p class='menu-item-p'>Claims and Litigation</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <BiStreetView className = 'text-3xl'/>
                        <p class='menu-item-p'>Self-Insured Programs</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <TbSchool className = 'text-3xl'/>
                        <p class='menu-item-p'>Education</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu></li>
        <li >
        <Menu as='div' className='relative inline-block text-left '>
            <Menu.Button className='flex items-center'>
              <p>Who We Serve</p>
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
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[250px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none  mt-8'>
                <div className='py-1'>
                 
                 
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <RiHospitalLine className = 'text-3xl'/>
                        <p class='menu-item-p'>Hospitals</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <DoctorIcon className = 'text-3xl'/>
                        <p class='menu-item-p'>New York Physicians</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li > <Menu as='div' className='relative inline-block text-left '>
            <Menu.Button className='flex items-center'>
              <p>About Us </p>
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
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[250px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none  mt-8'>
                <div className='py-1'>
                 
                 
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <BiInfoCircle className = 'text-3xl '/>
                        <p class='menu-item-p'>About Us</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <HiOutlineUserGroup className = 'text-3xl '/>
                        <p class='menu-item-p'>Leadership</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <MdWorkOutline className = 'text-3xl'/>
                        <p class='menu-item-p'>Careers</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <BiNews className = 'text-3xl'/>
                        <p class='menu-item-p'>News and Events</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu></li>
          <li ><Menu as='div' className='relative inline-block text-left '>
            <Menu.Button className='flex items-center'>
              <p>Insights</p>
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
              <Menu.Items className='origin-top-left absolute left-0 ring-1 ring-gray-400 mt-2 w-[250px] rounded-md shadow-lg bg-gray-300 divide-y divide-gray-100 focus:outline-none  mt-8'>
                <div className='py-1'>
                 
                 
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 flex'
                            : 'text-gray-700 flex',
                          'block px-4 py-2 text-lg items-center'
                        )}
                      >
                        <MdOutlineInsertComment className = 'text-3xl '/>
                        <p class='menu-item-p'>Blogs</p>
                        
                      </a>
                    )}
                  </Menu.Item>
                
                </div>
              </Menu.Items>
            </Transition>
          </Menu></li>
        <li>
        
        </li>
    </ul>
</div>
<div className='lg:w-[20%] w-[100%] flex justify-evenly md:w-[50%] items-center'>

<button className ='text-white border-2 border-red-600 bg-red-600 w-[40%] h-fit'>Sign In</button>
</div>

    </div>
  )
}

export default Nav2