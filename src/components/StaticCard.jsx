import React from 'react'
import img1 from '../assets/images/img1.avif'

const StaticCard = () => {
  return (
    <div className='h-1/2 flex items-center justify-center overflow-hidden rounded-2xl relative'>
      <img
        src={img1}
        alt='Static Card'
        className='w-full h-full object-cover'
      />
      <div className=''>
        <h1 className='absolute text-white left-4 top-6 text-2xl '>
          Want some EXTRA <br /> Money?
        </h1>
        <p className='text-xs absolute text-blue-100 left-4 top-22'>
          Lorem Ipsum is a placeholder text used in design <br /> and
          publishing.{' '}
        </p>
      </div>
      <button className='w-[200px] h-[50px] bg-white rounded-xl text-blue-600 font-bold absolute left-4 top-32'>
        Referral Program
      </button>
    </div>
  )
}

export default StaticCard
