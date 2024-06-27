import React from 'react'

const CategoreyMenu = () => {
  return (
    <div className='ml-6'>
        <h3 className='text-xl font-semibold'>Find Flavorful Bites</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden'>
            <button  className='px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white'>All</button>
            <button  className='px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white'>Pizza</button>
            <button  className='px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white'>Burger</button>
            <button  className='px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white'>Sandwich</button>
            <button  className='px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white'>Pasta</button>
        </div>
        
    </div>
  )
}

export default CategoreyMenu