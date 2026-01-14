import { ArrowRightIcon, CaretRightIcon } from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import { Box, CircularProgress, IconButton } from "@mui/material";

export const CompletionProgress = () => {
  return (
    <section className="flex gap-2 items-start lg:items-center justify-between w-full p-4 rounded-xl bg-[#EBF5FF] border-2 border-transparent lg:border-[#A3D4FF]">
      <div className="flex items-center gap-4 lg:gap-6">
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            sx={{
              color: "#299BFF !important",

              "& svg .MuiCircularProgress-track": {
                stroke: "white !important",
                opacity: "1",
              },
            }}
            enableTrackSlot
            thickness={5}
            variant="determinate"
            value={80}
            size={56}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-lg text-[#1A1A1A] font-bold">4/5</div>
          </Box>
        </Box>

        <div className="inline-flex flex-col gap-1.5">
          <h4 className="text-base text-[#00298F] font-bold leading-[124%] tracking-[-0.012em]">
            You’re almost done!
          </h4>
          <p className="text-xs text-[#1A1A1AB2] font-medium leading-[124%] tracking-[-0.012em]">
            Finish setting up your account to enjoy benefits
          </p>
        </div>
      </div>

      <IconButton className="p-0! bg-transparent! lg:hidden!">
        <CaretRightIcon />
      </IconButton>

      <ZaButton
        className="hidden! lg:flex!"
        text={
          <>
            Complete Profile Setup <ArrowRightIcon bg="white" opacity="1" />
          </>
        }
      />
    </section>
  );
};
