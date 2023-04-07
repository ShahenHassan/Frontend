import React from "react";
import FoodsCard from "./FoodsCard";
import {detailProducts} from "../../data/detailProducts.js";

const Food = () => {
  console.log(detailProducts[0]);
  return (
    <div className="flex flex-wrap">
      {detailProducts.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <FoodsCard product={product} />
        </div>
      ))}
    </div>
  );
};



export default Food;
