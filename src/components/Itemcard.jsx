import React from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { removeCart,IncrementQty,DecrementQty } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Itemcard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=>{dispatch(removeCart({id ,img ,name,price,qty}))
       toast(`${name} Removed!`, {
        icon: '👋',
      });
    
      }
     
    } className="absolute right-7 text-gray-600 cursor-pointer" />
      <img src={img} className="w-[50px] h-[50px]" alt={name} />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus onClick={()=> qty>=1 ? dispatch(IncrementQty({id})):(qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition ease-linear cursor-pointer" />
            <span>{qty}</span>
            <FaMinus onClick={()=>
              qty>1 ?
              dispatch(DecrementQty({id})): (qty=0) } className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
