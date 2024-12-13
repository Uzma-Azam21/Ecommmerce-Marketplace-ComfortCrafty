'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[1920px] h-auto sm:h-[203px] bg-white">
      {/* Top Navbar Section */}
      <div className="w-full max-w-[1920px] h-auto sm:h-[45px] bg-[#272343] flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] py-2 sm:py-[14px]">
        {/* Left Section: Shipping */}
        <div className="flex items-center gap-2 opacity-70 mb-2 sm:mb-0">
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
          <p className="text-[13px] font-normal text-white">
            Free Shipping on all orders over $50
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6 opacity-70">
          {/* ENG Dropdown */}
          <div className="flex items-center gap-1">
            <p className="text-[13px] font-normal text-white">ENG</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-[13px] font-normal text-white">FAQs</p>
        </div>
      </div>

      {/* Middle Navbar Section */}
      <div className="w-full max-w-[1920px] h-auto sm:h-[84px] py-4 sm:py-[20px] px-4 sm:px-8 md:px-16 lg:px-[300px] flex justify-between items-center bg-[#F0F2F3]">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/Logo icon.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <p className="text-[26px] font-medium text-[#272343]">Comforty</p>
        </div>
        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#272343] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] py-4 sm:py-[14px] bg-[#FFFFFF] shadow-[0px_1px_0px_0px_#E1E3E5]`}
      >
        {/* Left Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[32px] mb-4 sm:mb-0">
          <Link href="/" className="text-[14px] font-medium text-[#007580]">
            Home
          </Link>
          <Link href="/About" className="text-[14px] font-medium text-[#007580]">
            About
          </Link>
          <Link href="/Products" className="text-[14px] font-medium text-[#007580]">
            Products
          </Link>
          <Link href="/Shop" className="text-[14px] font-medium text-[#007580]">
            Shop
          </Link>
          <Link href="/Cart" className="text-[14px] font-medium text-[#007580]">
            Cart
          </Link>
          <Link href="/FAQ" className="text-[14px] font-medium text-[#007580]">
            FAQ
          </Link>
          <Link href="/Contact" className="text-[14px] font-medium text-[#007580]">
            Contact
          </Link>
          
        </div>

        {/* Right Contact Section */}
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-[#636270]">Contact:</span>
          <span className="text-[14px] font-medium text-[#272343]">
            (808) 555-0111
          </span>
        </div>
      </div>
    </div>
  );
}
