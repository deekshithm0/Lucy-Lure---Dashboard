

import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'

const Card = ({ title, value, change }) => {
  return (
    <div className='w-full h-full p-4 bg-white shadow-md rounded-lg flex flex-col gap-2'>
      {/* Title with Options Icon */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-blue-500 rounded-sm'></div>
          <h3 className='text-gray-700 font-medium'>{title}</h3>
        </div>
        <FaEllipsisV className='text-gray-400 cursor-pointer hover:text-gray-600' />
      </div>

      {/* Value and Change */}
      <div>
        <p className='text-2xl font-bold'>{value}</p>
        <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? `+${change}%` : `${change}%`}
        </p>
      </div>
    </div>
  )
}

export default Card
