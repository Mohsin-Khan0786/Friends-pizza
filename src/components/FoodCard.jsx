import React from "react";
import { MdStarRate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, desc, img, rating, price,handletoast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg">
      <img
        src={img}
        alt=""
        className="w-[auto] h-[130px] hover:scale-110 cursor-grab transition-all duration-500"
      />
      <div className="text-sm flex justify-normal">
        <h2>{name}</h2>
        <span className="text-green-500">${price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          {rating}
          <MdStarRate className="text-yellow-500" />
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm" onClick={() => {
          dispatch(addCart({ id, name, price, img, rating, qty: 1 }));
          handletoast(name);
        }}>

          Add To Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
