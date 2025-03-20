import React from 'react'
import {
  FaBoxes,
  FaChartPie,
  FaClock,
  FaMoneyBill,
  FaFileInvoice,
  FaCog
} from 'react-icons/fa'

const menuItems = [
  { name: 'Overview', icon: <FaChartPie /> },
  { name: 'Products', icon: <FaBoxes /> },
  { name: 'Campaigns', icon: <FaClock /> },
  { name: 'Schedules', icon: <FaClock /> },
  { name: 'Payouts', icon: <FaMoneyBill /> },
  { name: 'Statements', icon: <FaFileInvoice /> },
  { name: 'Settings', icon: <FaCog /> }
]

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
              {item.icon} {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
