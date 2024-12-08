export default function Navbar() {
  return (
    <div className="w-full max-w-[1920px] h-auto sm:h-[203px] bg-white">
      {/* Top Navbar Section */}
      <div className="w-full max-w-[1920px] h-auto sm:h-[45px] bg-[#272343] flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] py-2 sm:py-[14px]">
        {/* Left Section: Shipping */}
        <div className="flex items-center gap-2 opacity-70 mb-2 sm:mb-0">
          {/* Tick Mark Icon */}
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

        {/* Right Section: Help and Options */}
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

          {/* FAQs */}
          <p className="text-[13px] font-normal text-white">FAQs</p>

          <div className="flex items-center gap-1">
            {/* Circle Alert */}
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white opacity-70">
              {/* Exclamation Mark */}
              <span className="text-[10px] font-bold text-white">!</span>
            </div>
            <p className="text-[13px] font-normal text-white">Need Help</p>
          </div>
        </div>
      </div>

      {/* Middle Navbar Section */}
      <div className="w-full max-w-[1920px] h-auto sm:h-[84px] py-4 sm:py-[20px] px-4 sm:px-8 md:px-16 lg:px-[300px] flex flex-col sm:flex-row justify-between items-center bg-[#F0F2F3]">
        {/* Left Section: Logo and Text */}
        <div className="flex items-center gap-[8px] mb-4 sm:mb-0">
          {/* Logo */}
          <img
            src="/Logo icon.svg"
            alt="Comforty Logo"
            className="w-[40px] h-[40px]"
          />
          {/* Text */}
          <p className="text-[26px] font-medium leading-[31.2px] text-[#272343]">
            Comforty
          </p>
        </div>

        {/* Right Section: User Link */}
        <div className="flex items-center gap-[12px]">
          {/* Cart Button */}
          <div className="flex items-center gap-[8px] bg-[#FFFFFF] px-[16px] py-[11px] rounded-tl-[8px]">
            {/* Buy Icon */}
            <div className="w-[22px] h-[22px] flex items-center justify-center">
              <img
                src="/Buy 2.svg"
                alt="Buy Icon"
                className="w-[16.96px] h-[16.54px]"
              />
            </div>
            {/* Cart Text */}
            <span className="text-[12px] font-medium leading-[13.2px] text-[#272343]">
              Cart
            </span>
            {/* Cart Badge */}
            <div className="relative w-[20px] h-[20px] flex items-center justify-center bg-[#007580] rounded-full">
              <span className="text-[10px] font-medium text-[#FFFFFF] leading-[10px]">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Links Navbar Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] py-4 sm:py-[14px] bg-[#FFFFFF] shadow-[0px_1px_0px_0px_#E1E3E5] w-full max-w-[100%]">
        {/* Left Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-[32px] mb-4 sm:mb-0">
          <a
            href="/"
            className="text-[14px] font-medium leading-[15.4px] text-[#007580]"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-[14px] font-medium leading-[15.4px] text-[#636270]"
          >
            Shop
          </a>
          <a
            href="/products"
            className="text-[14px] font-medium leading-[15.4px] text-[#636270]"
          >
            Product
          </a>
          <a
            href="/pages"
            className="text-[14px] font-medium leading-[15.4px] text-[#636270]"
          >
            Pages
          </a>
          <a
            href="/about"
            className="text-[14px] font-medium leading-[15.4px] text-[#636270]"
          >
            About
          </a>
        </div>

        {/* Right Contact */}
        <div className="flex items-center gap-[8px]">
          <span className="text-[14px] font-normal leading-[15.4px] text-[#636270]">
            Contact:
          </span>
          <span className="text-[14px] font-medium leading-[15.4px] text-[#272343]">
            (808) 555-0111
          </span>
        </div>
      </div>
    </div>
  );
}
