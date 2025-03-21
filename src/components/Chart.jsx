import React from 'react'
import { data } from '../data/Data'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const Chart = () => {
  return (
    <div className='w-4/6 bg-white rounded-2xl shadow-md flex flex-col gap-2'>
      <div className='flex items-center gap-2 pl-4'>
        <div className='w-3 h-3 bg-blue-500 rounded-sm'></div>
        <h3 className='text-gray-500'>Latest Downloads</h3>
      </div>
      <div className='flex-grow h-[150px] w-full'>
        <ResponsiveContainer width='95%' height='100%'>
          <LineChart data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Line
              type='monotone'
              dataKey='value'
              stroke='#3b82f6'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
