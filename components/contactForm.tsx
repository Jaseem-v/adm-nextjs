import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <section
      className={`${styles.contactUs} mt-36 w-full pb-12 md:pb-16 lg:pb-20`}
    >
      <div
        className="max-w-screen-xl mx-auto px-4 xl:px-0 pt-14 md:pt-20 lg:pt-32 text-white 
            "
      >
        <p className="font-kaisei text-white font-bold text-xl md:text-2xl lg:text-3xl">
          Contact Us
        </p>
        <p className=" mt-4 md:mt-5 lg:mt-6 xl:mt-7 font-semibold text-2xl md:text-4xl lg:text-5xl md:max-w-2xl lg:max-w-4xl">
          Get in touch with us
        </p>
        <div className=" mt-10 md:mt-12 lg:mt-16 font-inter flex flex-col lg:flex-row gap-6 md:gap-7">
          <div
            className="grow bg-black rounded-[40px] xl:max-w-2xl 
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
                id="name"
                className="w-full rounded-[40px] bg-black border border-white 
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:font-medium placeholder:text-base placeholder:md:text-lg"
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-[40px] bg-black border border-white 
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:font-medium placeholder:text-base placeholder:md:text-lg"
                placeholder="Your Email"
              />
              <textarea
                name="Message"
                id="message"
                cols={30}
                rows={8}
                className="rounded-[40px] bg-black border border-white
                                py-4 md:py-7 lg:py-7 px-8 md:px-9 lg:px-[44px] 
                                placeholder:font-medium placeholder:text-base placeholder:md:text-lg"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="text-black bg-lightOrange py-4 md:py-7 lg:py-7 rounded-[40px]
                                hover:bg-orange transition-all duration-200 active:bg-amber-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* <!-- contact details --> */}
          <div
            className="px-12 md:px-16 lg:px-20 py-24 rounded-[20px] flex flex-col gap-10 md:gap-12 lg:gap-16
                         bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 xl:w-[556px]"
          >
            <div className="">
              <div className="flex gap-5 items-center">
                <img src="/images/address.png" alt="address" />
                <p className="font-medium text-2xl md:text-3xl">Address</p>
              </div>
              <p className="mt-5 max-w-[300px] font-medium text-lg md:text-xl opacity-80">
                abudhabi
              </p>
            </div>
            <div className="">
              <div className="flex gap-5 items-center">
                <img src="/images/phone.png" alt="address" />
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
                <img src="/images/address.png" alt="address" />
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
