import React from "react";
import {products} from "../../data/products.js";
function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <a
            href={`/product/${product.id}`}
            className="block mt-4 text-blue-500 hover:text-blue-700"
          >
            View all Product
          </a>
        </div>
      ))}
    </div>
  );
}
export default Home;
