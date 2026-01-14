import { styled } from "@mui/material";

export const TableBox = styled("div")(({ theme }) => ({
  // height: "77vh",
  width: "100%",

  "& .MuiDataGrid-root": {
    fontSize: "0.95rem",
    backgroundColor: " #FFFFFF",
    border: "none !important",
    boxShadow: "none !important",
  },

  "& .MuiDataGrid-columnHeader": {
    borderWidth: "1px 0",
    borderColor: "#EEEFF2",
    borderRadius: "0",
    height: "44px !important",
    background: "transaction !important",

    "& .MuiDataGrid-columnHeaderTitle": {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: "14.32px",
      color: "#718096",
      textTransform: "none !important",
      marginRight: ".5rem",
    },
  },

  "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-root .MuiDataGrid-cell:focus-within":
    {
      outline: "none",
    },

  "& .MuiDataGrid-virtualScrollerContent": {
    height: "unset !important",
    border: "none !important",
  },

  // row
  "& .MuiDataGrid-row": {
    // padding: "0.75rem 0 !important",
    height: "unset !important",
    maxHeight: "unset !important",
    minHeight: "unset !important",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #F0F0F0",

    "&:last-child": {
      borderBottom: "none",
    },
  },

  "& .MuiDataGrid-cell": {
    padding: "0.56rem 1rem !important",
    textTransform: "capitalize",
    color: "#111827 !important",
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    height: "fit-content !important",
    lineHeight: "unset !important",
    border: "none !important",
  },

  "& .status": {
    display: "inline",
    borderRadius: "222px",
    textAlign: "center",
    fontWeight: 600,
    padding: "0.26rem 1rem",
    fontSize: "0.75rem",
    width: "fit-content",
  },

  "& .success-status": {
    color: "#00A859",
    backgroundColor: "#00A8590D",
  },

  "& .danger-status": {
    color: "#FF3B30",
    backgroundColor: "#FF3B300D",
  },

  "& .info-status": {
    color: "#ff9f0a",
    backgroundColor: "#FF9F0A0D",
  },

  "& .disabled-status": {
    color: "#4B0804",
    backgroundColor: "#FFA29D",
  },

  "& .view-details": {
    color: "1rem",
    fontWeight: 600,
    textDecoration: "underline",
  },

  "& .MuiDataGrid-root .MuiDataGrid-columnHeader": {
    padding: "0 1rem",

    // "&:first-child": {
    //   padding: "0",
    // },
  },

  "& .tableBtn": {
    textTransform: "Capitalize",
    padding: "0.5rem 1rem",
    borderStyle: "solid",
    borderWidth: "1.5px",
    borderColor: theme.palette.primary.main,
    background: "transparent",
    color: theme.palette.primary.main,
  },

  "& .t-lowercase": {
    textTransform: "lowercase",
  },
}));
