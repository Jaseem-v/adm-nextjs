"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import "./../../../components/enlist/form.css";
import { businessFirstStepSchema, businessIndividualSchema } from "@/app/schema/signUpSchema";
import httpClient from "@/services/axiosInstance";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

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

  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  place: string;
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

  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  place: ""
};

const EnlistCompany = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [page, setPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);


  type FirstFormValues = {
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

  const form = useForm<FirstFormValues>({
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
    resolver: yupResolver(businessFirstStepSchema),
  });

  const { register, handleSubmit: handleSubmitOne, formState, trigger, watch } = form;
  const { errors: errorsOne } = formState;

  // WATCH
  const companyNameValue = watch("companyName");
  const streetAddressValue = watch("streetAddress");
  const cityValue = watch("city");
  const zipValue = watch("zip");
  const phoneNumberValue = watch("phoneNumber");
  const websiteUrlValue = watch("websiteUrl");

  // FUNCTIONS
//   const stepOneErrors: Record<string, string | boolean> = {};

// Object.keys(errors).forEach(key => {
//   if (['companyName', 'streetAddress', 'building', 'city', 'zip', 'hideAddress', 'hasServiceArea', 'phoneNumber', 'websiteUrl', 'categories'].includes(key)) {
//     stepOneErrors[key] = errors[key];
//   }
// });
const isStepOneError = Object.keys(errorsOne).length !== 0;
console.log('stepone errors', errorsOne)

  async function next() {
    setIsSubmitted(true);
    if (page === 0) {
      if (((await trigger()) && Object.keys(errorsOne).length) === 0) {
        setPage((i) => {
          if (i >= 2) return i;
          return i + 1;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  function back() {
    setPage((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  // ONSUBMIT
  const navigate = useRouter();
  const onSubmitOne = (d: FirstFormValues) => {
    console.log('step one submitted')
    setData(prevState => ({...prevState, ...d  }))
    next();
  }

  const isCompany = true;

  const Step1 = (
    <div className="companyDetailsForm ">
      <h1 className="font-semibold font-lora text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Join Our Community with Ease
      </h1>
      <p className="text-sm mt-4 text-[#0B1E3F]">
        Join our community effortlessly and be a part of Abudhabi Malayalees,
        where you can connect and engage with like-minded individuals. Register
        now and experience a seamless onboarding process.
      </p>
      <form onSubmit={handleSubmitOne(onSubmitOne)} noValidate>
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
              {(isSubmitted || errorsOne.companyName) &&
                errorsOne.companyName?.message}
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
            <p className="error">{errorsOne.streetAddress?.message}</p>
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
            <p className="error">{errorsOne.building?.message}</p>
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
            <p className="error">{errorsOne.city?.message}</p>
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
            <p className="error">{errorsOne.zip?.message}</p>
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
            <p className="error">{errorsOne.phoneNumber?.message}</p>
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
            <p className="error">{errorsOne.websiteUrl?.message}</p>
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
            <p className="error">{errorsOne.categories?.message}</p>
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
              isStepOneError ? "bg-opacity-50" : ""
            }`}
          >
            Add my company
          </button>
        </div>
      </form>
    </div>
  );

  console.log("data", data);
  console.log('hello')

  // \\\\\\\\\\\\\\\\\\\
  // STEP 2
  // \\\\\\\\\\\\\\\\\\\

  // interface Step2Props {
  //   setData: React.Dispatch<React.SetStateAction<FormValues>>;
  //   isSubmitted: boolean;
  //   setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  // }

  type SecondFormValues = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    place: string;
  };

  const formTwo = useForm<SecondFormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      place: ""
      
    },
    resolver: yupResolver(businessIndividualSchema),
  });

  const { register: registerTwo, handleSubmit: handleSubmitTwo , formState: formStateTwo, trigger: triggerTwo, watch: watchTwo } = formTwo;
  const { errors: errorsTwo } = formStateTwo;

    const onSubmit = (d: SecondFormValues) => {
      console.log('submitted data', {...d})
      setData((prevData) => ({ ...prevData, ...d }));
      const formData = {...d}
console.log('final data', data)
      // try {
      //   httpClient().post('/user/business/signup', formData)
      //   .then(res => {
      //     console.log(res)
      //     toast.success('Account Created Succeffully', {
      //       icon: '👏',
      //     })
      //     navigate.push("/login")
      //   }
      //   )
      // } catch (err) {
      //   console.log(err)
      // }
      setIsSubmitted(true);
    };
    console.log('errors two', errorsTwo);

    const isStepTwoError = Object.keys(errorsTwo).length !== 0;

  const Step2 = (
      <div className="userForm">
        <h1 className="font-semibold font-lora text-xl md:text-2xl xl:text-3xl">
          Congratulations! Your company page is ready.
        </h1>
        <p className=" mt-4">
          Register to save your updates and publish your company page
        </p>
        <form
          onSubmit={handleSubmitTwo(onSubmit)}
          noValidate
          className="my-5 grid grid-cols-2 gap-x-5 gap-y-3"
        >
          <div className="form-control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="e.g. Harry"
              {...registerTwo("firstname")}
              onBlur={() => triggerTwo("firstname")}
            />
            <p className="error">{errorsTwo.firstname?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="e.g. Brook"
              {...registerTwo("lastname")}
              onBlur={() => triggerTwo("lastname")}
            />
            <p className="error">{errorsTwo.lastname?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              id="phone"
              placeholder="e.g. Google"
              {...registerTwo("phone")}
              onBlur={() => triggerTwo("phone")}
            />
            <p className="error">{errorsTwo.phone?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="e.g. harrybrook@business.com"
              {...registerTwo("email")}
              onBlur={() => triggerTwo("email")}
            />
            <p className="error">{errorsTwo.email?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...registerTwo("username")}
              onBlur={() => triggerTwo("username")}
            />
            <p className="error">{errorsTwo.username?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              {...registerTwo("password")}
              onBlur={() => triggerTwo("password")}
            />
            <p className="error">{errorsTwo.password?.message}</p>
          </div>
          <div className="form-control col-span-2">
            <label htmlFor="place">Place</label>
            <input
              type="text"
              id="place"
              placeholder="e.g. abu dhabi"
              {...registerTwo("place")}
              onBlur={() => triggerTwo("place")}
            />
            <p className="error">{errorsTwo.place?.message}</p>
          </div>
          <button
            className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit ${
              isStepTwoError ? "bg-opacity-50" : ""
            }`}
          >
            Finish
          </button>
        </form>
      </div>
    );

  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        {page !== 0 && (
          <div className="w-full text-inter mb-6 ">
            <button onClick={back}>{`<`} Previous</button>
          </div>
        )}
        {page === 0 && Step1}
        {page === 1 && Step2}
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

