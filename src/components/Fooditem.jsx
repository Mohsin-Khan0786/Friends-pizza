import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './Fooddata/FoodData'
const Fooditem = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
      {FoodData.map((food)=>{
        return <FoodCard key={food.id}
        img={food.img}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
         />

      })}
        
    </div>
  )
}

export default Fooditem