import Image from "next/image";

export default function CompanyLogo() {
  return (
    <div className="w-full max-w-[1920px] py-8 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-[300px]">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-4">
        <Image src="/logo1.png" alt="Company 1" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo2.png" alt="Company 2" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo3.png" alt="Company 3" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo4.png" alt="Company 4" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo5.png" alt="Company 5" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo6.png" alt="Company 6" width={100} height={32} className="h-8 sm:h-12" />
        <Image src="/logo7.png" alt="Company 7" width={100} height={32} className="h-8 sm:h-12" />
      </div>
    </div>
  );
}
