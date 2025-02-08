"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cartStore";
import { FaCreditCard, FaTruck, FaRegCheckCircle } from "react-icons/fa";

const Checkout = () => {
  const { cart, getTotal } = useCartStore();
  const { total } = getTotal();
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({ email: "", phone: "" });
  const [address, setAddress] = useState({ country: "", city: "", street: "" });
  const [cardError, setCardError] = useState("");
  const router = useRouter();

  //  **Calculate Delivery Charges**
  const getDeliveryCharge = () => {
    if (total >= 500) return 0; // Free delivery
    if (total >= 200) return 3.99; // 50% Off
    return 7.99; // Standard charge
  };

  const deliveryCharge = getDeliveryCharge();
  const finalTotal = total + deliveryCharge;

  //  **Validate Card Details**
  const validateCardDetails = () => {
    const cleanNumber = cardDetails.number.replace(/\s+/g, "").trim();
    const cleanExpiry = cardDetails.expiry.trim();
    const cleanCvv = cardDetails.cvv.trim();

    if (
      cleanNumber !== "4242424242424242" ||
      cleanExpiry !== "12/34" ||
      cleanCvv !== "123"
    ) {
      setCardError(
        "Please use the demo card details: 4242 4242 4242 4242, 12/34, 123"
      );
      return false;
    }
    return true;
  };

  // **Handle Payment Submission**
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "card" && !validateCardDetails()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      alert("🎉 Payment Successful!");
      localStorage.setItem(
        "orderDetails",
        JSON.stringify({
          cart,
          total: finalTotal,
          address,
          paymentMethod,
          contactInfo,
          deliveryCharge,
          deliveryDate: getEstimatedDeliveryDate(),
        })
      );
      setIsSubmitting(false);
      localStorage.removeItem("cart");
      router.push("/order-confirmation");
    }, 2000);
  };

  // **Estimated Delivery Date**
  const getEstimatedDeliveryDate = () => {
    const minDays = 3;
    const maxDays = 7;
    const deliveryDate = new Date();
    deliveryDate.setDate(
      deliveryDate.getDate() +
        Math.floor(Math.random() * (maxDays - minDays + 1) + minDays)
    );
    return deliveryDate.toDateString();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        {/*  Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <input
            type="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, phone: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            required
          />
        </div>

        {/*  Shipping Address */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <input
            type="text"
            placeholder="Country"
            value={address.country}
            onChange={(e) =>
              setAddress({ ...address, country: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3"
            required
          />
          <input
            type="text"
            placeholder="Street Address"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`w-1/2 p-3 rounded-lg text-sm flex items-center justify-center gap-2 ${paymentMethod === "card" ? "bg-[#007580] text-white" : "bg-gray-200"}`}
            >
              <FaCreditCard /> Credit/Debit Card
            </button>
            <button
              onClick={() => setPaymentMethod("cash")}
              className={`w-1/2 p-3 rounded-lg text-sm flex items-center justify-center gap-2 ${paymentMethod === "cash" ? "bg-[#007580] text-white" : "bg-gray-200"}`}
            >
              <FaTruck /> Cash on Delivery
            </button>
          </div>
        </div>

        {/* Card Details Form */}
        {paymentMethod === "card" && (
          <form
            onSubmit={handlePayment}
            className="bg-white p-6 rounded-lg shadow-md mb-6"
          >
            <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
            <p className="text-sm text-gray-600 mb-4">
              Use the demo details: <br />
              <strong>4242 4242 4242 4242, 12/34, 123</strong>
            </p>
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3"
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              required
            />
            {cardError && (
              <p className="text-sm text-red-500 mt-2">{cardError}</p>
            )}
          </form>
        )}

        {/* Place Order Button */}
        <button
          onClick={handlePayment}
          disabled={isSubmitting}
          className={`w-full p-3 rounded-lg text-lg flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#007580] text-white"}`}
        >
          <FaRegCheckCircle />
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
