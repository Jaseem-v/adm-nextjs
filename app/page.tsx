import {
  socialMedia,
  members,
  popularCompanies,
  newsFeed,
  numbers,
} from "./home/page";
import React from "react";
import "./home/home.css";
import ContactForm from "@/components/contactForm";
import Link from "next/link";

export default function Index() {
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
              <Link href="/login">
                <button className="py-3 md:py-4 px-8 md:px-12 bg-white text-black font-medium text-base md:text-lg lg:text-xl rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                  Register Now
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="py-[11px] md:py-[15px] px-6 md:px-10 bg-black bg-opacity-30 text-white hover:bg-gray-900 font-medium text-base md:text-lg lg:text-xl rounded-lg border border-white
                    flex items-center justify-center gap-2 hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
                >
                  <p>Learn more</p>
                  <img src="/images/arrow-right.svg" alt="right arrow" />
                </button>
              </Link>
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
            <p className="font-kaisei  font-bold text-xl  text-center ">
              Connect with us
            </p>
          </div>
          <div className="pb-12 flex  items-start justify-between gap-x-0 gap-y-12 lg:gap-0 flex-wrap">
            {socialMedia.map((item) => (
              <div
                className="social-media-item flex flex-col items-center gap-5 text-center mx-0"
                key={item.id}
              >
                <a href={item.link} target="_blank" >
                  {item.icon}
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

      <section>
        <div className="my-20 text-center text-black max-w-screen-xl mx-auto px-5 xl:px-0">
          <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0 mb-4">
            <div className="bg-lightOrange w-full h-[1px]"></div>
            <h3 className="font-kaisei text-black font-semibold tracking-wide uppercase text-2xl md:text-3xl lg:text-4xl">
              About us
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div>
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333]">
            We believe community grows businesses
          </h1>
          <h6 className="font-inter text-base md:text-lg lg:text-xl font-normal text-opacity-70 mt-4">
            Connecting Malayalee Entrepreneurs for Collective Success
          </h6>
          <div className="mt-[50px] xl:mt-[100px] flex items-center justify-center gap-32 text-left ">
            <img
              src="/images/about3.png"
              alt="community image"
              className="w-[530px] hidden lg:block"
            />
            <div className="flex flex-col font-inter ">
              <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl">
                Discover Our Story <br />
                and Mission
              </h2>
              <p className="pt-8 lg:pt-16 font-medium text-lg lg:text-xl leading-[1.5]">
                Abu Dhabi Malayalees is a vibrant and thriving business
                community of Malayalees in Abu Dhabi, United Arab Emirates. We
                are a group of like-minded individuals who come together to
                foster a strong sense of community, promote business
                opportunities, and support each other in both personal and
                professional endeavors.
              </p>
              <p className="pt-2 lg:pt-4 font-medium text-lg lg:text-xl leading-[1.5]">
                We aim to provide a platform for our members to network, share
                ideas, and explore new business opportunities.
              </p>
              <Link href="/about">
                <button className="mt-9 font-medium bg-black text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2">
                  Learn more
                  <img src="/images/arrow-right.svg" alt="right arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
      </section> */}

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* NUMBERS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className=" py-16 bg-gray bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {numbers.map((number) => (
              <div
                className="col-span-1 flex justify-center py-8 px-8  flex-col items-center"
                key={number.id}
              >
                <h3 className="text-4xl font-bold text-white">
                  {number.number}
                </h3>
                <p className="text-white">{number.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* MEMBERS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className=" max-w-screen-xl mx-auto px-5 xl:px-0 py-16">
        <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
          <div className="bg-lightOrange w-full h-[1px] "></div>
          <h3 className="min-w-[188px] font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black z-10 pl-1">
            Meet Our Members
          </h3>
          <div className="bg-lightOrange w-full h-[1px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="md:max-w-3xl lg:max-w-4xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc text-center">
            As a member, gain exclusive access to a thriving network of fellow
            entrepreneurs and professionals, all united by the shared goal of
            success. Join us today and unlock your potential.
          </p>
          <div className="team grid  mt-12 md:grid-cols-2 xl:grid-cols-4 gap-y-7 lg:gap-y-10 lg:gap-x-10 gap-x-7">
            {members.map((member) => (
              <div className="team-member" key={member.id}>
                <div>
                  <img
                    src={member.image}
                    alt="team-member-1"
                    className="rounded-md"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className=" font-semibold   md:text-lg lg:text-xl">
                    {member.name}
                  </p>
                  <p className=" text-sm md:text-base text-[#333] font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 md:mt-12 lg:mt-16 font-regular bg-lightOrange hover:bg-orange transition-all duration-200 active:bg-amber-700 py-3 px-12 text-base rounded-full text-white">
            Load More
          </button>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* POPULAR COMPANIES */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-black pb-16">
        <div className=" max-w-screen-xl mx-auto px-5 xl:px-0 mt-10 md:mt-12 lg:mt-14 pt-14 md:pt-20 lg:pt-32">
          <p className="font-kaisei text-white font-bold text-xl md:text-3xl lg:text-4xl">
            Popular Companies
          </p>
          <p className="text-white mt-4 md:mt-5 lg:mt-6 xl:mt-7 font-semibold text-2xl md:text-4xl lg:text-5xl md:max-w-2xl lg:max-w-4xl font-poppins">
            Discover the Vibrant Business Landscape of Abu Dhabi with
            AbudhabiMalayalees
          </p>
          <div className="companies mt-12 md:mt-16 lg:mt-20  grid lg:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
            {popularCompanies.map((company) => (
              <div
                className="company flex flex-col gap-3 max-w-fit "
                key={company.id}
              >
                <div>
                  <img src={company.image} alt="company1" />
                </div>
                <div className="bg-white rounded-2xl p-7 flex items-start gap-4 relative">
                  <div className="w-12 h-12">
                    <img src={company.logo} alt="companylogo" width="48px" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                      {company.title}
                    </p>
                    <p className="mt-2 text-desc text-sm max-w-md font-semibold">
                      {company.description}
                    </p>
                    <button className="mt-4 font-regular bg-lightOrange text-sm text-white py-3 px-4 hover:bg-orange transition-all duration-200 active:bg-amber-700">
                      Load More
                    </button>
                    <img
                      src="/images/blackTRarrow.png"
                      alt="arrow"
                      className="absolute top-3 right-3"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-8 md:mt-12 lg:mt-16 font-regular border border-white py-3 px-10 md:px-12 text-sm md:text-base rounded-full text-white text-center block mx-auto
                hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* GALLERY */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="gallery-wrapper py-16">
        <div className="max-w-screen-xl mx-auto mb-16">
          <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0 mb-4">
            <div className="bg-lightOrange w-full h-[1px]"></div>
            <h3 className=" font-kaisei text-white font-semibold tracking-wide uppercase text-2xl md:text-3xl lg:text-4xl">
              Gallery
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div>
        </div>
        <div className="content">
          <div className="gallery full">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3663038/pexels-photo-3663038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3663039/pexels-photo-3663039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3551208/pexels-photo-3551208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3375494/pexels-photo-3375494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-next-button">
              <em className="material-icons"></em>
            </div>
            <div className="swiper-prev-button">
              <em className="material-icons"></em>
            </div>
          </div>

          <div className="gallery thumb">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3663038/pexels-photo-3663038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3663039/pexels-photo-3663039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3551208/pexels-photo-3551208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img
                      src="https://images.pexels.com/photos/3375494/pexels-photo-3375494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />

                    <div className="overlay">
                      <em className="material-icons"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-next-button">
              <em className="material-icons">arrow_right_alt</em>
            </div>
            <div className="swiper-prev-button">
              <em className="material-icons">arrow_right_alt</em>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* NEWS FEED */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section>
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0 pt-14 md:pt-20 lg:pt-32">
          <div className="news-feed-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
            <div className="bg-lightOrange w-full h-[1px] "></div>
            <h3 className="min-w-[132px] font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black bg-white z-10 pl-1">
              News Feed
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div>
          <p className="md:max-w-3xl lg:max-w-none font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc text-center">
            Connecting the Abu Dhabi Malayalee Community: Stay Updated with the
            Latest News and Events
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 place-items-center">
            {newsFeed.map((news) => (
              <div
                className="rounded-[20px] shadow-card flex flex-col items-start justify-center"
                key={news.id}
              >
                <div>
                  <img src={news.image} alt="news" />
                </div>
                <div className="py-8 px-10 lg:py-10 lg:px-12">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl md:text-2xl">
                      {news.title}
                    </p>
                    <p className="bg-lightOrange px-2 py-2 text-xs">New</p>
                  </div>
                  <p className="mt-3 text-base md:text-lg lg:text-xl md:max-w-xs">
                    {news.description}
                  </p>
                  <a
                    href="#"
                    className="block mt-8 font-semibold text-base md:text-lg lg:text-xl"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* TESTIMONIAL */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section>
        <div className=" px-4 xl:px-0 pt-14 md:pt-20 lg:pt-32">
          <div className="news-feed-title max-w-screen-xl mx-auto grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
            <div className="bg-lightOrange w-full h-[1px] "></div>
            <h3 className="min-w-[132px] font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black bg-white z-10 pl-1">
              Testimonial
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div>
          <div className="text-center">
            <p className="md:max-w-3xl lg:max-w-none font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc text-center max-w-full">
              Voices of the Abu Dhabi Malayalee Community: Hear what our members
              have to say!
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 pb-36">
            <div className="mt-16 p-5 md:p-6 lg:p-8 xl:p-10 bg-lightOrange  max-w-3xl rounded-[20px] flex flex-col items-center justify-center text-center shadow-card">
              <img src="/images/quote.png" alt="quote" />
              <p className="pt-9 font-medium max-w-2xl text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <div className="pt-10 -mb-36 flex items-center justify-center flex-col">
                <img
                  src="/images/testimonialImg.png"
                  alt="testimony"
                  className="w-[70px] md:w-24 lg:w-28 xl:w-[118px]"
                />
                <p className="pt-2 font-medium text-xl">Lorem ipsum</p>
                <p className="font-medium text-sm text-desc">
                  consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* CONTACT FORM */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <div className="w-full h-16 md:h-24 xl:h-32" />
      <ContactForm />
    </>
  );
}
