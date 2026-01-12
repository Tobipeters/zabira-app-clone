"use client";
import { MainFrame } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { ZaButton, ZaInput } from "@/src/components";
import { EnvelopeIcon } from "@/src/assets/svg";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
});

export default function ChangeEmaul() {
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  return (
    <MainFrame
      title="Change email"
      details="Enter the email address where you would like to receive the verification code"
    >
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

            <div className="flex flex-col gap-6 w-full">
              <ZaButton type="submit" disabled={!isValid} text="Change Email" />
            </div>
          </form>
        )}
      </Formik>
    </MainFrame>
  );
}
