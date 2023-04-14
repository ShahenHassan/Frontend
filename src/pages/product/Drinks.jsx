import React, { useState } from "react";
import {drinks} from "../../data/drinks.js";

const Drinks = () => {
  const [drinkk, setDrinkk] = useState(drinks);

  return (
    <>
      {drinkk.map((drink) => (
        <div className="inline-flex mt-8">
          <div
            className="bg-white  rounded-lg shadow-lg p-6 h-[379px] mb-4"
            key={drink.id}
          >
            <h2 className="text-lg font-semibold text-red-500">{drink.name}</h2>
            <p className="text-gray-600">price:${drink.price}</p>
            <img
              src={drink.imageUrl}
              alt={drink.name}
              className="w-[200px]  mt-4 "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Drinks;





