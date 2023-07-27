"use client";

import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./../../../components/enlist/form.css";
import { IndividualPreviewSkeleton } from "@/components/enlist/individualPreviewSkeleton";
import httpClient from './../../../services/axiosInstance';
// import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { businessIndividualSchema } from "@/utils/schema/signUpSchema";







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


  const navigate = useRouter();



  // API


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
    resolver: yupResolver<any>(businessIndividualSchema),
  });

  const { register, handleSubmit, formState, trigger, watch, setValue } = form;
  const { errors } = formState;

  const onSubmit = async ({ firstname, lastname, email, phone, username, password }: FormValues) => {
    const formData = { fname: firstname, lname: lastname, email, phone, username: `pa-${username}`, password }
    await setData((prevData) => ({ ...prevData, formData }));

    try {
      await httpClient()
  .post('user/personal/signup', formData)
  .then(res => {
    console.log(res)
    if (res.status === 200) {
      toast.success('Account Created Successfully', {
        icon: '👏',
      });
      navigate.push("/register-success");
    } else {
      // Handle error case here
      toast.error('An error occurred during signup');
    }
  })
  .catch(error => {
    // Handle error case here
    console.log(error);
    toast.error('An error occurred during signup');
  });

    } catch (error) {
      console.log(error)
    }
    console.log("userdata", formData);
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
      <h1 className="font-bold font-lora text-xl md:text-2xl xl:text-3xl">
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
          className={`font-normal font-inter mt-4 mb-7 px-5 py-3 rounded bg-orange hover:bg-amber-600 active:bg-darkOrange text-white col-span-2 text-[15px] w-fit ${isError ? "bg-opacity-50" : ""
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
