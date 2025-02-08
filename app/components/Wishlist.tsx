"use client";
import { useWishlistStore } from "../store/wishlistStore";
import ProductCard from "./ProductCard";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlistStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeFromWishlist(product._id)}
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
