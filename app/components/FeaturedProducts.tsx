"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { fetchFeaturedProducts } from "@/sanity/lib/fetchFeature"; // Import correct function
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  inventory: number;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchFeaturedProducts(); // Fetch only featured products
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-48 py-8 max-w-screen-2xl m-auto">
      <h1 className="text-2xl font-bold mb-4 pl-4">Featured Products</h1>

      {/* Display Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-gray-400 transform transition-transform duration-300 hover:shadow-1xl"
          >
            {/* <Link href={`/products/${product._id}`}> */}
            <Link href={`/product/${product._id}`}>
              <div className="w-full h-64 overflow-hidden relative">
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

                {/* Badge */}
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

              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">{product.title}</h2>
                  <span className="text-black text-lg font-bold">
                    ${product.price}
                  </span>

                  {/* Inventory */}
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
