"use client";

import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { Inter } from "next/font/google";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineTimer } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

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
  <article className="w-full md:w-[300px] bg-[#F9F9F9] p-6 rounded-lg shadow-md flex flex-col items-start">
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

const ProductCard: React.FC<{
  imageSrc: string;
  title: string;
  price: string;
  width: string;
}> = ({ imageSrc, title, price, width }) => (
  <article
    className={`${width} h-[462px] flex flex-col bg-white rounded-lg shadow-lg overflow-hidden`}
  >
    <div className="relative h-[380px]">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
    <div className="p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-black font-bold">{price}</span>
      </div>
      <HiShoppingCart className="w-6 h-6 text-emerald-500 cursor-pointer" />
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
        "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Unbeatable Prices",
      description:
        "For our materials and quality you won&apos;t find better prices anywhere",
    },
    {
      Icon: RiCustomerService2Line,
      title: "Recycled Packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  const products = [
    {
      imageSrc: "/Large.png",
      title: "The Poplar suede sofa",
      price: "$99.00",
      width: "w-full lg:w-[630px]",
    },
    {
      imageSrc: "/Parent.png",
      title: "The Dandy chair",
      price: "$99.00",
      width: "w-full lg:w-[305px]",
    },
    {
      imageSrc: "/Product Card.png",
      title: "The Dandy chair",
      price: "$99.00",
      width: "w-full lg:w-[305px]",
    },
  ];

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

        {/* Products Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12">Our Popular Products</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
