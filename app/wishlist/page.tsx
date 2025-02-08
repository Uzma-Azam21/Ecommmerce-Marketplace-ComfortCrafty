"use client"
import { useWishlistStore } from "../store/wishlistStore";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useWishlistStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
