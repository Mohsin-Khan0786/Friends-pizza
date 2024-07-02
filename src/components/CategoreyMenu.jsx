import React, { useState, useEffect } from "react";
import FoodData from "./Fooddata/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CartegoreySlice";

const CategoreyMenu = () => {
  const [catogries, setcatgories] = useState([]);
  const listUniqueCategories = () => {
    const uniquecatgories = [...new Set(FoodData.map((item) => item.category))];
    setcatgories(uniquecatgories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const SelectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find Flavorful Bites</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white ${
            SelectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {catogries.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg  hover:bg-green-500 hover:text-white ${
              SelectedCategory === "All" && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoreyMenu;
