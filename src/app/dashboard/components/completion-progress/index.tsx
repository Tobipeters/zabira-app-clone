"use client";
import { ArrowRightIcon, CaretRightIcon } from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import {  IconButton } from "@mui/material";
import { ZaDialog } from "../dialog";
import React from "react";
import { CompleteProfile } from "../complete-profile";
import { CircularProgressBox } from "../progress-box";

export const CompletionProgress = () => {
  const [openCompletion, setOpenCompletion] = React.useState<boolean>(false);

  const toggleOpenCompletion = () => {
    setOpenCompletion(!openCompletion);
  };

  return (
    <section className="flex gap-2 items-start lg:items-center justify-between w-full p-4 rounded-xl bg-[#EBF5FF] border-2 border-transparent lg:border-[#A3D4FF]">
      <div className="flex items-center gap-4 lg:gap-6">
      <CircularProgressBox text="4/5" progress={80} />

        <div className="inline-flex flex-col gap-1.5">
          <h4 className="text-base text-[#00298F] font-bold leading-[124%] tracking-[-0.012em]">
            You’re almost done!
          </h4>
          <p className="text-xs text-[#1A1A1AB2] font-medium leading-[124%] tracking-[-0.012em]">
            Finish setting up your account to enjoy benefits
          </p>
        </div>
      </div>

      <IconButton
        onClick={toggleOpenCompletion}
        className="p-0! bg-transparent! lg:hidden!"
      >
        <CaretRightIcon />
      </IconButton>

      <ZaButton
        onClick={toggleOpenCompletion}
        className="hidden! lg:flex!"
        text={
          <>
            Complete Profile Setup <ArrowRightIcon bg="white" opacity="1" />
          </>
        }
      />

      <ZaDialog
        dialogProps={{
          open: openCompletion,
          onClose: toggleOpenCompletion,
        }}
      >
        <CompleteProfile />
      </ZaDialog>
    </section>
  );
};
