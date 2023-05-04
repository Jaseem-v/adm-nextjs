import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./form.css";

type FormValues = {
  phoneNumber: number;
  websiteUrl: string;
};

const ContactForm = yup.object({
  phoneNumber: yup.number().required("This field is required").min(10).max(10),
  websiteUrl: yup.string().url("Please enter a valid URL"),
});

const CompanyContactForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      phoneNumber: undefined,
      websiteUrl: "",
    },
    resolver: yupResolver(ContactForm),
  });

  const { register, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="companyContactForm">
      {/* <div className="w-full text-inter mb-6 ">
            <button>{`<`} Previous</button>
        </div> */}
      <h1 className="font-semibold font-kaisei text-xl md:text-2xl xl:text-4xl text-[#0B1E3F]">
        How will customers contact you?
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <p className="font-serif font-medium text-xl col-span-6 mt-10 mb-4">
          Make sure your customers can reach you - add your phone number now.
        </p>
        <div className="form-control col-span-6">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
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

        {/* <button className="font-normal font-inter my-9 px-6 py-2 rounded bg-orange text-white col-span-2 text-[15px]">Continue</button> */}
      </form>
    </div>
  );
};

export default CompanyContactForm;
