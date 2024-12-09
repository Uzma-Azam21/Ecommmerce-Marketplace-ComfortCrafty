import Image from "next/image";
import React from "react";

export default function Explore() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      {/* Left Side Single Image */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src="/p3.png"
            alt="Chair Image"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Right Side with Grid of Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        <div className="relative">
          <Image
            src="/p4.png"
            alt="Chair Image"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/p1.png"
            alt="Chair Image"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/p5.png"
            alt="Chair Image"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/p1.png"
            alt="Chair Image"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
