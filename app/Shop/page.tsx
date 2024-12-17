import Image from "next/image";
import React from "react";

const products = [
  { id: 1, title: "Library Stool Chair", cost: 200, imgSrc: "/p6.png" },
  { id: 2, title: "Library Stool Chair", cost: 184, imgSrc: "/p1.png" },
  { id: 3, title: "Library Stool Chair", cost: 235, imgSrc: "/c1.png" },
  { id: 4, title: "Library Stool Chair", cost: 165, imgSrc: "/p3.png" },
  { id: 5, title: "Library Stool Chair", cost: 220, imgSrc: "/c3.png" },
];

const SingleProduct = () => {
  return (
    <main>
      {/* Product Details Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 px-6 sm:px-12 md:px-32 lg:px-48 py-12">
        {/* Image Container */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/p2.png"
              alt="Library Stool Chair"
              layout="fill"
              className="rounded-lg object-contain transition-transform duration-300 hover:scale-110"
              quality={90}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
          <h1
            className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
            style={{ color: "#272343", fontWeight: 700 }}
          >
            Library Stool Chair
          </h1>
          {/* Updated Price Button */}
          <button
            className="block w-full md:w-auto px-6 py-2 text-white font-medium rounded-full transition duration-300 mb-4"
            style={{ backgroundColor: "#029FAE" }}
          >
            $200 USD
          </button>
          <p
            className="text-gray-700 leading-relaxed mb-6 text-center md:text-left"
            style={{ color: "#272343", fontWeight: 400 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          {/* Updated Add to Cart Button */}
          <button
            className="block w-full md:w-auto px-6 py-2 text-white font-medium rounded-full transition duration-300"
            style={{ backgroundColor: "#029FAE" }}
          >
            Add to Cart
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-6 sm:px-12 md:px-32 lg:px-48 py-12">
        <header className="flex justify-between items-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-800"
            style={{ color: "#000000", fontWeight: 700 }}
          >
            Featured Products
          </h2>
          <button className="text-gray-600 hover:text-gray-800 transition duration-300">
            View All
          </button>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map(({ id, title, cost, imgSrc }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={title}
                  layout="fill"
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                  quality={90}
                />
              </div>
              <div className="p-4">
                <h3
                  className="font-inter text-gray-800 font-medium mb-2"
                  style={{ color: "#272343", fontWeight: 400 }}
                >
                  {title}
                </h3>
                <p
                  className="font-inter text-green-600 font-bold"
                  style={{ color: "#000000", fontWeight: 700 }}
                >
                  ${cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
