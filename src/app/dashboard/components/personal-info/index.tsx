import {
  CalendarIcon,
  CaretDownIcon,
  CircleCheckIcon,
  NigeriaFlagIcon,
  PhoneIcon,
  UserIcon,
  WhatsAppIcon,
} from "@/src/assets/svg";
import { ZaButton, ZaInput } from "@/src/components";
import { DropDownForPopOver } from "@/src/components/dropdown-for-popover";
import { PopoverComponent } from "@/src/components/popover";
import { hasLetterAndDigit } from "@/src/utils";
import { Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Enter a username"),
  firstName: Yup.string().required("Enter a Firstname"),
  lastName: Yup.string().required("Enter a Lastname"),
});

export const PersonalInformation = () => {
  const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    dob: "",
  };

  return (
    <section className="flex flex-col gap-9 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-[#1A1A1A] font-bold leading-[124%] tracking-[-0.012em]">
          Add personal information
        </h3>
        <p className="text-base text-[#1A1A1AB2] font-normal leading-[140%] tracking-[-0.01em]">
          Add your personal information to begin transacting.
        </p>
      </div>

      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // console.log({ values });
          //   router.push(`/verify-email?email=${values.email}`);
        }}
      >
        {({
          isValid,
          touched,
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
        }) => (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 w-full">
              <ZaInput
                fullWidth
                isFormik
                placeholder="Choose a username"
                type="text"
                label="Username"
                name="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                icon={<UserIcon bg={errors.username ? "#819099" : "#0044EE"} />}
              />

              <small
                className={`
                ${
                  hasLetterAndDigit(values.username)
                    ? "text-[#1A1A1AB2]"
                    : "text-[#1A1A1A5C]"
                }
                text-sm font-normal trans inline-flex items-center gap-2`}
              >
                <CircleCheckIcon
                  bg={
                    hasLetterAndDigit(values.username) ? "#1DC660" : "#C7CDD1"
                  }
                />
                Username must contain letter and number
              </small>
            </div>

            <ZaInput
              fullWidth
              isFormik
              placeholder="Enter firstname"
              type="text"
              label="Firstname"
              name="firstName"
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.firstName && Boolean(errors.firstName)}
              icon={<UserIcon bg={errors.firstName ? "#819099" : "#0044EE"} />}
            />

            <ZaInput
              fullWidth
              isFormik
              placeholder="Enter lastname"
              type="text"
              label="Lastname"
              name="lastName"
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.lastName && Boolean(errors.lastName)}
              icon={<UserIcon bg={errors.lastName ? "#819099" : "#0044EE"} />}
            />

            <ZaInput
              fullWidth
              isFormik
              placeholder="Choose date of birth"
              type="date"
              label="Date of Birth (Optional) "
              name="dob"
              value={values.dob}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.dob && Boolean(errors.dob)}
              icon={<CalendarIcon bg={errors.dob ? "#819099" : "#0044EE"} />}
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
                    />{" "}
                    Save
                  </>
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};
