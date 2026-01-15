import { CheckRateHelp } from "@/src/components";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between z-10 absolute bg-[#ffffff]/65 lg:bg-[#F4F4F5]/65 backdrop-blur-[2px] top-0 left-0 right-0 px-6 pt-6 md:px-0 md:pr-4 md:pt-0 md:h-17">
      <Link href={"/"} className="lg:hidden">
        <Image
          src="/images/Zabira-logo-black.svg"
          alt="Zabira Logo"
          width={100}
          height={20}
        />
      </Link>
      <div className="ml-auto">
        <CheckRateHelp />
      </div>
    </header>
  );
};
