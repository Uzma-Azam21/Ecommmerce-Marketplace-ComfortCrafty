"use client";
import { useState, useEffect } from "react";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import { fetchProductById } from "../../../sanity/lib/fetchProductById";
import Image from "next/image";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCartStore();
  const { addToWishlist } = useWishlistStore();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getProduct() {
      if (typeof params.id === "string") {
        const data = await fetchProductById(params.id);
        setProduct(data);
      }
    }
    getProduct();
  }, [params.id]);

  if (!product) return <p>Product not found</p>;

  // Calculate Discount Price
  const discountAmount =
    product.badge === "Sales"
      ? product.priceWithoutDiscount - product.price
      : 0;
  const finalPrice =
    product.badge === "Sales"
      ? product.price
      : product.priceWithoutDiscount || product.price;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          {/* Show Discounted Price */}
          {product.badge === "Sales" ? (
            <div className="text-lg font-semibold text-red-500">
              <span className="line-through text-gray-500">
                ${product.priceWithoutDiscount}
              </span>
              <span className="ml-2">${product.price}</span>
            </div>
          ) : (
            <p className="text-lg font-bold">${product.price}</p>
          )}

          {/* Discount Savings Message */}
          {discountAmount > 0 && (
            <p className="text-sm text-green-600 font-semibold">
              You saved ${discountAmount}!
            </p>
          )}

          {/* Stock Status */}
          <p className="text-md font-semibold mt-2">
            {product.inventory > 0 ? (
              <span className="text-green-600 font-bold">
                In Stock: {product.inventory} available
              </span>
            ) : (
              <span className="text-red-600 font-bold">Out of Stock</span>
            )}
          </p>

          {/*  Description */}
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/*  Dimensions */}
          {product.dimensions && (
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Dimensions:</span>
              {product.dimensions.height}" H × {product.dimensions.width}" W ×{" "}
              {product.dimensions.depth}" D
            </p>
          )}

          {/* Quantity Selector */}
          <div className="mt-4">
            <label htmlFor="quantity" className="font-semibold text-gray-700">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            >
              {Array.from(
                { length: Math.min(10, product.inventory) },
                (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                )
              )}
            </select>
          </div>

          {/*  Add to Cart Button */}
          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md"
          >
            Add to Cart
          </button>

          {/* Add to Wishlist Button */}
          <button
            onClick={() =>
              addToWishlist({
                ...product,
                dimensions: product.dimensions
                  ? JSON.stringify(product.dimensions)
                  : null,
              })
            }
            className="mt-4 ml-2 px-6 py-2 bg-gray-600 text-white rounded-md"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
