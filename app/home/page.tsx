import Image from "next/image";
import React from "react";
import "./home.css";

const socialMedia = [
  {
    id: 1,
    title: "Facebook",
    type: "Group",
    link: "https://www.facebook.com/groups/abudhabimalayalees",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    title: "Facebook",
    type: "Profile",
    link: "https://www.facebook.com/abudhabimalayalee",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    title: "Facebook",
    type: "Page",
    link: "https://www.facebook.com/abudhabimalayalees",
    icon: "fab fa-facebook",
  },
  {
    id: 4,
    title: "Telegram",
    type: "Group",
    link: "https://t.me/abudhabimalayali",
    icon: "fab fa-telegram",
  },
  {
    id: 5,
    title: "Whatsapp",
    type: "Group",
    link: "https://chat.whatsapp.com/LtrgXq9UdbBCOc82H958uU",
    icon: "fab fa-whatsapp",
  },
  {
    id: 6,
    title: "Instagram",
    type: "",
    link: "https://www.instagram.com/abudhabimalayalee",
    icon: "fab fa-instagram",
  },
];
const Home = () => {
  return (
    <>
      <section className={`mainHeader text-white font-inter`}>
        {/* \\\\\\\\\\\\\\\\ */}
        {/* \\\ Main header */}
        <div className="pt-36 pb-56 md:pt-44 md:pb-64 lg:py-52 lg:pb-72 z-10 relative">
          <div className="text-center flex flex-col justify-center  px-5 xl:px-0">
            <p className="font-semibold text-[28px] md:text-[42px] lg:text-[54px] leading-tight md:leading-[62px]">
              Empowering Businesses
              <br />
              and Building Connections
            </p>
            <p className="opacity-80 font-medium mt-3 md:mt-4 text-sm md:text-lg lg:text-xl">
              Connecting, empowering, and thriving - join the <br />
              Abudhabi Malayalees community today!
            </p>
            <div className="flex gap-2 md:gap-4 mt-8 items-center justify-center">
              <a href="/signup.html">
                <button className="py-3 md:py-4 px-8 md:px-12 bg-white text-black font-medium text-base md:text-lg lg:text-xl rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                  Register Now
                </button>
              </a>
              <a href="/aboutUs.html">
                <button
                  className="py-[11px] md:py-[15px] px-6 md:px-10 bg-black bg-opacity-30 text-white hover:bg-gray-900 font-medium text-base md:text-lg lg:text-xl rounded-lg border border-white
                        flex items-center justify-center gap-2 hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
                >
                  <p>Learn more</p>
                  <img src="/images/arrow-right.svg" alt="right arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* SOCIAL MEDIA ICONS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="z-10 lg:-mt-32">
        <div className="social-media-section flex flex-col gap-12 p-12 max-w-screen-lg mx-auto rounded-sm shadow-lg">
          <div className="flex items-center justify-center w-full">
            <p className="font-kaisei font-bold text-xl text-black text-center">
              Follow us
            </p>
          </div>
          <div className="pb-12 flex  items-start justify-between gap-x-0 gap-y-12 lg:gap-0 flex-wrap">
            {socialMedia.map((item) => (
              <div
                className="social-media-item flex flex-col items-center gap-5 text-center mx-0"
                key={item.id}
              >
                <a href={item.link} target="_blank">
                  <i className={item.icon}></i>
                </a>
                <h5>
                  {item.title} <br /> {item.type}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* ABOUT US */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
          <div className="lg:text-center">
            <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0 mb-4">
              <div className="bg-lightOrange w-full h-[1px]"></div>
              <h3 className="font-kaisei text-black font-semibold tracking-wide uppercase text-2xl md:text-3xl lg:text-4xl">
                About us
              </h3>
              <div className="bg-lightOrange w-full h-[1px]"></div>
            </div>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're a leading provider of innovative solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team is dedicated to creating and implementing cutting-edge
              technologies to improve your business. We specialize in everything
              from web development to custom software solutions.
            </p>
          </div>
          <div className="container mx-auto flex flex-wrap py-12">
            <div className="w-full md:w-1/2 p-4">
              <img
                src="/images/aboutUs-1.png"
                alt="About Us"
                className="h-full w-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                Abu Dhabi Malayalees is a vibrant and thriving business
                community of Malayalees in Abu Dhabi, United Arab Emirates. We
                are a group of like-minded individuals who come together to
                foster a strong sense of community, promote business
                opportunities, and support each other in both personal and
                professional endeavors.
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                Our community is made up of individuals from all walks of life,
                including entrepreneurs, professionals, and business owners, who
                share a common interest in connecting and collaborating with
                fellow Malayalees. We aim to provide a platform for our members
                to network, share ideas, and explore new business opportunities.
              </p>
              <div className="mt-20">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lightOrange text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 3-3 2-1 7-5-6z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Our Mission
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Our mission is to empower businesses with technology,
                        helping them to reach their full potential and achieve
                        their goals.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lightOrange text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 3-3 2-1 7-5-6z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Our Values
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We believe in delivering quality work, honesty, and
                        transparency in all our business dealings. We strive to
                        build lasting relationships with our clients and
                        partners.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
