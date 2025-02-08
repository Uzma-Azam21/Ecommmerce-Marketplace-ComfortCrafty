"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ShoppingCart,
  AlertCircle,
  ChevronDown,
  Menu,
  Heart,
  X,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";
import Search from "./SearchBar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartStore();
  const { wishlist } = useWishlistStore();

  return (
    <nav className="w-full max-w-[1920px] bg-white">
      {/* Top Header Section */}
      <div className="w-full bg-[#272343]">
        <div className="max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[300px] py-3">
          <div className="flex justify-between items-center">
            {/* Left Side */}

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 12.586l7.793-7.793a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-[13px] text-white">
                Free Shipping on all orders over $50
              </p>
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[13px] text-white">ENG</span>
                <ChevronDown className="h-4 w-4 text-white" />
              </div>
              <span className="text-[13px] text-white">Faqs</span>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-4 w-4 text-white" />
                <span className="text-[13px] text-white">Need Help</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section (Logo + Search + Icons) */}
      <div className="w-full bg-[#F0F2F3]">
        <div className="max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[300px] py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo Icon.png"
              alt="Comforty Logo"
              width={40}
              height={40}
            />
            <span className="text-[26px] font-medium text-[#272343]">
              Comforty
            </span>
          </Link>

          {/*  Search Bar (Visible on Desktop) */}
          <div className="hidden md:flex flex-grow mx-8">
            <Search />
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-5">
            <Link href="/wishlist" className="relative flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#272343]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-[#272343]" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#272343]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Links Section (Always Visible on Desktop) */}
      <div className="w-full bg-white border-b border-[#E1E3E5]">
        <div className="max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[300px] py-3 flex justify-between items-center">
          {/* Always Show Navigation Links on Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
            >
              Products
            </Link>
            <Link
              href="/About"
              className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
            >
              Contact
            </Link>
            <Link
              href="/FAQ"
              className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button (Already Implemented Above) */}
        </div>

        {/* Mobile Menu (Links & Search Bar) */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center px-4 py-4 bg-white border-b border-[#E1E3E5]">
            {/* Show Search Bar in Mobile Navbar */}
            <div className="w-full mb-4">
              <Search />
            </div>

            {/* Navigation Links (For Mobile) */}
            <Link
              href="/"
              className="block text-[14px] font-medium text-[#007580] mb-2"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="block text-[14px] font-medium text-[#007580] mb-2"
            >
              Products
            </Link>
            <Link
              href="/About"
              className="block text-[14px] font-medium text-[#007580] mb-2"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="block text-[14px] font-medium text-[#007580] mb-2"
            >
              Contact
            </Link>
            <Link
              href="/FAQ"
              className="block text-[14px] font-medium text-[#007580] mb-2"
            >
              FAQ
            </Link>

            <div className="pt-4 border-t border-[#E1E3E5]">
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#636270]">Contact:</span>
                <span className="text-[14px] font-medium text-[#272343]">
                  (808) 555-0111
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
