"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./../../../components/enlist/form.css";

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
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .max(10)
      .min(10),
    websiteUrl: yup.string(),
    // .matches(
    //   /^(?:https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
    //   "Please enter a valid website URL"
    // ),
    categories: yup.string().required("This field is required"),
  });

  const SecondStepSchema = yup.object({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be atleast 8 charecters"),
    confirmPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "password must match")
      .nullable(),
  });

  const getSchemaForStep = (step: number) => {
    switch (step) {
      case 0:
        return FirstStepSchema;
      case 1:
        return SecondStepSchema;
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
      zip: "",
      hideAddress: true,
      hasServiceArea: false,

      phoneNumber: "",
      websiteUrl: "",

      categories: "",
    },
    resolver: yupResolver(getSchemaForStep(page)),
  });

  const { register, handleSubmit, formState, trigger, watch, setValue } = form;
  const { errors } = formState;

  // WATCH
  const companyNameValue = watch("companyName");
  const streetAddressValue = watch("streetAddress");
  const cityValue = watch("city");
  const zipValue = watch("zip");
  const phoneNumberValue = watch("phoneNumber");
  const websiteUrlValue = watch("websiteUrl");

  // STEPS
  async function next() {
    setIsSubmitted(true);
    handleSubmit(onSubmit)();
    if (page === 0) {
      if (((await trigger()) && Object.keys(errors).length) === 0) {
        setPage((i) => {
          if (i >= 2) return i;
          return i + 1;
        });
      }
    } else if (page === 1) {
      console.log("error", errors);
      if (
        (await form.trigger(["phoneNumber", "websiteUrl"])) &&
        Object.keys(errors).length === 0
      ) {
        setPage((i) => {
          if (i >= 2) return i;
          return i + 1;
        });
      }
    }
  }

  function back() {
    setPage((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  // STEPS
  const onSubmit = (d: FormValues) => {
    setData((prevData) => ({ ...prevData, ...d }));
    setIsSubmitted(true);
  };

  const isError = Object.keys(errors).length !== 0;
  const isCompany = true;

  const Step1 = (
    <div className="companyDetailsForm ">
      <h1 className="font-semibold font-playfair text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Join Our Community with Ease
      </h1>
      <p className="text-sm mt-4 text-[#0B1E3F]">
        Join our community effortlessly and be a part of Abudhabi Malayalees,
        where you can connect and engage with like-minded individuals. Register
        now and experience a seamless onboarding process.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            <p className="error">
              {(isSubmitted || errors.companyName) &&
                errors.companyName?.message}
            </p>
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

          {/* contact  */}
          <h1 className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
            How will customers contact you?
          </h1>
          <div className="form-control col-span-6">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="tel"
              pattern="[0-9]"
              id="phoneNumber"
              placeholder="e.g. +971 123 4567"
              {...register("phoneNumber")}
              onBlur={() => trigger("phoneNumber")}
            />
            <p className="error">{errors.phoneNumber?.message}</p>
          </div>

          <div className="form-control col-span-6 mt-4">
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

          {/* categories */}
          <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
            Attract the right customers by classifying your business.
          </p>
          <div className="form-control col-span-6">
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

          {/* checkboxes */}
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
          <button
            className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit ${
              isError ? "bg-opacity-50" : ""
            }`}
            type="button"
            onClick={next}
          >
            Add my company
          </button>
        </div>
      </form>
    </div>
  );

  const Step2 = () => {
    type FormValues = {
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    const form = useForm<FormValues>({
      defaultValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      resolver: yupResolver(SecondStepSchema),
    });

    const { register, handleSubmit, formState, trigger } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
      console.log(data);
    };
    return (
      <div className="userForm">
        <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-3xl">
          Congratulations! Your company page is ready.
        </h1>
        <p className=" mt-4">
          Register to save your updates and publish your company page
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="my-5 grid grid-cols-2 gap-x-5 gap-y-3"
        >
          <div className="form-control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="e.g. Harry"
              {...register("firstname")}
              onBlur={() => trigger("firstname")}
            />
            <p className="error">{errors.firstname?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="e.g. Brook"
              {...register("lastname")}
              onBlur={() => trigger("lastname")}
            />
            <p className="error">{errors.lastname?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="e.g. harrybrook@business.com"
              {...register("email")}
              onBlur={() => trigger("email")}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              {...register("password")}
              onBlur={() => trigger("password")}
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              id="confirmPassword"
              {...register("confirmPassword")}
              onBlur={() => trigger("confirmPassword")}
            />
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        {page !== 0 && (
          <div className="w-full text-inter mb-6 ">
            <button onClick={back}>{`<`} Previous</button>
          </div>
        )}
        {/* <form onSubmit={handleSubmit(onSubmit)} noValidate> */}
        {page === 0 && Step1}
        {page === 1 && <Step2 />}
        {/* <button className="bg-orange">click</button> */}
        {/* <button
            className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit ${
              isError ? "bg-opacity-50" : ""
            }`}
            onClick={next}
            disabled={isError}
          >
            {page !== 1 && (page === 0 ? "Add my company" : "Continue")}
            {page === 1 && "Finish"}
          </button> */}
        {/* </form> */}
      </div>
      <EnlistSkeleton
        companyName={companyNameValue}
        streetAddress={streetAddressValue}
        city={cityValue}
        zip={zipValue}
        phoneNumber={phoneNumberValue}
        websiteUrl={websiteUrlValue}
        isCompany={isCompany}
      />
    </div>
  );
};

export default EnlistCompany;

// "use client";

// import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
// import UserForm from "@/components/enlist/userForm";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import "./../../../components/enlist/form.css";

// type FormData = {
//   companyName: string;
//   streetAddress: string;
//   building: string;
//   city: string;
//   zip: string;
//   hideAddress: boolean;
//   hasServiceArea: boolean;

//   phoneNumber: string;
//   websiteUrl: string;

//   categories: string;
// };

// const INITIAL_DATA: FormData = {
//   companyName: "",
//   streetAddress: "",
//   building: "",
//   city: "",
//   zip: "",
//   hideAddress: true,
//   hasServiceArea: false,

//   phoneNumber: "",
//   websiteUrl: "",

//   categories: "",
// };

// const EnlistCompany = () => {
//   const [data, setData] = useState(INITIAL_DATA);
//   const [page, setPage] = useState(0);

//   const FirstStepSchema = yup.object({
//     companyName: yup.string().required("Company name is required"),
//     streetAddress: yup.string().required("streetAddress is required"),
//     building: yup.string(),
//     city: yup.string().required("City is required"),
//     zip: yup
//       .string()
//       .matches(/^[0-9]*$/, "Zip must be a number")
//       .matches(/^\d{6}$/, "Zip code must be 6 digits")
//       .required("Zip is required"),
//     hideAddress: yup.boolean(),
//     hasServiceArea: yup.boolean(),
//     phoneNumber: yup
//       .string()
//       .required("Phone number is required")
//       .max(10)
//       .min(10),
//     websiteUrl: yup
//       .string()
//       .matches(
//         /^(?:https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
//         "Please enter a valid website URL"
//       ),
//     categories: yup.string().required("This field is required"),
//   });

//   const SecondStepSchema = yup.object({
//     firstname: yup.string().required("Firstname is required"),
//     lastname: yup.string().required("Lastname is required"),
//     email: yup
//       .string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .required("Password is required")
//       .min(8, "Password must be atleast 8 charecters"),
//     confirmPassword: yup
//       .string()
//       .required("Confirm your password")
//       .oneOf([yup.ref("password")], "password must match")
//       .nullable(),
//   });

//   const getSchemaForStep = (step: number) => {
//     switch (step) {
//       case 0:
//         return FirstStepSchema;
//       case 1:
//         return SecondStepSchema;
//       default:
//         return FirstStepSchema; // default to first step schema
//     }
//   };

//   type FormValues = {
//     companyName: string;
//     streetAddress: string;
//     building: string;
//     city: string;
//     zip: string;
//     hideAddress: boolean;
//     hasServiceArea: boolean;

//     phoneNumber: string;
//     websiteUrl: string;

//     categories: string;
//   };

//   const form = useForm<FormValues>({
//     defaultValues: {
//       companyName: "",
//       streetAddress: "",
//       building: "",
//       city: "",
//       zip: "",
//       hideAddress: true,
//       hasServiceArea: false,

//       phoneNumber: "",
//       websiteUrl: "",

//       categories: "",
//     },
//     resolver: yupResolver(getSchemaForStep(page)),
//   });

//   const { register, handleSubmit, formState, trigger, watch } = form;
//   const { errors } = formState;

//   // WATCH
//   const companyNameValue = watch("companyName");
//   const streetAddressValue = watch("streetAddress");
//   const cityValue = watch("city");
//   const zipValue = watch("zip");
//   const phoneNumberValue = watch("phoneNumber");
//   const websiteUrlValue = watch("websiteUrl");

//   // STEPS
//   async function next() {
//     if (page === 0) {
//       if ((await Object.keys(errors).length) === 0) {
//         setPage((i) => {
//           if (i >= 2) return i;
//           return i + 1;
//         });
//       }
//     } else if (page === 1) {
//       console.log("error", errors);
//       if (
//         (await form.trigger(["phoneNumber", "websiteUrl"])) &&
//         Object.keys(errors).length === 0
//       ) {
//         setPage((i) => {
//           if (i >= 2) return i;
//           return i + 1;
//         });
//       }
//     }
//   }

//   function back() {
//     setPage((i) => {
//       if (i <= 0) return i;
//       return i - 1;
//     });
//   }
//   // STEPS

//   const Step1 = (
//     <div className="companyDetailsForm ">
//       <h1 className="font-semibold font-playfair text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
//         Join Our Community with Ease
//       </h1>
//       <p className="text-sm mt-4 text-[#0B1E3F]">
//         Join our community effortlessly and be a part of Abudhabi Malayalees,
//         where you can connect and engage with like-minded individuals. Register
//         now and experience a seamless onboarding process.
//       </p>
//       {/* <form
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate
//         className="grid grid-cols-6 gap-x-5"
//       > */}
//       <div className="grid grid-cols-6 gap-x-5">
//         <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
//           What is the name of your company?
//         </p>
//         <div className="form-control col-span-6">
//           <label htmlFor="companyName">Company Name</label>
//           <input
//             type="text"
//             id="companyName"
//             placeholder="e.g. Google"
//             {...register("companyName")}
//             onBlur={() => trigger("companyName")}
//           />
//           <p className="error">{errors.companyName?.message}</p>
//         </div>
//         <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
//           Where is your company located?
//         </p>

//         <div className="form-control col-span-6 ">
//           <label htmlFor="streetAddress">Street Address</label>
//           <input
//             type="text"
//             id="streetAddress"
//             placeholder="e.g. Sheikh Zayed St"
//             {...register("streetAddress")}
//             onBlur={() => trigger("streetAddress")}
//           />
//           <p className="error">{errors.streetAddress?.message}</p>
//         </div>
//         <div className="form-control col-span-2 mt-4">
//           <label htmlFor="building">Apt/Suite (optional)</label>
//           <input
//             type="text"
//             id="building"
//             placeholder="#200"
//             {...register("building")}
//             onBlur={() => trigger("building")}
//           />
//           <p className="error">{errors.building?.message}</p>
//         </div>
//         <div className="form-control col-span-2 mt-4">
//           <label htmlFor="city">City</label>
//           <input
//             type="text"
//             id="city"
//             placeholder="e.g. Al Ain"
//             {...register("city")}
//             onBlur={() => trigger("city")}
//           />
//           <p className="error">{errors.city?.message}</p>
//         </div>
//         <div className="form-control col-span-2 mt-4">
//           <label htmlFor="zip">Zip</label>
//           <input
//             type="text"
//             inputMode="numeric"
//             pattern="[0-9]"
//             id="zip"
//             placeholder="126452"
//             {...register("zip")}
//             onBlur={() => trigger("zip")}
//           />
//           <p className="error">{errors.zip?.message}</p>
//         </div>

//         {/* contact  */}
//         <h1 className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
//           How will customers contact you?
//         </h1>
//         <div className="form-control col-span-6">
//           <label htmlFor="phoneNumber">Phone number</label>
//           <input
//             type="tel"
//             pattern="[0-9]"
//             id="phoneNumber"
//             placeholder="e.g. +971 123 4567"
//             {...register("phoneNumber")}
//             onBlur={() => trigger("phoneNumber")}
//           />
//           <p className="error">{errors.phoneNumber?.message}</p>
//         </div>

//         <div className="form-control col-span-6 mt-4">
//           <label htmlFor="websiteUrl">Website URL (optional)</label>
//           <input
//             type="text"
//             id="websiteUrl"
//             placeholder="e.g. www.yourwebsite.com"
//             {...register("websiteUrl")}
//             onBlur={() => trigger("websiteUrl")}
//           />
//           <p className="error">{errors.websiteUrl?.message}</p>
//         </div>

//         {/* categories */}
//         <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
//           Attract the right customers by classifying your business.
//         </p>
//         <div className="form-control col-span-6">
//           <label htmlFor="categories">Business Categories</label>
//           <input
//             type="text"
//             id="categories"
//             placeholder="e.g. Marketing, consultent, design"
//             {...register("categories")}
//             onBlur={() => trigger("categories")}
//           />
//           <p className="error">{errors.categories?.message}</p>
//         </div>

//         {/* checkboxes */}
//         <label htmlFor="hideAddress" className="col-span-6 text-sm">
//           <input
//             type="checkbox"
//             id="hideAddress"
//             className="mt-4"
//             {...register("hideAddress")}
//           />
//           <span className="ml-1">Don{`'`}t dispaly my address publicly</span>
//         </label>
//         <label htmlFor="hasServiceArea" className="col-span-6 text-sm">
//           <input
//             type="checkbox"
//             id="hasServiceArea"
//             className="my-4"
//             {...register("hasServiceArea")}
//           />
//           <span className="ml-1">
//             We deliver or provide service at customer locations
//           </span>
//         </label>
//       </div>

//       {/* <button className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px]">
//           Add my company
//         </button> */}
//       {/* </form> */}
//     </div>
//   );

//   const Step2 = () => {
//     type FormValues = {
//       firstname: string;
//       lastname: string;
//       email: string;
//       password: string;
//       confirmPassword: string;
//     };

//     const form = useForm<FormValues>({
//       defaultValues: {
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       },
//       resolver: yupResolver(SecondStepSchema),
//     });

//     const { register, handleSubmit, formState, trigger } = form;
//     const { errors } = formState;

//     const onSubmit = (data: FormValues) => {
//       console.log(data);
//     };
//     return (
//       <div className="userForm">
//         <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-3xl">
//           Congratulations! Your company page is ready.
//         </h1>
//         <p className=" mt-4">
//           Register to save your updates and publish your company page
//         </p>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           noValidate
//           className="my-5 grid grid-cols-2 gap-x-5 gap-y-3"
//         >
//           <div className="form-control">
//             <label htmlFor="firstname">First Name</label>
//             <input
//               type="text"
//               id="firstname"
//               placeholder="e.g. Harry"
//               {...register("firstname")}
//               onBlur={() => trigger("firstname")}
//             />
//             <p className="error">{errors.firstname?.message}</p>
//           </div>
//           <div className="form-control">
//             <label htmlFor="lastname">Last Name</label>
//             <input
//               type="text"
//               id="lastname"
//               placeholder="e.g. Brook"
//               {...register("lastname")}
//               onBlur={() => trigger("lastname")}
//             />
//             <p className="error">{errors.lastname?.message}</p>
//           </div>
//           <div className="form-control col-span-2">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="e.g. harrybrook@business.com"
//               {...register("email")}
//               onBlur={() => trigger("email")}
//             />
//             <p className="error">{errors.email?.message}</p>
//           </div>
//           <div className="form-control col-span-2">
//             <label htmlFor="password">Password</label>
//             <input
//               type="text"
//               id="password"
//               {...register("password")}
//               onBlur={() => trigger("password")}
//             />
//             <p className="error">{errors.password?.message}</p>
//           </div>
//           <div className="form-control col-span-2">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="text"
//               id="confirmPassword"
//               {...register("confirmPassword")}
//               onBlur={() => trigger("confirmPassword")}
//             />
//             <p className="error">{errors.confirmPassword?.message}</p>
//           </div>
//         </form>
//       </div>
//     );
//   };

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//   };

//   const isError = Object.keys(errors).length !== 0;
//   const isCompany = true;

//   return (
//     <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
//       <div className="flex flex-col px-6 md:px-8 w-full">
//         {page !== 0 && (
//           <div className="w-full text-inter mb-6 ">
//             <button onClick={back}>{`<`} Previous</button>
//           </div>
//         )}
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           {page === 0 && Step1}
//           {page === 1 && <Step2 />}
//           {/* <button className="bg-orange">click</button> */}
//           <button
//             className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit ${
//               isError ? "bg-opacity-50" : ""
//             }`}
//             onClick={next}
//             disabled={isError}
//           >
//             {page !== 1 && (page === 0 ? "Add my company" : "Continue")}
//             {page === 1 && "Finish"}
//           </button>
//         </form>
//       </div>
//       <EnlistSkeleton
//         companyName={companyNameValue}
//         streetAddress={streetAddressValue}
//         city={cityValue}
//         zip={zipValue}
//         phoneNumber={phoneNumberValue}
//         websiteUrl={websiteUrlValue}
//         isCompany={isCompany}
//       />
//     </div>
//   );
// };

// export default EnlistCompany;
