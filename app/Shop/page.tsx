import Image from 'next/image';
import React from 'react';

const featuredProducts = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 200,
    image: '/p6.png'
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 184,
    image: '/p1.png'
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 235,
    image: '/c1.png'
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 165,
    image: '/p3.png'
  },
  {
    id: 5,
    name: 'Library Stool Chair',
    price: 220,
    image: '/c3.png'
  }
];

export default function ProductPage() {
  return (
    <div>
      {/* Existing Card Component */}
      <div className="flex flex-col md:flex-row md:px-32 lg:px-48 px-6 sm:px-12 md:py-12 space-y-6 md:space-y-0 md:space-x-6 items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <div className="relative w-full h-64 md:h-96">
            <Image
              className="object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
              src="/p2.png"
              alt="Library Stool Chair"
              layout="fill"
              quality={90}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg text-gray-800 flex flex-col justify-between items-center md:items-start transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-2xl md:text-4xl font-medium md:font-semibold mb-4 text-center md:text-left">
            Library Stool Chair
          </h1>
          <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition duration-300 mb-4">
            200 $ USD
          </button>
          <p className="text-center md:text-left leading-relaxed mb-6">
            Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum a veritatis pariatur.
          </p>
          <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300">
            ADD To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="px-6 sm:px-12 md:px-32 lg:px-48 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            FEATURED PRODUCTS
          </h2>
          <button className="text-gray-600 hover:text-gray-800 transition duration-300">
            View all
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transform transition-all duration-300 hover:scale-110"
                  quality={90}
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-medium mb-2">{product.name}</h3>
                <p className="text-emerald-500 font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

