import React from "react";
import { Link } from "react-router-dom";
import { detailProducts } from "../../data/detailProducts.js";
import Food from "../product/Food.jsx";

const FoodsCard = ({ product }) => {
  const { imageUrl, name,  price } = product;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 font-bold mb-2">${price}</p>
        <div className="flex flex-wrap">
          {detailProducts.map((product) => (
            <span
              key={product}
              className="bg-gray-200 rounded-full py-1 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {product}
            </span>
          ))}
          <div className=" View all">
            <Link to={Food}> View all</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
