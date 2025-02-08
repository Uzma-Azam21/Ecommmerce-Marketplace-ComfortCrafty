"use client";
import { useCartStore } from "../store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((product) => (
            <div
              key={product._id}
              className="relative p-4 border rounded-md shadow-md bg-white"
            >
              <Link href={`/products/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </Link>

              <button
                onClick={() => removeFromCart(product._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
