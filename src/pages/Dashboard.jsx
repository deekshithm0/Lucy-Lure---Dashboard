import React from 'react'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StaticCard from '../components/StaticCard'
import Card from '../components/Card'
import Chart from '../components/Chart'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='w-4/5 h-full flex flex-col px-4 gap-4 '>
        <Navbar />
        <div className='w-full h-4/7 flex gap-4 '>
          {/* staticcard and 2 cards */}
          <div className='w-4/6 flex flex-col gap-4'>
            <StaticCard />
            <div className='w-full h-2/5 flex gap-6 mt-6'>
              <Card title='Total Products' value='1,134' change={10} />
              <Card title='Total Earnings' value='$4,231' change={-22} />
            </div>
          </div>
          <div className="w-2/6 h-full">
            <ProductList />
          </div>
        </div>
        <div className='w-full h-2/7 flex flex-row gap-4'>
          {/* chart card */}
          <Chart />
          <div className='w-2/6 h-full flex items-center justify-center'>
            <Card title='Balances' value='$537' change={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
