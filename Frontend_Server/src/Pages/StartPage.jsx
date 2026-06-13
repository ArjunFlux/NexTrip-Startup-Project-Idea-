import React from 'react'
import NavBar from '../Components/NavBar'
// Importing the icons 
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FaBus } from "react-icons/fa";
function StartPage() {
  return (
    <div className='h-screen'>
      <NavBar/>
      <div className='border border-gray-200 rounded-2xl h-[88%] mx-20 bg-gray-50'>
        <div className='ml-[27%] text-8xl leading-30 mt-5'>
          <p className='flex items-center'><span className='font-extrabold'>Explore</span> <FaLongArrowAltRight className='mx-10 border rounded-full px-2 bg-black' color='white'/> Like</p>
          <p className='flex items-center'>Never <BiSolidPlaneTakeOff className='mx-10 border rounded-full px-1 bg-yellow-400 border-gray-300'/> <span className='font-extrabold'>Before</span> </p>
        </div>
        <div>
          <p className='text-center mt-10 text-gray-400 text-[17px]'>Create an account on NexTrip now and let the journey begin !</p>
          <div className='flex justify-center items-center mt-5 gap-10'>
            <button className='border px-8 py-3 border-gray-300 rounded-2xl bg-yellow-300'>Sign In</button>
            <button className='border px-8 py-3 border-gray-300 rounded-2xl bg-black text-white'>Explore NexTrip</button>
          </div>
        </div>
        <div className='flex items-center justify-between mx-10 mt-10'>
          <div className='border h-[35vh] w-[20vw] border-gray-200 rounded-2xl bg-white'>
            <p className='text-center mt-5 text-2xl font-bold'>Find Your Dream <br/> Destination</p>
            <div>
                <input type='text' placeholder='From ' className='border bg-gray-50 w-[17vw] h-14 mt-5 mx-5 border-gray-300 rounded-2xl pl-5 absolute'/>
                <input type='text' placeholder='To ' className='border bg-gray-50 w-[17vw] h-14 mt-22 mx-5 border-gray-300 rounded-2xl pl-5 absolute'/>
                <RiArrowUpDownFill size={50} className='relative left-60 top-13 p-2 rounded-full bg-blue-400' color='white'/>
                <div>
                  <input type='text' placeholder='Departure Date' className='border bg-gray-50 w-[14vw] h-12 mt-27 mx-5 border-gray-300 rounded-2xl pl-5'/>
                  <MdOutlineLocationSearching  className='-mt-11 ml-70 cursor-pointer' color='darkblue' size={35}/>
                </div>
            </div>
          </div>
          <div className='border h-[35vh] w-[20vw] border-gray-200 rounded-2xl bg-white'>
            <img src='./image.png' alt='Photo of the actual booking' className='px-8 mt-5'/>
            <p className='text-center mt-6 text-2xl font-bold'>Choose a destination <br/> that suits you</p>
          </div>
          <div className='border h-[35vh] w-[20vw] border-gray-200 rounded-2xl bg-white'>
            <p className='text-center mt-6 text-2xl font-bold'>Enjoy the journey to <br/> your dream destination</p>
            <img src='./Screenshot 2026-04-14 205013.png' alt='Photo of the Booking' className='h-[20vh] ml-10 mt-5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage
