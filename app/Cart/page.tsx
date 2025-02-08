// app/cart/page.tsx
"use client";
import { useCartStore } from "../store/cartStore";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getTotal } = useCartStore();
  const { subtotal, discount, total, savings } = getTotal();
  const router = useRouter(); // Initialize useRouter

  // Handle Proceed to Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to proceed to checkout.");
      return;
    }
    router.push("/checkout"); // Redirect to checkout page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="border p-4 rounded-lg flex flex-col"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                <p className="text-md font-bold">${item.price}</p>
                <p className="text-sm text-gray-700">
                  Quantity: {item.quantity}
                </p>
                <p className="text-md font-semibold mt-2">
                  {item.inventory > 0 ? (
                    <span className="text-green-600 font-bold">In Stock</span>
                  ) : (
                    <span className="text-red-600 font-bold">Out of Stock</span>
                  )}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/*Total Billing Section */}
          <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <p className="text-md text-gray-700">
              Subtotal:{" "}
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-md text-green-600">
              Discount:{" "}
              <span className="font-semibold">-${discount.toFixed(2)}</span>
            </p>
            <p className="text-lg font-bold mt-2">
              Total: <span className="text-black">${total.toFixed(2)}</span>
            </p>

            {savings > 0 && (
              <p className="text-sm text-green-600 font-semibold mt-2">
                 You saved ${savings.toFixed(2)}!
              </p>
            )}

            {/*Proceed to Checkout Button */}
            <button
              onClick={handleCheckout} 
              className="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Proceed to Checkout
            </button>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="mt-2 w-full px-6 py-2 bg-gray-600 text-white rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
