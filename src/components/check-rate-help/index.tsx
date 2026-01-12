import { CalculatorIcon, HeadphoneIcon } from "@/src/assets/svg";
import { ZaButton } from "../button";

export const CheckRateHelp = () => {
  return (
    <div className="inline-flex">
      <ZaButton
        mode="secondary"
        className="rounded-[50px_0_0_50px]! text-sm! lg:text-base! px-2! lg:px-3! bg-[#FCFCFC]! lg:bg-white!"
        text={
          <>
            <CalculatorIcon />
            Check Rates
          </>
        }
      />
      <ZaButton
        mode="secondary"
        className="rounded-[0_50px_50px_0]! text-sm! lg:text-base! px-2! lg:px-3! bg-[#FCFCFC]! lg:bg-white!"
        text={
          <>
            <HeadphoneIcon />
            Get Help
          </>
        }
      />
    </div>
  );
};
