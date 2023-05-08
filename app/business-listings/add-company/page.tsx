"use client";

import CompanyCategoryForm from "@/components/enlist/companyCategoryForm";
import CompanyContactForm from "@/components/enlist/companyContactForm";
import CompanyDetailsForm from "@/components/enlist/companyDetailsForm";
import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./../../../components/enlist/form.css";
import { isEmptyStatement } from "typescript";

type FormData = {
  companyName: string;
  streetAddress: string;
  building: string;
  city: string;
  zip: string;
  hideAddress: boolean;
  hasServiceArea: boolean;

  phoneNumber: string;
  websiteUrl: string;

  categories: string;
};

const INITIAL_DATA: FormData = {
  companyName: "",
  streetAddress: "",
  building: "",
  city: "",
  zip: "",
  hideAddress: true,
  hasServiceArea: false,

  phoneNumber: "",
  websiteUrl: "",

  categories: "",
};

const EnlistCompany = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [page, setPage] = useState(0);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setData((prevValues) => ({ ...prevValues, [name]: value }));
  //   setValue(name, value); // set the value in the react-hook-form state
  // };

  const CompanyDetailsSchema = yup.object({
    companyName: yup.string().required("Company name is required"),
    streetAddress: yup.string().required("streetAddress is required"),
    building: yup.string(),
    city: yup.string().required("City is required"),
    zip: yup.string().required("Zip is required").max(5),
    hideAddress: yup.boolean(),
    hasServiceArea: yup.boolean(),

    phoneNumber: yup
      .number()
      .required("This field is required")
      .min(10)
      .max(10),
    websiteUrl: yup.string().url("Please enter a valid URL"),

    categories: yup.string().required("This field is required"),
  });

  const FirstStepSchema = yup.object({
    companyName: yup.string().required("Company name is required"),
    streetAddress: yup.string().required("streetAddress is required"),
    building: yup.string(),
    city: yup.string().required("City is required"),
    zip: yup
      .string()
      .matches(/^[0-9]*$/, "Zip must be a number")
      .matches(/^\d{6}$/, "Zip code must be 6 digits")
      .required("Zip is required"),
    hideAddress: yup.boolean(),
    hasServiceArea: yup.boolean(),
  });

  const SecondStepSchema = yup.object({
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^(?:\+971|0)?(?:50|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/, {
        message: "Please enter a valid Abu Dhabi phone number",
      }),
    websiteUrl: yup
      .string()
      .url("Please enter a valid URL")
      .required("Website is required")
      .matches(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/, {
        message: "Please enter a valid website URL",
      }),
  });

  const ThirdStepSchema = yup.object({
    categories: yup.string().required("This field is required"),
  });

  const getSchemaForStep = (step: number) => {
    switch (step) {
      case 0:
        return FirstStepSchema;
      case 1:
        return SecondStepSchema;
      case 2:
        return ThirdStepSchema;
      default:
        return FirstStepSchema; // default to first step schema
    }
  };

  type FormValues = {
    companyName: string;
    streetAddress: string;
    building: string;
    city: string;
    zip: string;
    hideAddress: boolean;
    hasServiceArea: boolean;

    phoneNumber: string;
    websiteUrl: string;

    categories: string;
  };

  const form = useForm<FormValues>({
    defaultValues: {
      companyName: "",
      streetAddress: "",
      building: "",
      city: "",
      zip: undefined,
      hideAddress: true,
      hasServiceArea: false,

      phoneNumber: undefined,
      websiteUrl: "",

      categories: "",
    },
    resolver: yupResolver(getSchemaForStep(page)),
  });

  const { register, handleSubmit, formState, trigger, watch } = form;
  const { errors } = formState;

  // WATCH
  const companyNameValue = watch("companyName");
  const streetAddressValue = watch("streetAddress");
  const cityValue = watch("city");
  const zipValue = watch("zip");
  const phoneNumberValue = watch("phoneNumber");

  // STEPS
  async function next() {
    console.log("data", data);
    if (
      (await form.trigger([
        "companyName",
        "streetAddress",
        "building",
        "city",
        "zip",
        "hideAddress",
        "hasServiceArea",
      ])) &&
      Object.keys(errors).length === 0
    ) {
      setPage((i) => {
        if (i >= 2) return i;
        return i + 1;
      });
    }
  }

  function back() {
    setPage((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  // STEPS

  const Step1 = (
    <div className="companyDetailsForm ">
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Join Our Community with Ease
      </h1>
      <p className="text-sm mt-4 text-[#0B1E3F]">
        Join our community effortlessly and be a part of Abudhabi Malayalees,
        where you can connect and engage with like-minded individuals. Register
        now and experience a seamless onboarding process.
      </p>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-6 gap-x-5"
      > */}
      <div className="grid grid-cols-6 gap-x-5">
        <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
          What is the name of your company?
        </p>
        <div className="form-control col-span-6">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            placeholder="e.g. Google"
            {...register("companyName")}
            onBlur={() => trigger("companyName")}
          />
          <p className="error">{errors.companyName?.message}</p>
        </div>
        <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
          Where is your company located?
        </p>

        <div className="form-control col-span-6 ">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            id="streetAddress"
            placeholder="e.g. Sheikh Zayed St"
            {...register("streetAddress")}
            onBlur={() => trigger("streetAddress")}
          />
          <p className="error">{errors.streetAddress?.message}</p>
        </div>
        <div className="form-control col-span-2 mt-4">
          <label htmlFor="building">Apt/Suite (optional)</label>
          <input
            type="text"
            id="building"
            placeholder="#200"
            {...register("building")}
            onBlur={() => trigger("building")}
          />
          <p className="error">{errors.building?.message}</p>
        </div>
        <div className="form-control col-span-2 mt-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="e.g. Al Ain"
            {...register("city")}
            onBlur={() => trigger("city")}
          />
          <p className="error">{errors.city?.message}</p>
        </div>
        <div className="form-control col-span-2 mt-4">
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            id="zip"
            placeholder="126452"
            {...register("zip")}
            onBlur={() => trigger("zip")}
          />
          <p className="error">{errors.zip?.message}</p>
        </div>
        <label htmlFor="hideAddress" className="col-span-6 text-sm">
          <input
            type="checkbox"
            id="hideAddress"
            className="mt-4"
            {...register("hideAddress")}
          />
          <span className="ml-1">Don{`'`}t dispaly my address publicly</span>
        </label>
        <label htmlFor="hasServiceArea" className="col-span-6 text-sm">
          <input
            type="checkbox"
            id="hasServiceArea"
            className="my-4"
            {...register("hasServiceArea")}
          />
          <span className="ml-1">
            We deliver or provide service at customer locations
          </span>
        </label>
      </div>

      {/* <button className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px]">
          Add my company
        </button> */}
      {/* </form> */}
    </div>
  );

  const step2 = (
    <>
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        How will customers contact you?
      </h1>
      <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
        Make sure your customers can reach you - add your phone number now.
      </p>
      <div className="form-control col-span-6">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          id="phoneNumber"
          placeholder="e.g. +971 123 4567"
          {...register("phoneNumber")}
          onBlur={() => trigger("phoneNumber")}
        />
        <p className="error">{errors.phoneNumber?.message}</p>
      </div>

      <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
        Do you have a website?
      </p>

      <div className="form-control col-span-6 ">
        <label htmlFor="websiteUrl">Website URL (optional)</label>
        <input
          type="text"
          id="websiteUrl"
          placeholder="e.g. www.yourwebsite.com"
          {...register("websiteUrl")}
          onBlur={() => trigger("websiteUrl")}
        />
        <p className="error">{errors.websiteUrl?.message}</p>
      </div>
    </>
  );

  const step3 = (
    <div>
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Tell Us About Your Business
      </h1>
      <p className="font-serif font-medium text-xl  mt-10 mb-4">
        Attract the right customers by classifying your business.
      </p>
      <div className="form-control max-w-xl">
        <label htmlFor="categories">Business Categories</label>
        <input
          type="text"
          id="categories"
          placeholder="e.g. Marketing, consultent, design"
          {...register("categories")}
          onBlur={() => trigger("categories")}
        />
        <p className="error">{errors.categories?.message}</p>
      </div>

      {/* <button
        className="font-normal font-inter my-9 px-6 py-2 rounded bg-orange text-white col-span-2 text-[15px]"
        onClick={() => {}}
      >
        Continue
      </button> */}
    </div>
  );

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        {page !== 0 && (
          <div className="w-full text-inter mb-6 ">
            <button onClick={back}>{`<`} Previous</button>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {page === 0 && Step1}
          {page === 1 && step2}
          {page === 2 && step3}
          {/* <button className="bg-orange">click</button> */}
          <button
            className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit"
            onClick={next}
          >
            {page !== 2 && (page === 0 ? "Add my company" : "Continue")}
            {page === 2 && "Finish"}
          </button>
        </form>
      </div>
      <EnlistSkeleton
        companyName={companyNameValue}
        streetAddress={streetAddressValue}
        city={cityValue}
        zip={zipValue}
        phoneNumber={phoneNumberValue}
      />
    </div>
  );
};

export default EnlistCompany;

// "use client";

// import CompanyCategoryForm from "@/components/enlist/companyCategoryForm";
// import CompanyContactForm from "@/components/enlist/companyContactForm";
// import CompanyDetailsForm from "@/components/enlist/companyDetailsForm";
// import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
// import UserForm from "@/components/enlist/userForm";
// import { useMultistepForm } from "@/hooks/useMultistepForm";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// type FormData = {
//   companyName: string;
//   streetAddress: string;
//   building: string;
//   city: string;
//   zip: number | null;
//   hideAddress: boolean;
//   hasServiceArea: boolean;

//   phoneNumber: number;
//   websiteUrl: string;

//   categories: string;
// };

// const INITIAL_DATA: FormData = {
//   companyName: "",
//   streetAddress: "",
//   building: "",
//   city: "",
//   zip: null,
//   hideAddress: true,
//   hasServiceArea: false,

//   phoneNumber: 0,
//   websiteUrl: "",

//   categories: "",
// };

// const EnlistCompany = () => {

//   const [data, setData] = useState(INITIAL_DATA);
//   const { handleSubmit } = useForm();
//   const [page, setPage] = useState(0);

//   function updateFields(fields: Partial<FormData>) {
//     setData((prev) => {
//       return { ...prev, ...fields };
//     });
//   }

//   const onSubmit = (data: Partial<FormData>) => {
//     console.log(data);
//     // Call function to move to next step
//   };

//   const handleNextClick = () => {
//     handleSubmit(onSubmit);
//     next;
//     console.log("clicked");
//   };

//   function next() {
//     setPage((i) => {
//       if (i >= 3) return i;
//       return i + 1;
//     });
//   }

//   function back() {
//     setPage((i) => {
//       if (i <= 0) return i;
//       return i - 1;
//     });
//   }

//   return (
//     <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
//       <div className="flex flex-col px-6 md:px-8 w-full">
//         {page !== 0 && (
//           <div className="w-full text-inter mb-6 ">
//             <button onClick={back}>{`<`} Previous</button>
//           </div>
//         )}
//         {page === 0 && <CompanyDetailsForm key={1}/>}
//         {page === 1 && (
//           <CompanyContactForm key={2} data={data} updateFields={updateFields} />
//         )}
//         {page === 2 && (
//           <CompanyCategoryForm
//             key={3}
//             {...data}
//             updateFields={updateFields}
//             onSubmit={onSubmit}
//             next={next}
//           />
//         )}
//         {page === 3 && <UserForm key={4} />}
//         <button
//           className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit"
//           onClick={next}
//         >
//           {page !== 3 && (page === 0 ? "Add my company" : "Continue")}
//           {page === 3 && "Finish"}
//         </button>
//       </div>
//       <EnlistSkeleton />
//     </div>
//   );
// };

// export default EnlistCompany;

// "use client";

// import CompanyCategoryForm from "@/components/enlist/companyCategoryForm";
// import CompanyContactForm from "@/components/enlist/companyContactForm";
// import CompanyDetailsForm from "@/components/enlist/companyDetailsForm";
// import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
// import Step1 from "@/components/enlist/step1";
// import Step2 from "@/components/enlist/step2";
// import Step3 from "@/components/enlist/step3";
// import UserForm from "@/components/enlist/userForm";
// import { useMultistepForm } from "@/hooks/useMultistepForm";
// import { useState } from "react";

// type FormData = {
//   companyName: string;
//   streetAddress: string;
//   building: string;
//   city: string;
//   zip: number | null;
//   hideAddress: boolean;
//   hasServiceArea: boolean;

//   phoneNumber: number | null;
//   websiteUrl: string;

//   categories: string;
// };

// const INITIAL_DATA: FormData = {
//   companyName: "",
//   streetAddress: "",
//   building: "",
//   city: "",
//   zip: null,
//   hideAddress: true,
//   hasServiceArea: false,

//   phoneNumber: null,
//   websiteUrl: "",

//   categories: "",
// };

// const EnlistCompany = () => {
//   const [page, setPage] = useState(0);

//   function pageTitle() {
//     {
//       page === 0 && <Step1Title />;
//     }
//     {
//       page === 1 && <Step2Title />;
//     }
//     {
//       page === 2 && <Step3Title />;
//     }
//   }

//   function pageDisplay() {
//     if (page === 0) {
//       return <Step1 />;
//     } else if (page === 1) {
//       return <Step2 />;
//     } else if (page === 2) {
//       return <Step3 />;
//     }
//   }
//   return (
//     <>
//       {pageTitle}
//       {pageDisplay}
//     </>
//   );
// };

// function Step1Title() {
//   return (
//     <>
//       <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
//         Join Our Community with Ease
//       </h1>
//       <p className="text-sm mt-4 text-[#0B1E3F]">
//         Join our community effortlessly and be a part of Abudhabi Malayalees,
//         where you can connect and engage with like-minded individuals. Register
//         now and experience a seamless onboarding process.
//       </p>
//     </>
//   );
// }

// function Step2Title() {
//   return (
//     <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
//       How will customers contact you?
//     </h1>
//   );
// }
// function Step3Title() {
//   return (
//     <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
//       Tell Us About Your Business
//     </h1>
//   );
// }
