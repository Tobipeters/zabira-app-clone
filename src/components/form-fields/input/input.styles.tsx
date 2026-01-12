"use client";
import { FormControl, styled } from "@mui/material";

export const InputBox = styled(FormControl)(({ theme }) => ({
  margin: "0",

  "& .input": {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      borderRadius: "0.875rem",
      backgroundColor: "#F0F0F0",
      paddingLeft: "0 !important",
      transition: "0.3s all ease-in-out",
      // height: "50px",
      overflow: "hidden",
    },

    "& .MuiOutlinedInput-input": {
      fontSize: "1rem",
      lineHeight: "17.6px",
      padding: "0.85rem 0.75rem !important",
    },

    "& .MuiInputBase-multiline":{
      padding: "0 !important",
    },

    // "& .MuiInputBase-inputMultiline.MuiOutlinedInput-inputMultiline": {
    //   padding: "0 !important",
    // },

    "& .MuiInputLabel-outlined": {
      fontSize: "0.75rem",
    },

    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.text,
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      // borderColor: theme.palette.primary.main,
      borderWidth: 0,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      // borderColor: "rgba(121, 121, 121, 0.87)",
      borderWidth: 0,
    },

    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderWidth: 0,
      borderColor: "#f44336",
    },
  },
  "& .feedback": {
    color: theme.palette.error.main,
    paddingBottom: "0.25rem",
    marginLeft: 0,

    "& span": {
      fontWeight: 500,
      fontSize: "0.75rem",
    },
  },

  "& textarea": {
    padding: "0 !important",
  },
}));
