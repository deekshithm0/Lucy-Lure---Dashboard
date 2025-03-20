import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'

const Card = ({ title, value1, value2, change1, change2, showButton }) => {
  return (
    <div className='w-full h-full p-4 bg-white shadow-md rounded-lg flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-blue-500 rounded-sm'></div>
          <h3 className='text-gray-700 font-medium'>{title}</h3>
        </div>
        <FaEllipsisV className='text-gray-400 cursor-pointer hover:text-gray-600' />
      </div>

      <div className='flex justify-between px-2'>
        <div>
          <p className='text-2xl font-bold'>{value1}</p>
          <p
            className={`text-sm ${
              change1 >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change1 >= 0 ? `+${change1}%` : `${change1}%`}
          </p>
        </div>

        {value2 && (
          <div>
            <p className='text-2xl font-bold'>{value2}</p>
            <p
              className={`text-sm ${
                change2 >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {change2 >= 0 ? `+${change2}%` : `${change2}%`}
            </p>
          </div>
        )}
      </div>

        {showButton && (
            <button className='h-[] mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Withdraw Money</button>
        )}

    </div>
  )
}

export default Card
