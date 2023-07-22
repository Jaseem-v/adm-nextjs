"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import "./../../../components/enlist/form.css";
import { businessFirstStepSchema } from "@/utils/schema/signUpSchema";
import httpClient from "@/services/axiosInstance";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type FormData = {
  companyName: string;
  streetAddress: string;
  buildingNumber: string;
  city: string;
  zip: string;
  hideAddress: boolean;
  hasServiceArea: boolean;

  numberType: string;
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
  buildingNumber: "",
  city: "",
  zip: "",
  hideAddress: true,
  hasServiceArea: false,

  numberType: 'landline',
  phoneNumber: "",
  websiteUrl: "",

  categories: "",

  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  place: "",
};

const EnlistCompany = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [page, setPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [categoryData, setCategoryData] = useState<{ _id: string, name: string }[] | []>([])

  const navigate = useRouter();

  type FirstFormValues = {
    companyName: string;
    streetAddress: string;
    buildingNumber: string;
    city: string;
    zip: string;
    hideAddress: boolean;
    hasServiceArea: boolean;

    numberType: string;
    phoneNumber: string;
    websiteUrl: string;

    categories: string;

    email: string;
    username: string;
    password: string;
  };

  const form = useForm<FirstFormValues>({
    defaultValues: {
      companyName: "",
      streetAddress: "",
      buildingNumber: "",
      city: "",
      zip: "",
      hideAddress: false,
      hasServiceArea: false,
      numberType: 'landline',
      phoneNumber: "",
      websiteUrl: "",
      categories: "",

      email: "",
      username: "",
      password: "",
    },
    resolver: yupResolver(businessFirstStepSchema),
  });

  const {
    register,
    handleSubmit: handleSubmitOne,
    formState,
    trigger,
    watch,
  } = form;
  const { errors: errorsOne } = formState;

  // WATCH
  const companyNameValue = watch("companyName");
  const streetAddressValue = watch("streetAddress");
  const cityValue = watch("city");
  const zipValue = watch("zip");
  const numberType = watch('numberType')
  const phoneNumberValue = watch("phoneNumber");
  const websiteUrlValue = watch("websiteUrl");

  const buildingValue = watch("buildingNumber");
  const categoryValue = watch("categories");
  const hideAddressValue = watch("hideAddress");

  const emailValue = watch("email");
  const usernameValue = watch("username");
  const passwordValue = watch("password");

  // console.log("hide address", hideAddressValue);

  // FUNCTIONS
  //   const stepOneErrors: Record<string, string | boolean> = {};

  // Object.keys(errors).forEach(key => {
  //   if (['companyName', 'streetAddress', 'building', 'city', 'zip', 'hideAddress', 'hasServiceArea', 'phoneNumber', 'websiteUrl', 'categories'].includes(key)) {
  //     stepOneErrors[key] = errors[key];
  //   }
  // });
  const isStepOneError = Object.keys(errorsOne).length !== 0;
  console.log("stepone errors", errorsOne);

  async function next() {
    setIsSubmitted(true);
    if (page === 0) {
      if (((await trigger()) && Object.keys(errorsOne).length) === 0) {
        setData((prevState) => ({
          ...prevState,
          companyName: companyNameValue,
          streetAddress: streetAddressValue,
          city: cityValue,
          zip: zipValue,
          phoneNumber: phoneNumberValue,
          websiteUrl: websiteUrlValue,
          building: buildingValue,
          categories: categoryValue,
          email: emailValue,
          username: usernameValue,
          password: passwordValue,
        }));
        setPage((i) => {
          if (i >= 2) return i;
          return i + 1;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  const onSubmitOne = async (d: FirstFormValues) => {
    // console.log("step one submitted");
    setData((prevState) => ({ ...prevState, ...d }));
    const {
      companyName,
      streetAddress,
      city,
      buildingNumber,
      phoneNumber,
      websiteUrl,
      categories,
      email,
      username,
      password,
    } = d;
    const finalData = {
      name: companyName,
      username: `ba-${username}`,
      phone: phoneNumber,
      email: email,
      password: password,
      category: categories,
      website: websiteUrl,
      addressDetails: {
        streetNumber: buildingNumber,
        state: "abu dhabi",
        city: city,
        address: streetAddress,
        place: streetAddress,
        pincode: '111111',
        landmark: "mosque",
      },
      contactDetails: {}
    };
    console.log("final data", finalData);
    try {
      await httpClient()
        .post("user/business/signup", finalData)
        .then((res) => {
          console.log(res);

          if (res.status === 200) {
            toast.success("Account Created Successfully", {
              icon: "👏",
            });
            navigate.push("/register-success");
          } else {
            // Handle non-200 status codes  
            toast.error("An error occurred during signup");
          }
        })
        .catch((error) => {
          // Handle request errors
          console.log(error);
          toast.error("An error occurred during signup");
        });
    } catch (err) {
      // Handle exceptions
      console.log(err);
    }
    setIsSubmitted(true);
  };

  const fetchCategoryData = async () => {
    try {
      const response = await httpClient().get('/category/business/customer')
      const res = response.data.data

      setCategoryData(response.data.data)

      console.log("category", res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategoryData()
  }, [])


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
          <div className="form-control col-span-3 mt-4">
            <label htmlFor="building">Building Number</label>
            <input
              type="text"
              id="building"
              placeholder="200"
              {...register("buildingNumber")}
              onBlur={() => trigger("buildingNumber")}
            />
            <p className="error">{errorsOne.buildingNumber?.message}</p>
          </div>
          <div className="form-control col-span-3 mt-4">
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

          {/* contact  */}
          <h1 className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
            How will customers contact you?
          </h1>
          <div className=" col-span-6">
            <label htmlFor="phoneNumber">Phone number</label>
            <div className="grid grid-cols-3 gap-4 items-center">
              <select id="numberType" {...register("numberType")} className="border border-[#B7BABF] rounded px-3 py-2">
                <option value="landline">Landline</option>
                <option value="mobile">Mobile</option>
              </select>
              {watch("numberType") === "landline" ? (
                <div className="flex items-center col-span-2">
                  <div className="border-y border-l border-[#B7BABF] rounded-l px-3 py-2 bg-skeleton">+971</div>
                  <input
                    type="tel"
                    pattern="[0-9]"
                    id="phoneNumber"
                    placeholder="e.g. 123 456 789"
                    className="border-y border-r border-[#B7BABF] rounded-r px-3 py-2 w-full"
                    {...register("phoneNumber")}
                    onBlur={() => trigger("phoneNumber")}
                  />
                </div>
              ) : (
                <div className="flex items-center col-span-2">
                  <div className="border-y border-l border-[#B7BABF] rounded-l px-3 py-2 bg-skeleton">+02</div>
                  <input
                    type="tel"
                    pattern="[0-9]"
                    id="phoneNumber"
                    placeholder="e.g. 123 4567"
                    className="border-y border-r border-[#B7BABF] rounded-r px-3 py-2 w-full"
                    {...register("phoneNumber")}
                    onBlur={() => trigger("phoneNumber")}
                  />
                </div>
              )}
            </div>
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
            <select
              id="categories"
              placeholder="e.g. Marketing, consultent, design"
              {...register("categories")}
              onBlur={() => trigger("categories")}
            >
              <option value={""}></option>

              {
                categoryData && categoryData.map((el,i) => (

                  <option value={el._id} key={i}>{el.name}</option>
                ))
              }

            </select>
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

          <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
            Company Account Details
          </p>
          <div className="form-control col-span-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="e.g. harrybrook@business.com"
              {...register("email")}
              onBlur={() => trigger("email")}
            />
            <p className="error">{errorsOne.email?.message}</p>
          </div>
          <div className="form-control col-span-3 mt-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username")}
              onBlur={() => trigger("username")}
            />
            <p className="error">{errorsOne.username?.message}</p>
          </div>
          <div className="form-control col-span-3 mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              {...register("password")}
              onBlur={() => trigger("password")}
            />
            <p className="error">{errorsOne.password?.message}</p>
          </div>
          {/* <label htmlFor="hasServiceArea" className="col-span-6 text-sm">
            <input
              type="checkbox"
              id="hasServiceArea"
              className="my-4"
              {...register("hasServiceArea")}
            />
            <span className="ml-1">
              We deliver or provide service at customer locations
            </span>
          </label> */}

          <button
            className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-primary text-lightGold col-span-4 md:col-span-2 text-[15px] w-fit ${isStepOneError ? "bg-opacity-50" : ""
              }`}
          >
            Add my company
          </button>
        </div>
      </form>
    </div>
  );
  

  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto xl:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">
        {page === 0 && Step1}
      </div>
      <EnlistSkeleton
        companyName={companyNameValue}
        streetAddress={streetAddressValue}
        city={cityValue}
        zip={zipValue}
        phoneNumber={phoneNumberValue}
        websiteUrl={websiteUrlValue}
        isCompany={isCompany}
        hideAddress={hideAddressValue}
      />
    </div>
  );
};

export default EnlistCompany;
