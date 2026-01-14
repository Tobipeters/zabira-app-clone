import { ThemeOptions } from "@mui/material/styles";

// Extend the Theme interface to include your custom property
declare module "@mui/material/styles" {
  interface Theme {
    drawerWidth: number;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    drawerWidth?: number;
  }
}

export const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-geist)",
  },
  palette: {
    primary: {
      main: "#1A1A1A",
    },
    secondary: {
      main: "#FCFCFC",
    },
    error: {
      main: "#FF3B30",
    },
    // success: {
    //   light: "#76D7C4",
    //   main: "#34C759",
    // },
    // info: {
    //   light: "#B1B1B1",
    //   main: "#454545",
    //   dark: "#121212",
    // },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  drawerWidth: 280,

  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "1.25rem",
          },

          "& .MuiBackdrop-root": {
            // backgroundColor: "rgba(24, 119, 242, 0.2)",
            backgroundColor: "#rgba(10, 24, 32, 0.3)",
            backdropFilter: "blur(5px)"
          },

          "@media (max-width: 576px)": {
            "& .MuiDialog-container": {
              // alignItems: "flex-end",
            },

            "& .MuiPaper-root": {
              // borderRadius: "1.25rem 1.25rem 0 0",
            },
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "35px",
          width: "100%",
          "& .MuiTabs-list": {
            gap: "1.25rem",

            "@media (max-width: 576px)": {
              gap: 0,
            },
          },

          "& .MuiTab-root": {
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            fontSize: "1rem",
            lightHeight: "100%",
            fontWeight: 500,
            color: "#0D0D0D80",
            borderRadius: "0.5rem",
            minHeight: "unset",
            minWidth: "unset",

            "@media (max-width: 576px)": {
              minWidth: "unset",
              padding: "0.25rem 1rem",
            },
          },

          "& .MuiTab-root.Mui-selected": {
            // color: "#01A204",
            backgroundColor: "transparent",
          },

          "& .MuiTabs-indicator": {
            bottom: 0,
            height: "3px",
            borderRadius: "100px",
            // display: "none",
          },
        },
      },
    },

    MuiFormGroup: {
      styleOverrides: {
        root: {
          "& .f_rl": {
            marginLeft: "-0.05rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",

            "& .MuiRadio-root": {
              padding: "0.05rem",
            },

            "& .MuiTypography-root": {
              fontSize: "0.75rem",
              color: "#5A5B60",
            },
          },
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          color: "#1A1A1A",

          "& .MuiInputBase-root, .MuiSelect-outlined.MuiSelect-outlined": {
            background: "#FFFFFF",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #D8D8D8",
            lineHeight: "140%",
            padding: "2.8rem 1rem 1rem",
            color: "#1A1A1A",
            transition: "",

            "&:hover": {
              // background: "transparent !important",
              // borderColor: "#0044EE !important",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              top: "0 !important",
              borderWidth: "0 !important",
            },

            "& input, .MuiSelect-outlined": {
              padding: "0 !important",
              border: "none !important",
            },

            "& legend": {
              display: "none",
            },

            "&::placeholder": {
              lineHeight: "140%",
              fontWeight: 400,
              fontSize: "0.875rem",
              color: "#1A1A1A5C",
            },

            "&::before": {
              borderBottom: "none !important",
            },

            "&::after": {
              borderBottom: "none !important",
            },

            "@media (max-width: 576px)": {
              // borderRadius: "0.625rem",
              // padding: "0.75rem 0.75rem",
              // height: "2.75rem",
              fontSize: "1rem",
            },
          },

          "& .Mui-focused": {
            borderColor: "#0044EE",
            backgroundColor: "transparent !important",
            // boxShadow: "0px 0px 0px 4px rgba(1, 140, 205, 0.05)",
          },

          "& .Mui-error": {
            color: "#1A1B1D66",
            border: "1px solid #FF3B30 !important",
            backgroundColor: "rgba(255, 59, 48, 0.05) !important",
          },

          "& .Mui-disabled": {
            backgroundColor: "#E4E4E4",
            color: "#1A1B1D66",
            borderColor: "#E6E6E8",
          },

          "& .MuiInputLabel-root": {
            transform: "translate(1rem, 1rem) scale(0.75) !important",
            lineHeight: "124%",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: "#1A1A1A",
            border: "none !important",
          },

          "& .MuiInputLabel-root .Mui-error": {
            color: "#1A1B1D66 !important",
          },

          "& .MuiInputAdornment-positionStart": {
            paddingLeft: "0",
            marginTop: "0 !important",
          },

          "& .MuiInputBase-adornedStart": {
            "& .MuiInputBase-input": {
              paddingLeft: 0,
            },
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: "#6A6A6A",
          fontSize: "0.75rem",
          lineHeight: "20%",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",

          "& .MuiCheckbox-root": {
            padding: "0.125rem",
            color: "#D0D0D4",
            borderRadius: "6px",

            "&.Mui-checked": {
              color: "#0044EE !important",
            },
          },
          "& .MuiTypography-root": {
            fontSize: "0.875rem",
            color: "#1A1A1A",
            fontWeight: 400,
            lineHeight: "140%",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          border: "none",

          "& .MuiInputBase-root": {
            borderColor: "transparent !important",
            borderRadius: "0.875rem",
            backgroundColor: "#F0F0F0",
            minHeight: "50px",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent !important",
            },

            "& .Mui-focused": {
              borderColor: "#1877F2 !important",
              backgroundColor: "#F0F0F0 !important",
              boxShadow: "0px 0px 0px 1px rgba(38, 132, 252, 0.05)",
            },
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            // fill: "rgba(231, 231, 231)",
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 50,
          height: 30,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              // transform: 'translateX(16px)',
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: "#33cf4d",
              border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color: "white",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.7,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 25,
            height: 26,
          },
          "& .MuiSwitch-track": {
            borderRadius: 30 / 2,
            backgroundColor: "#E9E9EA",
            opacity: 1,
            // transition:
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "20px",
          fontWeight: 500,
          fontSize: "0.875rem",
          transition: "0.3s all ease-in-out",
          borderRadius: "0.5rem",
          padding: "0.375rem 0.875rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          textTransform: "none",
          height: "2rem",

          "@media (max-width: 576px)": {
            padding: "0.75rem",
            height: "2.75rem",
            borderRadius: "0.625rem",
          },
        },
      },
    },

 
  },
};
