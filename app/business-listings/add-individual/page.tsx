"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./../../../components/enlist/form.css";
import { IndividualPreviewSkeleton } from "@/components/enlist/individualPreviewSkeleton";

const EnlistIndividual = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    place: "",
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const SecondStepSchema = yup.object({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    username: yup.string().required("Username is required").min(4),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be atleast 8 charecters"),
    place: yup.string().required("Place is required").min(3),
  });

  type FormValues = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    place: string;
  };

  const form = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      place: "",
    },
    resolver: yupResolver(SecondStepSchema),
  });

  const { register, handleSubmit, formState, trigger, watch } = form;
  const { errors } = formState;

  const onSubmit = (d: FormValues) => {
    setData((prevData) => ({ ...prevData, ...d }));
    console.log("userdata", data);
  };

  const isError = Object.keys(errors).length !== 0;

  // WATCH
  const firstname = watch("firstname");
  const lastname = watch("lastname");
  const phone = watch("phone");
  const email = watch("email");
  const place = watch("place");

  const UserForm = (
    <div className="userForm">
      <h1 className="font-semibold font-playfair text-xl md:text-2xl xl:text-3xl">
        Expand Your Network and Grow Your Business
      </h1>
      <p className=" mt-4">
        Join our thriving business community to connect with like-minded
        entrepreneurs, share insights, and unlock new opportunities for growth
        and collaboration.
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
          <p className="error">
            {errors.firstname && errors.firstname?.message}
          </p>
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
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            placeholder="e.g. Google"
            {...register("phone")}
            onBlur={() => trigger("phone")}
          />
          <p className="error">{errors.phone?.message}</p>
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
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username")}
            onBlur={() => trigger("username")}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
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
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            placeholder="e.g. Google"
            {...register("place")}
            onBlur={() => trigger("place")}
          />
          <p className="error">{errors.place?.message}</p>
        </div>
        <button
          className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange text-white col-span-2 text-[15px] w-fit ${
            isError ? "bg-opacity-50" : ""
          }`}
          type="submit"
        >
          Finish
        </button>
      </form>
    </div>
  );

  return (
    <div className="container grid justify-items-center pt-14 w-full mx-auto lg:grid-cols-2">
      <div className="flex flex-col px-6 md:px-8 w-full">{UserForm}</div>
      <IndividualPreviewSkeleton
        firstname={firstname}
        lastname={lastname}
        place={place}
        email={email}
        phone={phone}
        key={1}
      />
    </div>
  );
};

export default EnlistIndividual;
