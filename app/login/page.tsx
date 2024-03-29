"use client";
import httpClient from "@/services/axiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signInSchema } from "../../utils/schema/signUpSchema";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { setLoginStatus } from './../../services/loginStatus';
import EnlistModel from "@/components/enlistModel";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showEnlistModel, setShowEnlistModel] = useState(false)

  type FormValues = {
    accountType: string;
    username: string;
    // username: string;
    password: string;
  };

  const form = useForm<FormValues>({
    defaultValues: {},
    resolver: yupResolver<any>(signInSchema),
  });

  const { register, handleSubmit, formState, trigger, watch, setValue } = form;
  const { errors } = formState;

  console.log(errors);
  const navigate = useRouter();

  // ONSUBMIT
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    const { accountType, username, password } = data;
    if (accountType === "personal") {
      const loginData = {
        username: `pa-${username}`,
        password: password,
      };
      console.log("personal logindata", loginData);
      try {
        await httpClient()
          .patch("/user/personal/login", loginData) // Use the modified loginData object here
          .then((res) => {
            console.log(res);

            if (res.status == 400) {
              toast.error(res.data.message, {
                icon: "👏",
              });
            }

            if (res.status == 200) {
              localStorage.removeItem('accessToken')
              localStorage.setItem("accessToken", res.data.token);
              localStorage.setItem("accountType", "personal");
              toast.success("Login Successfully");
              navigate.push("/myProfile");
            }
          });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else if (accountType === "business") {
      const loginData = {
        username: `ba-${username}`,
        password: password,
      };
      console.log("business logindata", loginData);
      try {
        await httpClient()
          .patch("/user/business/login", loginData) // Use the modified loginData object here
          .then((res) => {
            console.log(res);

            if (res.status == 400) {

              console.log("error",res.data.message);
              
              toast.success(res.data.message, {
                icon: "🟥",
              });
            }

            if (res.status == 200) {
              localStorage.setItem("accessToken", res.data.token);
              localStorage.setItem("accountType", "business");
              toast.success("Login Successfully");
              navigate.push("/myProfile");
            }
          });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    setIsLoading(false);
  };

  const handleBack = () => {
    navigate.back();
  };
  

  return (
    <main className="h-screen font-inter max-w-screen-xl mx-auto flex items-center justify-center relative overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />

      <section className="">
        <div
          className="p-8 md:p-6 lg:p-7
             xl:px-0 py-5"
        >
          {/* <!-- back icon --> */}
            <button onClick={handleBack}>
              <img
                src="/images/back-icon.png"
                alt="back icon"
                className="absolute top-7 left-5 xl:left-0 w-8 lg:w-10 h-8 lg:h-10"
              />
            </button>
          <div className="flex items-center justify-center lg:gap-20">
            <div className="max-w-[400px] ">
              <p className="font-bold text-3xl ">Welcome back</p>
              <p
                className="font-medium text-lg md:text-xl lg:text-2xl
                        mt-1"
              >
                Enter your login details
              </p>
              {/* <!-- login form --> */}
              <FormProvider {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  action="submit"
                  className="mt-8 md:mt-11 lg:mt-14
                        mb-12 md:mb-16 lg:mb-20"
                >
                  <div className="flex items-center justify-start gap-6 mb2">
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        value="personal"
                        {...register("accountType")}
                      />
                      Personal
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        value="business"
                        {...register("accountType")}
                      />
                      Business
                    </label>
                  </div>
                  <p className="text-error text-sm pt-2 mb-4">
                    {errors.accountType?.message}
                  </p>
                  <div className="mb-9">
                    <input
                      // name="email"
                      type="text"
                      placeholder="Username"
                      className="w-full border-b border-black border-opacity-40
                                py-4 focus:outline-none "
                      {...register("username")}
                      // onBlur={() => trigger("email")}
                    />
                    <p className="text-error text-sm pt-2">
                      {errors.username?.message}
                    </p>
                  </div>
                  <div className="">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border-b border-black border-opacity-40
                        py-4 focus:outline-none"
                      {...register("password")}
                      // onBlur={() => trigger("password")}
                    />
                    <p className="text-error text-sm pt-2">
                      {errors.password?.message}
                    </p>
                  </div>

                  <button
                    className=" mt-5 font-regular bg-primary text-lightGold py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full  hover:bg-primaryInvert transition-all duration-200 active:bg-primary  flex justify-center  items-center"
                    type="submit"
                    disabled={isLoading}
                    value={"Login"}
                  >
                    {isLoading ? (
                      <TailSpin
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                  {/* <button className="mt-4 font-regular bg-white py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full border border-black hover:bg-gray-200">
                    Login with google
                  </button> */}
                </form>
              </FormProvider>

              <div className="mt-5 flex gap-1 justify-center font-bold text-base md:text-lg ">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="font-medium">Don't have an account?</p>
                <button onClick={() => setShowEnlistModel(true)}>
                  <p>Register Now</p>
                </button>
              </div>
            </div>
            {showEnlistModel && (
              <EnlistModel setShowEnlistModel={setShowEnlistModel} />
            )}
            <div className="hidden xl:block">
              <img src="/images/loginImage.png" alt="" className=" -mt-6"/>
            </div>
          </div>
        </div>
      </section>
    </main>
    // <Profile />
  );
};

export default Login;
