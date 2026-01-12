"use client";
import {
  StandardTextFieldProps,
  TextField,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import * as React from "react";
import { InputBox } from "./input.styles";
import { useField } from "formik";

interface CustomInputProps extends StandardTextFieldProps {
  name: string;
  isMultiline?: boolean;
  mRow?: number;
  isLabelAtTop?: boolean;
  icon?: any;
  label?: string;
  iconPosition?: "start" | "end";
  height?: string;
  bg?: string;
  rounded?: string;
  borderColor?: string;
  placeholderColor?: string;
  textColor?: string;
  isFormik?: boolean;
}

export const ZaInput: React.FC<CustomInputProps> = ({
  isFormik = false,
  ...props
}) => {
  return (
    <>
      {isFormik ? (
        <InputComponentWithFormik {...props} />
      ) : (
        <InputComponent {...props} />
      )}
    </>
  );
};

// Component without formik
const InputComponent: React.FC<CustomInputProps> = ({
  fullWidth,
  variant = "outlined",
  name,
  isLabelAtTop = true,
  icon,
  label = "",
  iconPosition = "start",
  height = "50px",
  bg,
  borderColor,
  textColor,
  placeholderColor,
  rounded,
  ...props
}) => {
  return (
    <InputBox fullWidth={fullWidth}>
      <TextField
        {...props}
        variant="filled"
        label={label}
        rows={
          props.multiline || props.isMultiline ? props.rows || props.mRow : 0
        }
        className="input"
        sx={{
          "& .MuiOutlinedInput-root": {
            height,
            backgroundColor: bg,
            borderRadius: rounded,
            borderColor,
            color: textColor,
          },

          "& ::placeholder": {
            color: placeholderColor,
          },
        }}
        InputProps={
          iconPosition === "start"
            ? {
                startAdornment: (
                  <>
                    {icon && (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    )}
                  </>
                ),
              }
            : {
                endAdornment: (
                  <>
                    {icon && (
                      <InputAdornment position="end">{icon}</InputAdornment>
                    )}
                  </>
                ),
              }
        }
      />
    </InputBox>
  );
};

// Component with formik
const InputComponentWithFormik: React.FC<CustomInputProps> = ({
  fullWidth,
  variant = "outlined",
  name,
  isLabelAtTop = true,
  icon,
  label = "",
  iconPosition = "start",
  height = "50px",
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <InputBox fullWidth={fullWidth}>
      <TextField
        {...field}
        {...props}
        label={label}
        variant="filled"
        rows={
          props.multiline || props.isMultiline ? props.rows || props.mRow : 0
        }
        className="input"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: height,
          },
        }}
        InputProps={
          iconPosition === "start"
            ? {
                startAdornment: (
                  <>
                    {icon && (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    )}
                  </>
                ),
              }
            : {
                endAdornment: (
                  <>
                    {icon && (
                      <InputAdornment position="end">{icon}</InputAdornment>
                    )}
                  </>
                ),
              }
        }
      />

      {meta.touched && meta.error && (
        <FormHelperText className={"feedback"}>{meta.error}</FormHelperText>
      )}
    </InputBox>
  );
};
