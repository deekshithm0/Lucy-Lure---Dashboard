import React from 'react'
import { menuItems } from '../data/Data'

const Sidebar = () => {
  return (
    <div className='w-1/5 h-full rounded-2xl bg-blue-800 p-12'>
      <div className='w-full flex items-center justify-center gap-4 mb-8'>
        <img src='/hexagon.png' alt='Neuro' className='w-[45px]' />
        <h2 className='text-2xl text-white font-bold '>Neuro.</h2>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className='flex items-center gap-2 mt-4 p-2 hover:bg-blue-100 rounded'
          >
            <div className='flex gap-10 items-center text-white hover:text-blue-800'>
              <item.icon /> {item.name}
            </div>
          </li>
        ))}
      </ul>
      <div className='w-full h-44 rounded-md flex flex-col items-center justify-center gap-4 bg-blue-400/50'>
        <p className='text-center'>
          Lorem Ipsum is a placeholder text used in design and publishing.
        </p>
        <button className='w-4/5 h-12 bg-green-500 text-white rounded-md '>
          Apply Here
        </button>
      </div>
    </div>
  )
}

export default Sidebar
