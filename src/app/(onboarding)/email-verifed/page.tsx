"use client";
import Image from "next/image";
import { MainFrame } from "../components";
import { ZaButton } from "@/src/components";
import { AnimatedCheckIcon } from "@/src/assets/svg";

export default function EmailVerified() {
  return (
    <MainFrame>
      <div className="flex flex-col w-full gap-6">
        <div className="mx-auto">
          <AnimatedCheckIcon />
        </div>
        <div className="flex flex-col w-full gap-2 text-center">
          <h4 className="text-2xl text-[#1A1A1A] font-bold leading-[124%] tracking-[-0.012em]">
            Email Verified!
          </h4>
          <p className="text-base text-[#1A1A1A]/70 font-normal leading-[140%] tracking-[-0.01em]">
            Your email has been verified successfully.
          </p>
        </div>

        <ZaButton href="/dashboard" text="Done" />
      </div>
    </MainFrame>
  );
}
