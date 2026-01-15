import {
  CaretDownIcon,
  NigeriaFlagIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/src/assets/svg";
import { ZaButton, ZaInput } from "@/src/components";
import { DropDownForPopOver } from "@/src/components/dropdown-for-popover";
import { PopoverComponent } from "@/src/components/popover";
import { Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Enter valid phone number"),
});

export const VerifyPhone = () => {
  const initialValues = {
    countryCode: "+234",
    verificationOption: "whatsapp",
    phone: "",
  };

  const countryCodes = [
    {
      name: "+234",
      flag: <NigeriaFlagIcon />,
    },
  ];

  const verificationOptions = [
    {
      name: "WhatsApp",
      value: "whatsapp",
      icon: <WhatsAppIcon />,
    },
    {
      name: "SMS",
      value: "sms",
      icon: <PhoneIcon />,
    },
  ];

  const getCodeSelected = (code: string) => {
    return countryCodes.find((item) => item.name === code);
  };

  return (
    <section className="flex flex-col gap-9 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-[#1A1A1A] font-bold leading-[124%] tracking-[-0.012em]">
          Verify phone number
        </h3>
        <p className="text-base text-[#1A1A1AB2] font-normal leading-[140%] tracking-[-0.01em]">
          Please enter a phone number where you would like to receive the
          verification code
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
            <ul className="flex items-center gap-3">
              {verificationOptions.map((opt, id) => (
                <ZaButton
                  key={id}
                  mode="secondary"
                  onClick={()=>setFieldValue("verificationOption", opt.value)}
                  className={`
                    ${values.verificationOption === opt.value ? "bg-[#0044EE]! text-white! border-[#0044EE]!" : ""}
                    px-3! py-2! rounded-[50px]! trans!`}
                  text={
                    <>
                      {opt.icon}
                      {opt.name}
                    </>
                  }
                />
              ))}
            </ul>

            <ZaInput
              fullWidth
              isFormik
              placeholder="Type your phone number"
              type="tel"
              label="Phone Number"
              name="phone"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.phone && Boolean(errors.phone)}
              icon={
                <PopoverComponent
                  title={
                    <div className="inline-flex items-center text-[#1A1A1AB2]">
                      {getCodeSelected(values.countryCode)?.flag}
                      &nbsp;
                      {getCodeSelected(values.countryCode)?.name}
                      <CaretDownIcon />
                    </div>
                  }
                >
                  <DropDownForPopOver>
                    {countryCodes.map((code) => (
                      <div
                        onClick={() => setFieldValue("countryCode", code.name)}
                        className="item"
                      >
                        {code.flag} {code.name}
                      </div>
                    ))}
                  </DropDownForPopOver>
                </PopoverComponent>
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
                    />{" "}
                    Verify
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
