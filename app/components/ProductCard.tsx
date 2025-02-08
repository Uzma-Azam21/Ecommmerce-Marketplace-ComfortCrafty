"use client";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "../store/cartStore";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  inventory: number;
  priceWithoutDiscount?: number; //  Original price (for sales)
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-gray-400 transform transition-transform duration-300">
      <Link href={`/product/${product._id}`} passHref>
        <div className="cursor-pointer">
          {/* Product Image */}
          <div className="relative w-full h-64 overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span>No Image Available</span>
              </div>
            )}

            {/*  Badge (New / Sales) */}
            {product.badge && (
              <div
                className="absolute top-2 right-2 text-white px-2 py-1 rounded-full text-sm"
                style={{
                  backgroundColor:
                    product.badge === "Sales"
                      ? "green"
                      : product.badge === "New"
                        ? "orange"
                        : "red",
                }}
              >
                {product.badge}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex justify-between w-full px-4 py-2">
            <div className="flex flex-col">
              <h2 className="font-medium text-lg">{product.title}</h2>

              {/* Show Discounted Price if on Sale */}
              {product.badge === "Sales" && product.priceWithoutDiscount ? (
                <p className="text-md font-semibold text-red-500">
                  <span className="line-through text-gray-500">
                    ${product.priceWithoutDiscount}
                  </span>
                  <span className="ml-2">${product.price}</span>
                </p>
              ) : (
                <p className="text-md font-bold">${product.price}</p>
              )}

              {/*  Inventory Status */}
              <span className="text-sm text-gray-500">
                {product.inventory > 0
                  ? `${product.inventory} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <div className="flex items-center">
              <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
