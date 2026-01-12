"use client";
import Image from "next/image";
import { MainFrame, SignUpBanner } from "../../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { ZaButton, ZaInput } from "@/src/components";
import { CommunityIcon, EnvelopeIcon, LockIcon } from "@/src/assets/svg";
import { Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import React from "react";
import ReactCodeInput from "react-code-input";
import { useRouter } from "next/navigation";

interface IProps {
  email: string | undefined;
}

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Verification code is required")
    .max(6, "Enter 6 digit code"),
});

export const VerifyMainView: React.FC<IProps> = ({ email }) => {
  const router = useRouter();
  const initialValues = {
    code: "",
  };

  return (
    <MainFrame
      title="Check your email"
      details={
        <>
          Hello Boss, please enter the 6 digit code that was sent to{" "}
          <span className="text-[#0044EE]">{email}</span>
        </>
      }
    >
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          router.push("/email-verifed");
        }}
      >
        {({ isValid, touched, errors, handleSubmit, handleChange, values }) => (
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-start justify-between w-full">
                <label className="text-sm text-[#1A1A1A] font-semibold leading-[124%] tracking-[-0.012em]">
                  Enter code
                </label>

                <ZaButton
                  mode="secondary"
                  className="h-6! text-xs! rounded-sm! border-0! bg-[#F4F4F5]!"
                  text="Paste code"
                />
              </div>

              <ReactCodeInput
                name="code"
                value={values.code}
                type="number"
                fields={6}
                pattern="\d"
                onChange={(value: any) => {
                  const e = { target: { name: "code", value } };
                  handleChange(e);
                }}
                inputMode="numeric"
                className={
                  touched.code && errors.code ? "input_code_dannger" : ""
                }
              />
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center justify-between">
                <ZaButton
                  href="/change-email"
                  mode="secondary"
                  text={
                    <>
                      <Image
                        src="/images/icon/loop-icon.svg"
                        alt="loop icon"
                        width={20}
                        height={20}
                      />
                      Change Email
                    </>
                  }
                  link="/change-email"
                />

                <div className="text-sm text-[#1A1A1AB2] font-medium leading-[124%] tracking-[-0.012em]">
                  Resend Code in <span className="text-[#0044EE]">04:59</span>
                </div>
              </div>

              <ZaButton
                type="submit"
                disabled={!isValid || values.code.length !== 6}
                text={
                  <>
                    <Image
                      src="/images/icon/secured-shield-icon.svg"
                      alt="apple icon"
                      width={24}
                      height={24}
                    />
                    Verify
                  </>
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </MainFrame>
  );
};
