import { CloseIcon } from "@/src/assets/svg";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  bg?: string;
  title?: string | React.ReactNode;
  details?: string;
  dialogProps: DialogProps;
  children?: React.ReactNode;
  width?: "xs" | "sm" | string;
  maxHeight?: string;
  isBackBtn?: boolean;
  handleBack?: () => void;
  isPadding?: boolean;
  isMobileRounded?: boolean;
  showHeader?: boolean;
}

export const ZaDialog: React.FC<Props> = ({
  bg = "white",
  title,
  details,
  dialogProps,
  children,
  width = "xs",
  maxHeight = "90vh",
  handleBack,
  isBackBtn = false,
  isPadding = true,
  isMobileRounded = true,
  showHeader = true,
}) => {
  return (
    <>
      <Dialog
        {...dialogProps}
        TransitionComponent={Transition}
        maxWidth={dialogProps?.maxWidth ?? false}
        sx={{
          "& .MuiPaper-root": {
            maxHeight,
            backgroundColor: `transparent !important`,
            margin: "0",
            width: width === "xs" ? "500px" : width === "sm" ? "630px" : width,
            boxShadow: "none !important",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderRadius: "0",
            // overflowY: "hidden",

            "@media (max-width: 576px)": {
              maxHeight: "100% !important",
              padding: "1.5rem !important",
              maxWidth: "100% !important",
              // margin: "0 !important",
              // width: "100%",
              borderRadius: "0",
            },
          },
        }}
      >
        <IconButton
          onClick={(e) => {
            dialogProps?.onClose && dialogProps.onClose(e, "escapeKeyDown");
          }}
          className="w-fit! ml-auto! rounded-full! relative! z-50! p-1! right-0! top-0! bg-[#F9F9FB]!"
        >
          <CloseIcon />
        </IconButton>

        <div className={`bg-${bg} p-6 rounded-2xl w-full h-full`}>{children}</div>
      </Dialog>
    </>
  );
};
