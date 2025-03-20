import React from 'react'
import ProductList from './ProductList'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import StaticCard from './StaticCard'
import Card from './Card'
import Chart from './Chart'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='w-4/5 h-full flex flex-col bg-violet-400'>
        <Navbar />
        <div className='flex'>
          {/* staticcard and 2 cards */}
          <div className='flex flex-col bg-blue-500'>
            <StaticCard />
            <div className='flex bg-yellow-100'>
              <Card />
              <Card />
            </div>
          </div>
          <ProductList />
        </div>
        <div className='flex bg-orange-300'>
            {/* chart card */}
            <Chart />
            <Card />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
