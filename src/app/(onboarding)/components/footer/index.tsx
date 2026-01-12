import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-[#ffffff]/60 lg:bg-[#F4F4F5]/65 z-10 backdrop-blur-[2px] absolute bottom-0 right-0 left-0 lg:left-100 flex items-center justify-between text-[#1A1A1AB2] text-sm h-12 lg:h-14 px-6 lg:py-4 lg:px-9">
      <p className="font-medium"> &copy; Zariba. {new Date().getFullYear()}</p>

      <div className="inline-flex gap-9 ">
        <Link href={"#"} className="font-medium">
          Privacy <span className="hidden md:inline">Policy</span>
        </Link>
         <Link href={"#"} className="font-medium">
          Terms <span className="hidden md:inline">of Service</span>
        </Link>
      </div>
    </footer>
  );
};
