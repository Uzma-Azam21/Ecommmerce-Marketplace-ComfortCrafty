import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

const FeaturedProducts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 pl-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[
          { src: "/p1.png" },
          { src: "/p2.png" },
          { src: "/p3.png" },
          { src: "/p4.png" },
        ].map((product, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="w-full h-64 overflow-hidden">
              <Image
                src={product.src}
                alt={`Product ${i}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details (Name and Price) */}
            <div className="flex justify-between w-full px-4 py-2">
              <div className="flex flex-col items-start">
                <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                <span className="text-black text-lg font-bold">$20</span>
              </div>
              <div className="flex items-center">
                <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
