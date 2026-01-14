"use client";
import {
  ArrowRightIcon,
  ThunderIcon,
  TrendDownIcon,
  TrendUpIcon,
} from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import { tradeAssets } from "@/src/utils";
import Image from "next/image";

export const TradedAssets = () => {
  return (
    <div className="flex overflow-x-hidden flex-col gap-6">
      <div className="flex items-center justify-between">
        <h4 className="text-base text-[#1A1A1A] font-bold inline-flex items-center gap-1.5">
          <ThunderIcon />
          Top traded <span className="hidden lg:inline">assets</span> this week
        </h4>

        <ZaButton
          className="h-6.5! pl-3! pr-1.5! rounded-[50px]! text-sm!"
          text={
            <>
              Trade Now
              <ArrowRightIcon bg="white" opacity="1" />
            </>
          }
        />
      </div>

      <ul className="flex items-center gap-3 flex-nowrap overflow-auto">
        {tradeAssets.map((asset, id) => (
          <li key={id}>
            <div className="min-w-34 xl:min-w-38 flex flex-col gap-3 p-4 rounded-md bg-white lg:bg-[#F4F4F5] border-[#F4F4F5] border lg:border-none shadow-[0px_1.25px_4px_rgba(26,26,26,0.08)] lg:shadow-none">
              <Image
                src={asset.imgUrl}
                alt={asset.name}
                width={36}
                height={36}
              />

              <div className="inline-flex flex-col gap-2">
                <h5 className="text-sm text-[#1A1A1A] font-semibold leading-[124%] tracking-[-0.012em] truncate">
                  {asset.name}
                </h5>
                <div className="inline-flex items-center gap-1">
                  <small className="text-xs text-[#1A1A1A]/70 font-semibold leading-4.5">
                    {asset.percent}
                  </small>
                  {id == 2 ? <TrendDownIcon /> : <TrendUpIcon />}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
