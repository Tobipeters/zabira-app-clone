"use client";
import * as React from "react";
import { FullWidthDropDownBox, PopoverComponentBox } from "./popover.styles";
import Popover from "@mui/material/Popover";

interface PopoverContextType {
  closePopover: () => void;
}

const PopoverContext = React.createContext<PopoverContextType | undefined>(
  undefined
);

export const usePopover = (): PopoverContextType => {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a PopoverComponent");
  }
  return context;
};

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  useParentWidth?: boolean;
  closeOnClick?: boolean;
  fitContent?: boolean;
  dropdownPosition?: "left" | "right" | "center" | number;
}

export const PopoverComponent: React.FC<Props> = ({
  title,
  children,
  useParentWidth,
  closeOnClick = true,
  fitContent,
  dropdownPosition = "center",
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnClick) {
      handleClose();
      event.stopPropagation();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const popoverWidth = anchorEl ? anchorEl.offsetWidth : undefined;

  return (
    <PopoverComponentBox
      sx={{
        width: fitContent ? "fit-content" : "auto",
        borderRadius: "0.875rem",
      }}
    >
      <div
        aria-describedby={id}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {title}
      </div>
      <Popover
        id={id}
        elevation={0}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: dropdownPosition,
        }}
        sx={{
          top: "15px !important",
          "& .MuiPaper-root": {
            borderRadius: "0.875rem",
          },
        }}
      >
        <PopoverContext.Provider value={{ closePopover: handleClose }}>
          <div
            style={{
              width: useParentWidth ? popoverWidth : undefined,
            }}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </PopoverContext.Provider>
      </Popover>
    </PopoverComponentBox>
  );
};

export const FullWidthDropDown = ({ children }: any) => {
  return (
    <FullWidthDropDownBox>
      <div className="dropDown">{children}</div>
    </FullWidthDropDownBox>
  );
};
