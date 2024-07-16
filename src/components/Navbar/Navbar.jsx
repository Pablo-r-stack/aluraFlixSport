import React from 'react'
import { Link } from 'react-router-dom'
import { LuPlusSquare } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className='w-full flex justify-between items-center p-5'>
      <Link to='/' className='font-sans font-extrabold md:text-3xl sm:text-2xl hover:scale-105 transition-all duration-300'>AluraFlix Sports</Link>
      <div className='flex gap-3 font-bold border-solid border-2 border-black rounded-lg p-1 hover:scale-105 transition-all duration-300'>
        <Link to='/newVideo' className='text-base  flex gap-2 items-center md:text-xl sm:text-sm'><LuPlusSquare className='text-2xl' /> Video</Link>
      </div>
    </nav>
  )
}
