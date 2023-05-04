import { BiSearch } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./form.css";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import CompanyContactForm from "./companyContactForm";
import CompanyCategoryForm from "./companyCategoryForm";
import UserForm from "./userForm";

type FormValues = {
  companyName: string;
  streetAddress: string;
  building: string;
  city: string;
  zip: number;
  hideAddress: boolean;
  hasServiceArea: boolean;
};

const CompanyDetailsSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  streetAddress: yup.string().required("streetAddress is required"),
  building: yup.string(),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip is required").max(5),
  hideAddress: yup.boolean(),
  hasServiceArea: yup.boolean(),
});

const CompanyDetailsForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      companyName: "",
      streetAddress: "",
      building: "",
      city: "",
      zip: undefined,
      hideAddress: true,
      hasServiceArea: false,
    },
    resolver: yupResolver(CompanyDetailsSchema),
  });

  const { register, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="userForm">
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        Join Our Community with Ease
      </h1>
      <p className="text-sm mt-4 text-[#0B1E3F]">
        Join our community effortlessly and be a part of Abudhabi Malayalees,
        where you can connect and engage with like-minded individuals. Register
        now and experience a seamless onboarding process.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-6 gap-x-5"
      >
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

        <button className="font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px]">
          Add my company
        </button>
      </form>
    </div>
  );
};

export default CompanyDetailsForm;

{
  /* <div className="flex flex-col w-full gap-2 items-start">
  <div className="flex items-center">
    <BiSearch color="#b7babf" className="mr-2"/>
    <div className="text-lg font-medium mr-4">Service Areas</div>
    <span className="text-sm">0/5 Areas Listed</span>
  </div>

  listed area
  <div className="flex items-center">
    <BsFillTrash3Fill color="#b7babf" />
    <input type="text" className="form-control" placeholder="Enter City" />
    <div className="autosuggests" role="listbox"></div>
    <div>✅</div>
  </div>
</div> */
}
