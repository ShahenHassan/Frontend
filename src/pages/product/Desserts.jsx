import React, { useState } from "react";
import { desserts } from "../../data/desserts.js";

const Desserts = () => {
  const [dessertt, setDessert] = useState(desserts);

  return (
    <>
      {dessertt.map((dessert) => (
        <div className="inline-flex mt-8">
          <div
            className="bg-white  rounded-lg shadow-lg p-6 h-[379px] mb-4"
            key={dessert.id}
          >
            <h2 className="text-lg font-semibold text-red-500">
              {dessert.name}
            </h2>
            <p className="text-gray-600">price:${dessert.price}</p>
            <img
              src={dessert.imageUrl}
              alt={dessert.name}
              className="w-[200px]  mt-4 "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Desserts;
