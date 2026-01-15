"use client";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CoinRewardIcon,
  NoEyeIcon,
  RightLeftArrowIcon,
  SlantLeftDownArrowIcon,
  SlantRightUpArrowIcon,
} from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import { TradedAssets } from "../traded-assets";

const currencies = [
  {
    name: "USD",
    isActive: true,
    flagUrl: "/images/icon/usa-flag.svg",
  },
  {
    name: "NGN",
    isActive: false,
    flagUrl: "/images/icon/ngn-flag.svg",
  },
  {
    name: "GHC",
    isActive: false,
    flagUrl: "/images/icon/ghana-flag.svg",
  },
  {
    name: "KES",
    isActive: false,
    flagUrl: "/images/icon/ghana-flag.svg",
  },
];

const walletActions = [
  {
    name: "Withdraw",
    icon: <SlantRightUpArrowIcon />,
  },
  {
    name: "Deposit",
    icon: <SlantLeftDownArrowIcon />,
  },
  {
    name: "Swap",
    icon: <RightLeftArrowIcon />,
  },
];

export const WalletSection = () => {
  const isDesktop = useMediaQuery("798px");

  return (
    <section className="grid grid-cols-12 gap-6 lg:p-6 bg-white rounded-2xl">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <div className="bg-[#EBF0FF] border border-[#1A1A1A14] rounded-xl lg:bg-transparent">
          <div className="flex flex-col gap-6 py-4 px-6 rounded-xl w-full border border-transparent bg-[#0044EE] lg:bg-[#EBF0FF] lg:border-[#D6E2FF]">
            <div className="inline-flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h5 className="text-base text-[#FFFFFFB2] lg:text-[#1A1A1A]/70 font-semibold leading-[124%] tracking-[-0.012em] inline-flex items-center gap-2">
                  Total Balance{" "}
                  <NoEyeIcon bg={isDesktop ? "#A1A1AA" : "white"} />
                </h5>
                <span className="inline-flex lg:hidden items-center gap-0.5 text-white font-semibold bg-white/18 border border-white/26 rounded-[50px] py-1 pl-3 pr-1.5">
                  USD
                  <ArrowDownIcon />
                </span>
              </div>

              <div className="inline-flex items-center gap-2">
                <h6 className="text-white lg:text-[#1A1A1A] text-2xl font-semibold">
                  10,254.02
                </h6>
                <span className="text-base text-[#0044EE] px-3 py-1 border-[#ADC5FF] bg-[#D6E2FF] rounded-[50px] hidden lg:inline-block">
                  USD
                </span>
              </div>

              {/* Mobile */}
              <ul className="flex flex-nowrap pt-3 border-t border-[#FFFFFF42] lg:hidden">
                <li className="text-sm text-white font-semibold inline-flex items-center justify-center w-full gap-1 border-r border-[#FFFFFF42]">
                  <SlantRightUpArrowIcon bg="white" />
                  Withdraw
                </li>
                <li className="text-sm text-white font-semibold inline-flex items-center justify-center w-full gap-1">
                  <SlantLeftDownArrowIcon bg="white" />
                  Deposit
                </li>
              </ul>

              {/* desktop */}
              <ul className="hidden lg:flex items-center flex-nowrap gap-0.5 rounded-md p-1 bg-[#D6E2FF] mt-3">
                {currencies.map((item, id) => (
                  <li
                    key={id}
                    className={`flex items-center justify-center rounded-md gap-2 text-sm font-semibold py-1.75 w-full ${
                      item.isActive
                        ? "bg-white text-[#1A1A1A]"
                        : "text-[#1A1A1AB2]"
                    }`}
                  >
                    {item.name}
                    <Image
                      src={item.flagUrl}
                      alt={`${item.name} flag`}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-3 py-2.5 flex items-center justify-between lg:hidden">
            <div className="inline-flex items-center gap-1.5 text-[#1A1A1AB2] text-sm font-semibold leading-[124%] tracking-[-0.012rem]">
              <Image
                src="/images/icon/note.svg"
                alt="note icon"
                width={16}
                height={16}
              />
              Transaction History
            </div>

            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div className="hidden lg:block col-span-12 lg:col-span-7 xl:col-span-8">
        <TradedAssets />
      </div>

      <div className="hidden items-center justify-between lg:flex col-span-12">
        <div className="flex items-center gap-6">
          {walletActions.map(({ name, icon }, id) => (
            <ZaButton
              key={id}
              mode="secondary"
              text={
                <>
                  {icon} {name}{" "}
                </>
              }
            />
          ))}
        </div>

        <ZaButton
          mode="secondary"
          className="border-none! bg-transparent! h-6! p-0!"
          text={
            <>
              <CoinRewardIcon /> Earn Rewards <ArrowRightIcon />{" "}
            </>
          }
        />
      </div>
    </section>
  );
};
