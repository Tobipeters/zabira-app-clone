import {
  ArrowRightIcon,
  CoinRewardIcon,
  CopyIcon,
  RewardIcon,
  ThunderIcon,
} from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import { paymentOptions } from "@/src/utils";
import { IconButton } from "@mui/material";
import Image from "next/image";

export const DoMore = () => {
  return (
    <section className="flex flex-col gap-6 w-full lg:p-6 lg:rounded-2xl lg:bg-white">
      <h4 className="hidden lg:inline-flex items-center gap-2 text-lg text-[#1A1A1A] font-semibold leading-[124%] tracking-[-0.012]">
        <ThunderIcon />
        Do more on Zabira!
      </h4>

      <div className="grid grid-cols-2 gap-9 lg:gap-6">
        <div
          style={{
            background:
              "linear-gradient(255.44deg, #00E8D1 -25.51%, #502DFF 108.99%)",
          }}
          className="order-1 lg:order-1 flex items-center gap-5 lg:gap-7.5 col-span-2 lg:col-span-1 rounded-2xl border-[3px] border-[#ffffff2e] p-4 lg:px-6"
        >
          <div className="relative min-w-20.75 h-29.75 lg:min-w-30.5 lg:h-43.5">
            <Image
              src="/images/zabira-guy.svg"
              alt="zabira guy"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-base lg:text-xl text-white font-bold leading-[124%]">
              Become a Merchant
            </h5>
            <p className="text-sm lg:text-lg text-white/70 font-medium">
              Get access to APIs and assets for your merchant profile
            </p>

            <ZaButton
              mode="secondary"
              className="w-fit! h-6.5! lg:h-9! rounded-[50px]! lg:rounded-md!"
              text={
                <>
                  Apply Now <ArrowRightIcon />
                </>
              }
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col col-span-2 lg:col-span-1 rounded-xl! overflow-hidden!">
          <div className="p-4 flex items-center justify-between bg-[#7099FF]">
            <h4 className="text-white text-base lg:text-xl font-bold inline-flex items-center gap-1.5">
              <Image
                src="/images/icon/earning-coin.svg"
                alt="coin"
                width={20}
                height={20}
              />
              Refer and Earn
            </h4>

            <IconButton className="text-sm! font-medium! inline-flex! items-center! gap-1! text-white! border! border-[#516BAC]! bg-[#5471b6]! shadow-[0px_1px_2px_rgba(26,26,26,0.08)]! h-6.5! rounded-[50px]!">
              Referral Code
              <CopyIcon />
            </IconButton>
          </div>

          <div className="flex flex-col gap-6 w-full p-6 bg-[#ebf0ff]">
            <p className="text-base lg:text-lg text-[#1A1A1AB2] font-medium leading-[124%]">
              Invite 10 people and get 100 points to use in amazing rewards! T&C
              Apply.
            </p>

            <ZaButton
              text={
                <>
                  Invite your friends
                  <ArrowRightIcon bg="white" opacity="1" />
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
