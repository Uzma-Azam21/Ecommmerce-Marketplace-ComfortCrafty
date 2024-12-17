"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, AlertCircle, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Middle Section */}
      <div className="w-full bg-[#F0F2F3]">
        <div className="max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[300px] py-5">
          <div className="flex justify-between items-center">
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
            {/* Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
                <span className="text-[14px] text-[#272343]">Cart</span>
              </div>
              <div className="bg-[#007580] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full bg-white border-b border-[#E1E3E5]">
        <div className="max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[300px] py-3">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
              >
                Home
              </Link>
              <Link
                href="/Shop"
                className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
              >
                Shop
              </Link>
              <Link
                href="/Products"
                className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
              >
                Product
              </Link>
              <Link
                href="/pages"
                className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
              >
                Pages
              </Link>
              <Link
                href="/Cart"
                className="text-[14px] font-medium text-[#007580] hover:text-[#272343]"
              >
                Cart
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
            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-4 ml-8">
              <span className="text-[14px] text-[#636270]">Contact:</span>
              <span className="text-[14px] font-medium text-[#272343] whitespace-nowrap">
                (808) 555-0111
              </span>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#272343]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              <Link
                href="/"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Home
              </Link>
              <Link
                href="/Shop"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Shop
              </Link>
              <Link
                href="/Products"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Product
              </Link>
              <Link
                href="/pages"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Pages
              </Link>
              <Link
                href="/Cart"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Cart
              </Link>
              <Link
                href="/About"
                className="block text-[14px] font-medium text-[#007580]"
              >
                About
              </Link>
              <Link
                href="/Contact"
                className="block text-[14px] font-medium text-[#007580]"
              >
                Contact
              </Link>
              <Link
                href="/FAQ"
                className="block text-[14px] font-medium text-[#007580]"
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
      </div>
    </nav>
  );
}
