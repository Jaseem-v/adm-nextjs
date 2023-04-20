"use client";

import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="h-screen font-inter max-w-screen-xl mx-auto flex items-center justify-center relative">
      <div
        className="p-8 md:p-6 lg:p-7
             xl:px-0 "
      >
        <div>
          <a href="/index.html">
            <img
              src="/images/back-icon.png"
              alt="back icon"
              className="absolute top-7 left-7 xl:left-0 w-10 h-10"
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
              Enter your details
            </p>
            <form
              action="submit"
              className="mt-8 md:mt-11 lg:mt-14
                        mb-12 md:mb-16 lg:mb-20"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full border-b border-black border-opacity-40
                                py-4 focus:outline-none mb-9"
              />
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
            <button className="font-regular bg-lightOrange py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full">
              Signup
            </button>
            <button className="mt-4 font-regular bg-white py-3 md:py-4 px-12 text-lg md:text-xl rounded-md w-full border border-black">
              Signup with google
            </button>
            <div className="mt-5 flex gap-1 justify-center font-bold text-base md:text-lg lg:text-xl">
              <p className="font-medium">Already have an account?</p>
              <Link href="/login">
                <p>Login Now</p>
              </Link>
            </div>
          </div>
          <div className="hidden xl:block">
            <img src="/images/signupImage.png" alt="signup image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
