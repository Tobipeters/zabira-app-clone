import { completionSteps } from "@/src/utils";
import { CircularProgressBox } from "../progress-box";
import Image from "next/image";
import { CaretRightIcon, CircleCheckIcon } from "@/src/assets/svg";

export const CompleteProfile = () => {
  return (
    <section className="flex flex-col gap-9 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-[#1A1A1A] font-bold leading-[124%] tracking-[-0.012em]">
            Welcome to Zabira 👋
          </h3>
          <p className="text-base text-[#1A1A1AB2] font-normal leading-[140%] tracking-[-0.01em]">
            Complete your account setup in a few easy steps
          </p>
        </div>
        <CircularProgressBox text="1/5" progress={20} trackColor="#F4F4F5" />
      </div>

      <ul className="flex flex-col gap-4 w-full">
        {completionSteps.map((step, id) => (
          <li
            key={id}
            className={`
                ${
                  step.isCompleted
                    ? "bg-[#EBF5FF] border-[#A3D4FF] shadow-[0px_1.25px_4px_rgba(26,26,26,0.08)]"
                    : "border-[#E1E1E2] shadow-[0px_1.25px_4px_rgba(26,26,26,0.08)]"
                }
            p-3 rounded-xl border flex items-center gap-4 cursor-pointer`}
          >
            <Image src={step.imgUrl} alt="icon" width={36} height={36} />
            <div className="inline-flex flex-col gap-0.5">
              <h4 className="text-base text-[#1A1A1A] font-semibold leading-[124%]">
                {step.title}
              </h4>
              <p className="text-sm text-[#1A1A1A]/70 font-normal leading-[140%]">
                {step.details}
              </p>
            </div>

            <div className="ml-auto">
              {step.isCompleted ? <CircleCheckIcon /> : <CaretRightIcon />}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
