import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 mx-auto">
      <div className="bg-[#F0F2F3] text-black flex flex-col md:flex-row justify-around items-center mx-auto h-auto md:h-[400px] overflow-hidden py-8 sm:py-12 md:py-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center items-center md:items-start px-4 md:px-8 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-1xl sm:text-1xl md:text-1xl lg:text-2xl font-normal text-[#272343] mb-2">
            Welcome to Chairy
          </h1>
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Best Furniture Collection For Your Interior
          </p>
          <button className="px-4 py-2 bg-[#029FAE] hover:bg-[#028A97] text-white rounded-md transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <Image
            src="/Product Image.png"
            alt="Chair"
            width={300}
            height={300}
            className="w-full max-w-[230px] md:max-w-lg md:h-96 lg:max-w-[500px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
