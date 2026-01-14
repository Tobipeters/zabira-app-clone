import { SecurityGreenIcon } from "@/src/assets/svg";
import React from "react";

interface IProps {
  children?: React.ReactNode;
  title?: string;
  details?: React.JSX.Element | string;
  footerText?: React.JSX.Element | string;
  className?: string
}

export const MainFrame: React.FC<IProps> = ({
  children,
  title,
  details,
  footerText,
  className
}) => {
  return (
    <main className={`${className} flex flex-col gap-6 w-full py-30 md:w-125 md:mx-auto`}>
      <div className="flex flex-col gap-6 md:rounded-2xl md:bg-white md:p-9">
        <div className="flex flex-col gap-4 w-full">
          {title && (
            <h3 className="text-2xl text-[#1A1A1A] font-bold leading-[124%] tracking-[-0.012em]">
              {title}
            </h3>
          )}
          {details && (
            <p className="text-base text-[#1A1A1A]/70 font-normal leading-[140%] tracking-[-0.01em]">
              {details}
            </p>
          )}
        </div>
        {children}
      </div>

      {footerText && <>{footerText}</>}

      <div className="text-[#1A1A1AB2] text-sm font-medium leading-[124%] tracking-[-0.012em] bg-[#F4F4F5] md:bg-white px-1.5 py-1 inline-flex items-center gap-1.5 rounded-md w-fit mx-auto">
        <SecurityGreenIcon />
        NDPR Compliant
      </div>
    </main>
  );
};
