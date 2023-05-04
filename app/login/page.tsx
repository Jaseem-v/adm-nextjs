"use client";
import { EnlistSkeleton } from "@/components/enlist/enlistSkeleton";
import UserForm from "@/components/enlist/userForm";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="h-screen font-inter max-w-screen-xl mx-auto flex items-center justify-center relative">
      <section className="">
        <div
          className="p-8 md:p-6 lg:p-7
             xl:px-0 "
        >
          {/* <!-- back icon --> */}
          <div>
            <a href="/index.html">
              <img
                src="/images/back-icon.png"
                alt="back icon"
                className="absolute top-7 left-0 w-10 h-10"
              />
            </a>
          </div>
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
              <form
                action="submit"
                className="mt-8 md:mt-11 lg:mt-14
                        mb-12 md:mb-16 lg:mb-20"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full border-b border-black border-opacity-40
                                py-4 focus:outline-none mb-9"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border-b border-black border-opacity-40
                                py-4 focus:outline-none"
                />
              </form>
              <button className="font-regular bg-lightOrange py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full  hover:bg-amber-500 transition-all duration-200 active:bg-amber-700">
                Login
              </button>
              <button className="mt-4 font-regular bg-white py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full border border-black hover:bg-gray-200">
                Login with google
              </button>
              <div className="mt-5 flex gap-1 justify-center font-bold text-base md:text-lg lg:text-xl">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="font-medium">Don't have an account?</p>
                <Link href="/signup">
                  <p>Register Now</p>
                </Link>
              </div>
            </div>
            <div className="hidden xl:block">
              <img src="/images/loginImage.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
