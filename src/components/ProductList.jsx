import React from 'react'
import { FaAngleRight } from 'react-icons/fa'


const products = [
  { name: 'Niky - Icon 3D Pack', category: '3D Illustrations', image: '/arrow.png' },
  { name: 'Lika - 3D Abstract', category: '3D Illustrations', image: '/arrow.png' },
  { name: 'Cube 3D', category: '3D Illustrations',image: '/arrow.png' },
  { name: 'Heady - 3D Head', category: '3D Illustrations', image: '/arrow.png' },
  { name: 'Astro Illustrations', category: 'Illustrations', image: '/arrow.png' }
]

const ProductList = () => {
  return (
    <div className='h-full bg-white shadow rounded-2xl p-4'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-blue-500 rounded-sm'></div>
        <h3 className='text-gray-700 font-medium'>Top Products</h3>
      </div>
      <ul className='flex flex-col gap-2'>
        {products.map((product, index) => (
          <li
            key={index}
            className=' py-2 flex items-center gap-4 justify-between'
          >
            <div className='flex gap-4'>
              <img src={product.image} alt={product.name} className='w-9 h-9 bg-blue-100 rounded-md' />
              <div>
                <h4 className='text-sm font-semibold'>{product.name}</h4>
                <p className='text-xs text-gray-500'>{product.category}</p>
              </div>
            </div>
            <FaAngleRight />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
