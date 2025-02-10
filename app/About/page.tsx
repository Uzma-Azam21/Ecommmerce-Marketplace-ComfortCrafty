"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineTimer } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

interface BrandFeature {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const BrandFeatureCard: React.FC<BrandFeature> = ({
  Icon,
  title,
  description,
}) => (
  <article className="w-full md:w-[300px] bg-[#F9F9F9] p-6 rounded-lg shadow-md flex flex-col items-start transition-transform transform hover:scale-105 duration-300 ease-in-out">
    <div className="space-y-4">
      <Icon className="w-8 h-8 text-[#007580]" />
      <h3 className={`text-xl font-bold text-[#007580] ${inter.className}`}>
        {title}
      </h3>
      <p className={`text-sm text-[#007580] ${inter.className}`}>
        {description}
      </p>
    </div>
  </article>
);

export default function About() {
  const brandFeatures: BrandFeature[] = [
    {
      Icon: TbTruckDelivery,
      title: "Next Day as Standard",
      description: "Order before 3pm to get next day delivery",
    },
    {
      Icon: MdOutlineTimer,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Unbeatable Prices",
      description:
        "For our materials and quality, you won't find better prices anywhere",
    },
    {
      Icon: RiCustomerService2Line,
      title: "Recycled Packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  const images = [
    "/c2.png",
    "/p2.png",
    "/p4.png",
    "/Parent.png",
    "/Product Card.png",
    "/p5.png",
    "/p6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide effect with dependency fix
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]); // ✅ Fix: Missing dependency added

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className={`${inter.className} text-gray-600 body-font py-12`}>
      <div className="container mx-auto px-4 lg:px-24">
        {/* About Us Section */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8 mb-24">
          <div className="w-full lg:w-1/2 px-4 lg:px-8 bg-[#007580] p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center lg:items-start">
            <h1 className="title-font font-medium text-2xl lg:text-3xl mb-4 text-white text-center lg:text-left">
              About Us - Comforty
            </h1>
            <p className="leading-relaxed mb-6 text-center lg:text-left">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </p>
            <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition-300">
              View Product
            </button>
          </div>

          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <div className="relative w-full h-96">
              <Image
                className="object-cover object-center"
                src="/p1.png"
                alt="About Us Image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-16">
            What Makes Our Brand Different
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {brandFeatures.map((feature, index) => (
              <BrandFeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Gallery</h2>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <div className="flex items-center">
              {/* Left Arrow */}
              <button
                onClick={goToPrev}
                className="absolute left-0 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
              >
                <FaArrowLeft />
              </button>

              {/* Image Slider */}
              <div className="w-full flex overflow-hidden rounded-lg shadow-lg">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full transition-transform duration-500 ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    <Image
                      src={image}
                      alt={`Gallery Image ${index}`}
                      width={500}
                      height={500}
                      className="w-full h-[350px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-0 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
