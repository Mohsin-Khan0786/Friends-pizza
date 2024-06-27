import React, { useState } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector(state => state.cart.cart);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className="flex justify-between items-center my-3">
          <span className='text-xl font-bold text-gray-800 ml-1'>My Order</span>
          <RiCloseCircleLine onClick={() => setActiveCart(!activeCart)} className='text-gray-600 hover:text-red-400 cursor-pointer mr-2' />
        </div>
        {
          cartItems.map((item) => {
            return <Itemcard key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              rating={item.rating}
              desc={item.desc}
              qty={item.qty}
            />
          })
        }
        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>
            Items: {cartItems.length}
          </h3>
          <h3 className='font-semibold text-gray-800'>
            Total Amount: ${cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}
          </h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button className='bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
      </div>
      <FaCartShopping onClick={() => setActiveCart(!activeCart)} className='rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4' />
    </>
  );
};

export default Cart;
