import React, { useState } from "react";
import { foods } from "../../data/foods.js";

const Food = () => {
  const [foodd, setFood] = useState(foods);

  return (
    <>
      {foodd.map((food) => (
        <div className="inline-flex mt-8">
          <div
            className="bg-white  rounded-lg shadow-lg p-6 h-[379px] mb-4"
            key={food.id}
          >
            <h2 className="text-lg font-semibold text-red-500">{food.name}</h2>
            <p className="text-gray-600">price:${food.price}</p>
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-[200px]  mt-4 "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Food;


























