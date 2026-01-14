import { Box, CircularProgress } from "@mui/material";

interface IProps {
  text: string;
  progress: number
  trackColor?: string
}

export const CircularProgressBox = ({text, progress, trackColor="white"}:IProps) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        sx={{
          color: "#299BFF !important",

          "& svg .MuiCircularProgress-track": {
            stroke: `${trackColor} !important`,
            opacity: "1",
          },
        }}
        enableTrackSlot
        thickness={5}
        variant="determinate"
        value={progress}
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
        <div className="text-lg text-[#1A1A1A] font-bold">
            {text}
        </div>
      </Box>
    </Box>
  );
};
