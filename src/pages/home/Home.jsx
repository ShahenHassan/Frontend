import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import { products } from "../../data/products.js";
import extrapic from "../../components/image/extrapic.jpg";
function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <img
              src={product.imageUrl}
              className="w-100 h-[200px]"
              alt={product.name}
            />
            <a
              href={`/product/${product.category}`}
              className="block mt-4 text-blue-500 hover:text-blue-700"
            >
              View all {product.category}
              {/* <div className=" View all">
                <Link to={"/product.category/Food/" + id}> View all</Link>
              </div> */}
            </a>
          </div>
        ))}
      </div>
      <div>
        <img
          src={extrapic}
          alt="extrapic "
          className="w-full h-[200px] object-cover"
        />
      </div>
    </>
  );
}
export default Home;
