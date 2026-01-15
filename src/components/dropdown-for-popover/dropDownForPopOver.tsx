"use client";
import { styled } from "@mui/material";
import * as React from "react";

interface IProps {
  children: React.ReactNode;
}

export const DropDownForPopOver: React.FC<IProps> = ({ children }) => (
  <DropDownBox>
    <div className="popover-child">{children}</div>
  </DropDownBox>
);

export const DropDownBox = styled("section")(({ }) => ({
  overflow: "hidden",
  borderRadius: "0.875rem",

  "& .popover-child": {
    boxShadow: "0px 24px 64px rgba(156, 160, 167, 0.24)",
    borderRadius: "0.875rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },

  "& .popover-child a, .popover-child .item": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0.8rem 1.5rem",
    color: "#121212",
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "500",
    gap: "0.5rem",
    overflow: "hidden",

    // "& svg": {
    //   width: "1.15rem",
    //   height: "1.15rem",

    //   "& path": {
    //     transition: "all 0.3s ease-in-out",
    //     stroke: "#0F0F10",
    //   },
    // },

    "&:hover": {
      backgroundColor: "#E8EFFD",
      color: "#121212",

      // "& svg": {
      //   "& path": {
      //     stroke: "#0F0F10",
      //   },
      // },
    },
  },

  "& .popover-child a, .popover-child .dangerText": {
    color: "#FF3B30",

    "&:hover":{
      color: "#FF3B30",
    },

    "& span, :hover span": {
      color: "#FF3B30",
    },

    // "& svg path, :hover svg path": {
    //   stroke: "#FF3B30",
    // },
  },
}));
