"use client";
import * as React from "react";
import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface IProps extends ButtonProps {
  mode?: "primary" | "secondary" | "danger" | "primaryOutline" | "white";
  // size?: "xs" | "md";
  text: string | React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  // type?: "submit" | "button" | "reset";
  link?: string;
  click?: (arg?: any) => void | undefined | any;
  // className?: string;
}

export const ZaButton: React.FC<IProps> = ({
  mode = "primary",
  text,
  className,
  fullWidth,
  loading,
  size = "medium",
  ...rest
}) => {
  const theme = useTheme();
  //   const router = useRouter();

  const primaryVariant = {
    background: "#1A1A1A !important",
    color: "#ffffff",

    "&:disabled": {
      background: "#F4F4F5 !important",
      color: "#1A1A1A2E !important",
    },

    // "&:hover": {
    //   background: theme.palette.primary.light,
    // },
  };

  const secondaryVariant = {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    border: `1px solid #E1E1E2`,

    // "&:hover": {
    //   borderColor: "transparent",
    // },

    "&:disabled": {
      opacity: "0.5",
      color: theme.palette.primary.main,
    },
  };

  const styles =
    mode === "primary"
      ? primaryVariant
      : mode === "secondary"
      ? secondaryVariant
      : {};

  const sizeStyles =
    size === "medium"
      ? { padding: "0.75rem", height: "2.75rem", fontSize: "1rem" }
      : size === "small"
      ? { padding: "0.75rem", height: "2.25rem", fontSize: "0.875rem" }
      : {};

  return (
    <Button
      {...rest}
      sx={{
        ...styles,
        ...sizeStyles,
        textTransform: "none !important",
        fontWeight: 600,
      }}
      className={`  
      ${fullWidth ? "w-full" : ""}
      ${className}
      flex justify-center items-center gap-2 rounded font-medium
      hover:bg-opacity-80
  `}
      disabled={rest?.disabled || loading}
    >
      {text}
      {loading && (
        <svg
          className="animate-spin ms-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2761 4.38728C23.0373 6.53336 24 9.22373 24 12L18.6018 12C18.6018 10.4726 18.0722 8.99253 17.1032 7.81187C16.1343 6.63121 14.7859 5.82304 13.2879 5.52507C11.7899 5.2271 10.2349 5.45776 8.88793 6.17775C7.54092 6.89774 6.48523 8.06252 5.90074 9.47361C5.31625 10.8847 5.23912 12.4548 5.68249 13.9164C6.12586 15.378 7.0623 16.6406 8.33225 17.4892C9.60221 18.3377 11.1271 18.7197 12.6471 18.57C14.1671 18.4203 15.5882 17.7481 16.6682 16.6681L20.4853 20.4852C18.5222 22.4484 15.9391 23.6701 13.1762 23.9422C10.4133 24.2143 7.64156 23.52 5.33318 21.9776C3.0248 20.4352 1.32264 18.1401 0.516725 15.4834C-0.289186 12.8267 -0.148985 9.97275 0.91344 7.40781C1.97587 4.84288 3.89478 2.72568 6.34322 1.41696C8.79167 0.108231 11.6181 -0.311041 14.3411 0.230579C17.064 0.7722 19.5149 2.2412 21.2761 4.38728ZM23.2079 13.9122C23.7151 13.4051 24 12.7172 24 12L21.2958 12H18.5915C18.5915 12.7172 18.8764 13.4051 19.3836 13.9122C19.8907 14.4194 20.5785 14.7043 21.2958 14.7043C22.013 14.7043 22.7008 14.4194 23.2079 13.9122Z"
            fill="url(#paint0_angular_582_4724)"
          />
          <defs>
            <radialGradient
              id="paint0_angular_582_4724"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12 12) rotate(17.9279) scale(12.0795 12.0795)"
            >
              <stop stop-color="#F1F1F1" />
              <stop offset="0.9375" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      )}
    </Button>
  );
};
