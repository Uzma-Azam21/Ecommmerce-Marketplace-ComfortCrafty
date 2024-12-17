"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineHeart, HiOutlineTrash } from "react-icons/hi";

interface Product {
  id: number;
  name: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 shadow rounded-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Image
          src={product.image}
          alt={product.name}
          className="rounded-lg"
          width={150}
          height={150}
          sizes="(max-width: 768px) 100px, 150px"
        />
        <div>
          <h3 className="font-semibold text-lg sm:text-xl">{product.name}</h3>
          <p className="text-sm sm:text-base text-[#757575] mt-1">
            {product.description}
          </p>
          <div className="text-xs sm:text-sm text-[#757575] mt-2">
            <p>Size: {product.size}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
          <div className="flex gap-4 mt-4 text-gray-800">
            <HiOutlineHeart className="text-xl sm:text-2xl cursor-pointer hover:text-red-500" />
            <HiOutlineTrash className="text-xl sm:text-2xl cursor-pointer hover:text-gray-500" />
          </div>
        </div>
      </div>
      <div className="text-lg sm:text-xl font-semibold mt-4 sm:mt-0">
        MRP: ${product.price}
      </div>
    </div>
  );
};

const SummarySection: React.FC<{ total: number }> = ({ total }) => {
  return (
    <div className="lg:w-[400px] h-fit rounded-lg border text-gray-900 shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-[#111111]">Subtotal</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#111111]">Estimated Delivery & Handling</span>
          <span className="text-cyan-600">Free</span>
        </div>
        <div className="h-[1px] w-full bg-gray-200" />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full mt-6 h-12 text-base bg-cyan-600 hover:bg-cyan-700 text-white rounded-full inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
        Member Checkout
      </button>
    </div>
  );
};

export default function Cart() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Library Stool Chair",
      description: "Asthen Slate / Cobait Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/c3.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      description: "Asthen Slate / Cobait Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/p3.png",
    },
  ]);

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mx-auto p-4 md:p-8 lg:px-24 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
        <div className="w-full lg:w-3/5">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Bags</h1>
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <SummarySection total={total} />
      </div>
    </div>
  );
}
