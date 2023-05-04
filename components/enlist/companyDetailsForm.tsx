import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./form.css";

type FormValues = {
  companyName: string;
  streetAddress: string;
  building: string;
  city: string;
  zip: number;
};

const Userschema = yup.object({
  companyName: yup.string().required("Company name is required"),
  streetAddress: yup.string().required("streetAddress is required"),
  building: yup.string(),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip is required").max(5),
});

const CompanyDetailsForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      companyName: "",
      streetAddress: "",
      building: "",
      city: "",
      zip: undefined,
    },
    resolver: yupResolver(Userschema),
  });

  const { register, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="userForm">
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-3xl text-[#0B1E3F]">
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
        className="my-5 grid grid-cols-6 gap-x-5 gap-y-3"
      >
        <p className="font-serif font-medium text-2xl col-span-6 mt-6 mb-3">What is the name of your company?</p>
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
        <p className="font-serif font-medium text-2xl col-span-6 mt-6 mb-3">Where is your company located?</p>

        <div className="form-control col-span-6">
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
        <div className="form-control col-span-2">
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
        <div className="form-control col-span-2">
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
        <div className="form-control col-span-2">
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
      </form>
    </div>
  );
};

export default CompanyDetailsForm;
