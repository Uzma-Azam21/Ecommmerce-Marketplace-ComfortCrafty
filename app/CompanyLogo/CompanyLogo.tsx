// import Image from "next/image";

// export default function CompanyLogo() {
//   return (
//     <div className="w-full max-w-[1920px] py-8 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-[300px]">
//       <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-4">
//         <Image src="/Logo1.svg" alt="Company 1" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo2.svg" alt="Company 2" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo3.svg" alt="Company 3" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo4.svg" alt="Company 4" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo5.svg" alt="Company 5" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo6.svg" alt="Company 6" width={200} height={150} className="h-8 sm:h-12" />
//         <Image src="/Logo7.svg" alt="Company 7" width={200} height={150} className="h-8 sm:h-12" />
      
//       </div>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/Logo1.svg" alt="Zaphier Logo" width={85} height={87} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo2.svg"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo3.svg"
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo4.svg"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo5.svg"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo6.svg"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo7.svg" alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;