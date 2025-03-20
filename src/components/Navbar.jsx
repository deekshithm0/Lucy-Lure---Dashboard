import React from 'react'
import { FaSearch, FaBell, FaUpload } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full h-1/7 flex justify-between'>
      <div className='w-1/2'>
        <p className='font-bold'>Welcome Back,</p>
        <h2 className='font-bold text-4xl'>Lucy Lure</h2>
      </div>

      <div className='flex items-center justify-between gap-8 mr-10'>
        <button className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-[4px_8px_30px_rgba(0,0,0,0.3)]'>
          <FaUpload className='mr-2' /> Upload Product
        </button>
        <div className='relative shadow-[4px_8px_30px_rgba(0,0,0,0.3)]'>
          <FaSearch className='absolute top-3 left-3 text-gray-500' />
          <input
            type='text'
            placeholder='Search'
            className=' px-4 py-2 rounded-md placeholder:p-6 bg-white'
          />
        </div>
          <FaBell className='text-xl text-gray-600 cursor-pointer shadow-md' />
      </div>
    </div>
  )
}

export default Navbar
