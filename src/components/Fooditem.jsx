import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "./Fooddata/FoodData"; // Correct the path if necessary
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditem = () => {
  const category = useSelector((state) => state.category.category); // Ensure correct spelling and state access
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All")
            return food.name.toLowerCase().includes(search.toLowerCase());
          else
            return (
              food.category === category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              img={food.img}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Fooditem;
