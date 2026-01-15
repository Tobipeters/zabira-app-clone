import { styled } from "@mui/material";

export const PopoverComponentBox = styled("section")(({}) => ({
  //remove default border and padding
  "& .MuiPopover-paper": {
    border: "none",
    padding: "0",
  },
}));

export const FullWidthDropDownBox = styled("section")(({}) => ({
  borderRadius: "0.875rem",
  width: "100%",
  "& .dropDown": {
    width: "100%",
    boxShadow: "0px 0px 64px 16px rgba(156, 160, 167, 0.5)",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  "& .popoverListItems": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0.8rem 2rem",
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
  },

  "& .popoverListItems:hover": {
    backgroundColor: "#E2EDFE",
    color: "#0C0C0C",
  },
}));
