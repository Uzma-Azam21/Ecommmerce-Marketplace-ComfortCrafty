"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaTruck, FaHome, FaShoppingBag } from "react-icons/fa";

interface OrderDetails {
  total: number;
  paymentMethod: string;
  deliveryDate: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  contactInfo: {
    email: string;
    phone: string;
  };
  cart: {
    _id: string;
    imageUrl: string;
    title: string;
    quantity: number;
    price: number;
  }[];
}

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  useEffect(() => {
    const details = localStorage.getItem("orderDetails");
    if (details) {
      const parsedDetails = JSON.parse(details);
      setOrderDetails(parsedDetails);

      // Calculate Delivery Charges
      let charge = 7.99; // Default delivery charge
      if (parsedDetails.total >= 500) {
        charge = 0; // Free Delivery for orders above $500
      } else if (parsedDetails.total >= 200) {
        charge = 3.99; // 50% off for orders above $200
      }
      setDeliveryCharge(charge);
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-xl font-medium">
          No order details found.
        </p>
      </div>
    );
  }

  const finalTotal = orderDetails.total + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Order Placed Message */}
        <div className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center gap-3 mb-6 shadow-md">
          <FaCheckCircle className="text-green-600 text-2xl" />
          <p className="text-lg font-semibold">
            Thank you! Your order has been placed successfully.
          </p>
        </div>

        {/**Order Details Section** */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <p>
              <strong>Order Total:</strong> ${orderDetails.total.toFixed(2)}
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              {orderDetails.paymentMethod === "card"
                ? "Credit/Debit Card"
                : "Cash on Delivery"}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {orderDetails.deliveryDate}{" "}
              <FaTruck className="inline text-blue-500 ml-1" />
            </p>
            <p>
              <strong>Delivery Charges:</strong>{" "}
              {deliveryCharge > 0
                ? `$${deliveryCharge.toFixed(2)}`
                : "FREE &#128666;"}
            </p>
            <p className="text-lg font-bold">
              <strong>Final Total:</strong> ${finalTotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/**Shipping Address Section** */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaHome /> Shipping Address
          </h2>
          <p>
            {orderDetails.address.street}, {orderDetails.address.city},{" "}
            {orderDetails.address.country}
          </p>
          <p>
            <strong>Contact:</strong> {orderDetails.contactInfo.email},{" "}
            {orderDetails.contactInfo.phone}
          </p>
        </div>

        {/**Ordered Products Section** */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaShoppingBag /> Ordered Products
          </h2>
          <div className="space-y-4">
            {orderDetails.cart.map((item) => (
              <div key={item._id} className="flex items-center border-b pb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
                <div className="ml-4">
                  <p className="text-md font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="ml-auto text-md font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/**Back to Home Button** */}
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            className="bg-[#007580] text-white px-6 py-2 rounded-lg text-lg hover:bg-[#005f60] transition"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
