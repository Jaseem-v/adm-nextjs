"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className={`${styles.contactUs} w-full pb-12 md:pb-16 lg:pb-20`}>
      <div
        className="max-w-screen-xl mx-auto px-4 xl:px-0 pt-14 md:pt-20 lg:pt-32 text-white 
            "
      >
          <div className="flex flex-col justify-center items-center">
        <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333]">
            Contact Us
          </h1>
          <p className="md:max-w-3xl lg:max-w-4xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-descBlack text-center">
          Get in touch with us
        </p>
        </div>
        <div className=" mt-10 md:mt-12 lg:mt-16 font-inter flex flex-col lg:flex-row gap-6 md:gap-7">
          <div
            className="grow bg-darkBg rounded-[40px] xl:max-w-2xl 
                    "
          >
            <form
              action="submit"
              className="flex flex-col gap-7 md:gap-8 lg:gap-9 xl:gap-10
                        px-7 lg:px-12 pt-14 lg:pt-20 pb-12 lg:pb-16"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="w-full rounded-[40px] bg-lightBg 
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:opacity-80 placeholder:font-medium placeholder:text-base placeholder:md:text-lg  focus-visible:outline-brown text-textBlack"
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full rounded-[40px] bg-lightBg 
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:opacity-80 placeholder:font-medium placeholder:text-base placeholder:md:text-lg focus-visible:outline-brown text-textBlack"
                placeholder="Your Email"
              />
              <textarea
                name="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols={30}
                rows={8}
                className="rounded-[40px] bg-lightBg 
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:opacity-80 placeholder:font-medium placeholder:text-base placeholder:md:text-lg focus-visible:outline-brown text-textBlack"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="text-lightGold bg-primary py-4 md:py-7 lg:py-7 rounded-[40px]
                           transition ease-in-out duration-300 active:bg-amber-700 hover:bg-brownBgInvert"
              >
                Submit
              </button>
            </form>
          </div>

          {/* <!-- contact details --> */}
          <div
            className="px-12 md:px-16 lg:px-20 py-24 rounded-[20px] flex flex-col gap-10 md:gap-12 lg:gap-16
                         bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 xl:w-[556px] text-textBlack font-poppins"
          >
            <div className="">
              <div className="flex gap-5 items-center">
                <img src="/images/location.png" alt="address" />
                <p className="font-medium text-2xl md:text-3xl">Address</p>
              </div>
              <p className="mt-5 max-w-[300px] font-medium text-lg md:text-xl opacity-80">
                abudhabi
              </p>
            </div>
            <div className="">
              <div className="flex gap-5 items-center">
                <img src="/images/call.png" alt="phone" />
                <p className="font-medium text-2xl md:text-3xl">
                  Contact Number
                </p>
              </div>
              <p className="mt-5 max-w-[300px] font-medium text-lg md:text-xl opacity-80">
                +971 55 448 5169
              </p>
            </div>
            <div className="">
              <div className="flex gap-5 items-center">
                <img src="/images/mail.png" alt="address" />
                <p className="font-medium text-2xl md:text-3xl">
                  Email Address
                </p>
              </div>
              <p className="mt-5 max-w-[300px] font-medium text-lg md:text-xl opacity-80">
                info@abudhabimalayalees.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
