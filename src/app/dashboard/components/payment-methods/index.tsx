import { ThunderIcon } from "@/src/assets/svg";
import { paymentOptions } from "@/src/utils";

export const PaymentMethods = () => {
  return (
    <section className="flex flex-col gap-6 w-full lg:p-6 lg:rounded-2xl lg:bg-white">
      <h4 className="hidden lg:inline-flex items-center gap-2 text-lg text-[#1A1A1A] font-semibold leading-[124%] tracking-[-0.012]">
        <ThunderIcon />
        Start Making Payments
      </h4>

      <ul className="grid grid-cols-12 gap-3 lg:gap-6">
        {paymentOptions.map((option) => (
          <li className="flex flex-col items-center lg:items-start col-span-4 lg:col-span-2 gap-3 rounded-xl border border-transparent py-3 bg-[#F4F4F5] lg:py-4 lg:px-4 lg:bg-[#FCFCFC] lg:border-[#E1E1E2]">
            <div
              style={{
                background: option.color,
              }}
              className=" h-9 min-w-9 rounded-full inline-flex items-center justify-center"
            >
              <>{option.icon}</>
            </div>

            <div className="inline-flex flex-col gap-1.5">
              <h5 className="text-[#1A1A1AB2] lg:text-[#1A1A1A] text-sm lg:text-base font-medium lg:font-semibold">
                {option.name}
              </h5>
              <p className="hidden text-sm text-[#1A1A1A5C] font-medium leading-[124%] tracking-[-0.012em] lg:block">
                {option.details}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
