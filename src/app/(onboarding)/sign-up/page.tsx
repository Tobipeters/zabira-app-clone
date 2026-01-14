"use client";
import Image from "next/image";
import { MainFrame, SignUpBanner } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { ZaButton, ZaInput } from "@/src/components";
import { CommunityIcon, EnvelopeIcon, LockIcon } from "@/src/assets/svg";
import { Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string().required("Password is required"),
});

export default function SignUp() {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
    referralCode: "",
  };

  return (
    <MainFrame
      className="mt-23"
      title="Create an account in 2 minutes!"
      footerText={
        <div className="text-center text-sm md:text-base">
          Already have an account?{" "}
          <Link href={"#"} className="text-[#0044EE] font-medium">
            Login
          </Link>
        </div>
      }
    >
      <SignUpBanner />

      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // console.log({ values });
          router.push(`/verify-email?email=${values.email}`);
        }}
      >
        {({
          isValid,
          touched,
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          values,
        }) => (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <ZaInput
              fullWidth
              isFormik
              icon={<EnvelopeIcon bg={errors.email ? "#819099" : "#0044EE"} />}
              placeholder="Type your email"
              type="email"
              label="Email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
            />

            <ZaInput
              fullWidth
              isFormik
              icon={<LockIcon bg={errors.password ? "#819099" : "#0044EE"} />}
              placeholder="Type your password"
              type="password"
              label="Password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
            />

            <ZaInput
              fullWidth
              isFormik
              icon={
                <CommunityIcon
                  bg={!values.referralCode ? "#819099" : "#0044EE"}
                />
              }
              placeholder="Enter referral code"
              type="text"
              label="Referral Code (Optional)"
              name="referralCode"
              value={values.referralCode}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.referralCode && Boolean(errors.referralCode)}
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  By clicking &apos;Sign Up&apos;, I agree to Zabira&apos;s{" "}
                  <Link href={"#"} className="text-[#0044EE] font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"#"} className="text-[#0044EE] font-medium">
                    Privacy Policy.
                  </Link>
                </>
              }
            />

            <div className="flex flex-col gap-6 w-full">
              <ZaButton
                type="submit"
                disabled={!isValid}
                text={
                  <>
                    <Image
                      src="/images/icon/secured-shield-icon.svg"
                      alt="apple icon"
                      width={24}
                      height={24}
                    />
                    Sign up
                  </>
                }
              />

              <small className="text-sm text-[#1A1A1AB2] font-medium text-center leading-[124%] tracking-[-1.2%]">
                Or continue with
              </small>

              <div className="flex items-center justify-center flex-nowrap gap-6">
                <ZaButton
                  fullWidth
                  className="h-14! w-14! md:w-full! md:h-11!"
                  mode="secondary"
                  text={
                    <>
                      <Image
                        src="/images/icon/google-icon.svg"
                        alt="apple icon"
                        width={24}
                        height={24}
                      />
                      <span className="hidden md:inline">Google</span>
                    </>
                  }
                />
                <ZaButton
                  fullWidth
                  className="h-14! w-14! md:w-full! md:h-11!"
                  text={
                    <>
                      <Image
                        src="/images/icon/apple-icon.svg"
                        alt="apple icon"
                        width={24}
                        height={24}
                      />
                      <span className="hidden md:inline">Apple</span>
                    </>
                  }
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </MainFrame>
  );
}
