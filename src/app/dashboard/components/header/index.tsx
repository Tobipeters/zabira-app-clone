import { MenuIcon, NotificationIcon } from "@/src/assets/svg";
import { CheckRateHelp } from "@/src/components";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  onToggleMenu: () => void;
}

export const AppHeader: React.FC<IProps> = ({ onToggleMenu }) => {
  return (
    <header className="flex items-center bg-white h-17 px-5 lg:pr-5.5 lg:pl-12 lg:h-21 lg:shadow-[0px_33px_13px_rgba(176,176,176,0.01),0px_19px_11px_rgba(176,176,176,0.05),0px_8px_8px_rgba(176,176,176,0.09),0px_2px_5px_rgba(176,176,176,0.1)]">
      {/* Mobile only */}
      <div className="inline-flex items-center gap-4 lg:hidden">
        <IconButton onClick={onToggleMenu} className="p-1! rounded-full!">
          <MenuIcon />
        </IconButton>

        <Link href={"/"}>
          <Image
            src="/images/Zabira-logo-black.svg"
            alt="Zabira logo"
            width={100}
            height={21}
          />
        </Link>
      </div>

      <div className="hidden flex-col gap-1 lg:flex">
        <h3 className="text-sm text-[#1A1A1A] font-bold leading-[130%]">
          Hi Jacob 👋🏽
        </h3>
        <p className="text-sm text-[#1A1A1A]/36 font-medium leading-[124%] tracking-[-0.012em]">
          Buy/Sell BTC, ETH. Start trading now on Zabira
        </p>
      </div>

      <div className="flex items-center ml-auto gap-5 md:gap-10 lg:gap-12.25">
        <div className="hidden lg:block">
          <CheckRateHelp />
        </div>

        <IconButton className="w-9! h-9! rounded-full! lg:bg-[#FCFCFC]! shadow-[0px_1px_2px_rgba(26,26,26,0.08)]! relative!">
          <span className="absolute -top-0.5 -right-1 inline-flex items-center justify-center min-w-4 h-3.5 rounded-lg text-white text-[10px] font-semibold bg-[#00DD77] lg:bg-[#0044EE]">
            8
          </span>
          <NotificationIcon />
        </IconButton>

        <IconButton className="w-8! h-8! rounded-full! border-[0.67px]! border-[#85C5FF]! p-0.5! lg:border! lg:p-1! lg:border-[#00DD77]! lg:w-10! lg:h-10!">
          <Image
            src="/images/zabira-logo-id.svg"
            alt="Zabira logo"
            width={27}
            height={27}
            className="w-7.5 h-7.5 lg:w-8 lg:h-8"
          />
        </IconButton>
      </div>
    </header>
  );
};
