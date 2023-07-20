"use client";

import { newsFeed } from "../utils/content";
import React from "react";
import "./../components/global/home.css";
import ContactForm from "@/components/contactForm";
import Link from "next/link";
import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import EnlistModel from "@/components/enlistModel";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type Member = {
  _id: string;
  profilePicture: { key: string };
  fname: string;
  lname: string;
  place: string;
};
type Business = {
  _id: string;
  profilePicture: {
    key: string;
  };
  name: string;
  about: string;
  website: string;
};

type AdvertisementProps = {
  _id: string;
  desc: string;
  createdAt: string;
  image: {
    key: string;
  },
  type: string;
  createdBy: {
    name: string;
    profilePicture: {
      key: string;
    }
  }
};


const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [personalData, setPersonalData] = useState<Member[]>([]);
  const [businessData, setBusinessData] = useState<Business[]>([]);
  const [ads, setAds] = useState<AdvertisementProps[]>([])
  const [galleryData, setGalleryData] = useState<
    { image: { key: string } }[] | []
  >([]);
  const [showEnlistModel, setShowEnlistModel] = useState(false);

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        await httpClient()
          .get(`/user/personal/verified`)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              const slicedRes = res.data.data.slice(0, 8);
              setPersonalData(slicedRes);
            }
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchPersonalData();

    const fetchBusinessData = async () => {
      try {
        await httpClient()
          .get(`/user/business/verified`)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              const slicedRes = res.data.data.slice(0, 4);
              setBusinessData(slicedRes);
            }
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    const fetchGalleryData = async () => {
      try {
        await httpClient()
          .get(`/gallery/customer`)
          .then((res) => {
            if (res.status === 200) {
              setGalleryData(res.data.data);
            }
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const loggedin = token !== null;
    setIsLoggedIn(loggedin)

    fetchBusinessData();
    fetchGalleryData();
  }, []);

  useEffect(() => {
    const getAd = async () => {
      try {
        const usedCar = await httpClient().get('advertisement/used-car/approved')
        const realEstate = await httpClient().get('advertisement/real-estate/approved')
        const job = await httpClient().get('advertisement/job/approved')
        const ads = [...usedCar?.data?.data, ...realEstate?.data?.data, ...job?.data?.data].slice(0,3)
        setAds(ads)
        console.log(ads)
      } catch (error) {
        console.log(error)
      }
    }
    getAd()
  }, [])

  return (
    <>
      <section
        className={`mainHeader bg-left md:bg-bottom text-white font-inter`}
      >
        {/* \\\\\\\\\\\\\\\\ */}
        {/* \\\ Main header */}
        <div className="pt-36 pb-56 md:pt-44 md:pb-64 lg:pt-52 lg:pb-80 xl:pb-[415px] z-10 relative h-full">
          <div className="z-50 text-white text-center flex flex-col justify-center  px-5 xl:px-0">
            <p className=" font-bold text-[28px] md:text-[42px] lg:text-[54px] leading-tight md:leading-[62px]">
              Empowering Businesses
              <br />
              and Building Connections
            </p>
            <p className="font-medium mt-3 md:mt-4 text-sm md:text-lg lg:text-xl">
              Connecting, empowering, and thriving - join the <br />
              Abudhabi Malayalees community today!
            </p>
            <div className="flex gap-2 md:gap-4 mt-8 items-center justify-center">
              <Link href="/business-listings/add-company" className={`${isLoggedIn ? 'hidden' : ''}`}>
                <button className="py-3 md:py-4 px-8 md:px-12 bg-brownBg text-lightGold font-medium text-base md:text-lg lg:text-xl rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                  Register Now
                </button>
              </Link>
              <Link href="/about">
                <button
                  className={`py-[11px] md:py-[15px] px-6 md:px-10 ${isLoggedIn ? 'bg-brownBg text-white' : 'bg-white text-descBlack hover:bg-darkBg border border-white'}  font-medium text-base md:text-lg lg:text-xl rounded-lg  
                    flex items-center justify-center gap-2 active:translate-y-[1px] transition-all duration-75`}
                >
                  <p>Learn more</p>
                  <img src="/images/arrow-right.svg" alt="right arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="pt-36 pb-56 md:pt-44 md:pb-64 lg:py-52 lg:pb-72 z-10 relative">
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
              <Link href="/business-listings/add-company">
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
        </div> */}
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* SOCIAL MEDIA ICONS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      {/* <section className="z-10 lg:-mt-32">
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
                <a href={item.link} target="_blank" className="w-7 h-7">
                  {item.icon}
                </a>
                <h5>
                  {item.title} <br /> {item.type}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* ABOUT US */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section>
        <div className="my-20 text-center text-black max-w-screen-xl mx-auto px-5 xl:px-0">
          {/* <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0 mb-4">
            <div className="bg-lightOrange w-full h-[1px]"></div>
            <h3 className="font-kaisei text-black font-semibold tracking-wide uppercase text-2xl md:text-3xl lg:text-4xl">
              About us
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div> */}
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333]">
            We believe community grows businesses
          </h1>
          <h6 className="font-inter text-base md:text-lg lg:text-xl font-normal text-descBlack mt-4">
            Connecting Malayalee Entrepreneurs for Collective Success
          </h6>
          <div className="mt-[50px] xl:mt-[100px] flex items-center justify-center gap-32 text-left ">
            <img
              src="/images/about3.png"
              alt="community image"
              className="w-[530px] hidden lg:block"
            />
            <div className="flex flex-col font-inter ">
              <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl text-textBlack">
                Discover Our Story <br />
                and Mission
              </h2>
              <p className="pt-8 lg:pt-16 font-medium text-lg lg:text-xl leading-[1.5] text-descBlack">
                Abu Dhabi Malayalees is a vibrant and thriving business
                community of Malayalees in Abu Dhabi, United Arab Emirates. We
                are a group of like-minded individuals who come together to
                foster a strong sense of community, promote business
                opportunities, and support each other in both personal and
                professional endeavors.
              </p>
              <p className="pt-2 lg:pt-4 font-medium text-lg lg:text-xl leading-[1.5] text-descBlack">
                We aim to provide a platform for our members to network, share
                ideas, and explore new business opportunities.
              </p>
              <Link href="/about">
                <button className="mt-9 font-medium bg-brownBg text-lightGold py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2">
                  Learn more
                  <img src="/images/arrow-right.svg" alt="right arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}
      <section className="bg-lightBg ">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-10 md:py-12 xl:py-20  text-center flex flex-col items-center">
          <h3 className="text-textBlack font-poppins font-bold text-2xl md:text-3xl">
            Want to join the team?
          </h3>
          <button
            onClick={() => setShowEnlistModel(true)}
            className="mt-6 lg:mt-9 font-medium bg-brownBg text-lightGold py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2"
          >
            Join our community
            <img src="/images/arrow-right.svg" alt="right arrow" />
          </button>
        </div>
      </section>
      {showEnlistModel && (
        <EnlistModel setShowEnlistModel={setShowEnlistModel} />
      )}

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* NUMBERS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      {/* <section className=" py-16 bg-gray bg-zinc-800">
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
      </section> */}

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* MEMBERS */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className=" max-w-screen-xl mx-auto px-5 xl:px-0 py-16">
        {/* <div className="about-us-title grid place-items-center justify-items-center grid-cols-6 gap-1 md:gap-0 overflow-hidden">
          <div className="bg-lightOrange w-full h-[1px]  col-span-1 lg:col-span-2"></div>
          <h3 className="min-w-[188px] font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black z-10 pl-1 col-span-4 lg:col-span-2 whitespace-nowrap">
            Meet Our Members
          </h3>
          <div className="bg-lightOrange w-full h-[1px] col-span-1 lg:col-span-2"></div>
        </div> */}
        <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333] text-center">
          Meet Our Members
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="md:max-w-3xl lg:max-w-4xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-descBlack text-center">
            As a member, gain exclusive access to a thriving network of fellow
            entrepreneurs and professionals, all united by the shared goal of
            success. Join us today and unlock your potential.
          </p>
          <div className="team grid  mt-12 md:grid-cols-2 xl:grid-cols-4 gap-y-7 lg:gap-y-10 lg:gap-x-10 gap-x-7">
            {personalData.map((member) => (
              <div className="team-member" key={member._id}>
                <div>
                  <img
                    src={
                      member?.profilePicture
                        ? `https://abudhabi-malayalees.onrender.com/resource/personal-account-profile-picture/${member.profilePicture.key}`
                        : "images/profilePreview.png"
                    }
                    // src={`/personal-account-profilez-picture/${member.profilePicture.key}`}
                    alt="team-member-1"
                    className="rounded-md w-[333px] lg:w-[290px] h-[333px] lg:h-[290px] object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <Link
                    href={`/businesspersons/${member._id}`}
                    className=" font-semibold   md:text-lg lg:text-xl"
                  >
                    {member.fname}
                    {}
                    {member.lname}
                  </Link>
                  <p className=" text-sm md:text-base text-[#333] font-medium">
                    Abu dhabi
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/businesspersons"
            className="mt-8 md:mt-12 lg:mt-16 font-regular bg-brownBg transition-all duration-200 active:bg-amber-700 py-3 px-12 text-base rounded-full text-lightGold w-fit"
          >
            Load More
          </Link>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* POPULAR COMPANIES */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-lightBg py-14 md:py-16 lg:py-24">
        <div className=" max-w-screen-xl mx-auto px-5 xl:px-0 ">
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333] text-center">
            Popular Companies
          </h1>
          <div className="flex items-center justify-center">
            <p className="md:max-w-3xl lg:max-w-4xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-descBlack text-center">
              Discover the Vibrant Business Landscape of Abu Dhabi with
              AbudhabiMalayalees
            </p>
          </div>
          <div className="companies mt-12 md:mt-16 lg:mt-20  grid lg:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
            {businessData.map((business) => (
              <div
                className="company flex flex-col gap-3 w-full xl:w-[575px]"
                key={business._id}
              >
                <div className="h-[135px] md:h-[232px] lg:h-[192px] xl:h-[232px] overflow-hidden rounded-2xl">
                  <img
                    src={
                      business?.profilePicture
                        ? `https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${business.profilePicture.key}`
                        : "https://imgv3.fotor.com/images/slider-image/three-skyscrapers-in-black-and-white-effect.png"
                    }
                    alt="company1"
                    className="bg-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl p-7 flex items-start gap-4 relative">
                  {/* <div className="w-12 h-12">
                    <img src='images/appleLogo.png' alt="companylogo" width="48px" />
                  </div> */}
                  <div>
                    <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                      {business.name}
                    </p>
                    <p className="mt-2 text-desc text-sm max-w-md font-semibold">
                      {business.website}
                    </p>
                    <Link
                      href={`/business/${business._id}`}
                      className=" block mt-4 font-regular bg-brownBg text-lightGold text-sm py-3 px-4 hover:bg-opacity-90 transition-all duration-200 active:bg-amber-700 w-fit"
                    >
                      View Details
                    </Link>
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
          <Link
            href="/business"
            className="mt-8 md:mt-12 lg:mt-16 font-regular border border-brown py-3 px-10 md:px-12 text-sm md:text-base rounded-full text-brown text-center block mx-auto
                hover:bg-brownBg hover:text-lightGold w-fit"
          >
            Load More
          </Link>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* NEWS FEED */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      {/* <section className="py-14 md:py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0 ">
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333] text-center">
            News Feed
          </h1>
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
                    <p className="bg-brownBg text-lightGold px-2 py-2 text-xs">
                      New
                    </p>
                  </div>
                  <p className="mt-3 text-base md:text-lg lg:text-xl md:max-w-xs">
                    {news.description}
                  </p>
                  <a
                    href="#"
                    className="block mt-8 font-semibold text-sm md:text-lg underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* ADVERTISEMENT */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className="py-14 md:py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col justify-center items-center">
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333] text-center">
            Advertisement
          </h1>
          {/* <p className="md:max-w-3xl lg:max-w-none font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc text-center">
            Connecting the Abu Dhabi Malayalee Community: Stay Updated with the
            Latest News and Events
          </p> */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 place-items-center">
            {ads?.map((ad) => (
              <div key={ad._id} className="rounded-2xl shadow-lg ">
                <div>
                <img src={`https://abudhabi-malayalees.onrender.com/resource/advertisement/${ad?.image?.key}`} alt="c" className="rounded-t-2xl w-full h-72 object-cover block"/>
                <div className="flex items-center justify-between px-6 pt-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                      style={{backgroundImage: `url(https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${ad.createdBy?.profilePicture?.key})`}} 
                    />
                    <p className="font-semibold text-textBlack">{ad.createdBy?.name}</p>
                  </div>
                  <p className="text-sm text-descBlack">{ad.createdAt.slice(0,10)}</p>
                </div>
                <div className="text p-6">
                  {/* <h3 className="font-semibold text-xl">For sale</h3> */}
                  <p className="mb-2">{ad?.desc}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/advertisement"
          >
            <button className="mt-8 md:mt-12 lg:mt-16 font-regular bg-brownBg transition-all duration-200 active:bg-amber-700 py-3 px-12 text-base rounded-full text-lightGold w-fit">Load More</button>
            
          </Link>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* GALLERY */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      <section className=" py-16 bg-lightBg">
        <div className="max-w-screen-xl mx-auto mb-16">
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333] text-center">
            Gallery
          </h1>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <div className="flex flex-wrap -mx-4">
              {galleryData &&
                galleryData.map((el, i) => (
                  <div className="md:w-1/3 px-4 mb-8" key={i}>
                    <a
                      href={`https://abudhabi-malayalees.onrender.com/resource/gallery/${el.image.key}`}
                    >
                      <img
                        alt="img1"
                        src={`https://abudhabi-malayalees.onrender.com/resource/gallery/${el.image.key}`}
                      />
                    </a>
                  </div>
                ))}
            </div>
          </LightGallery>
          {/* <div className="-m-1 flex flex-wrap md:-m-2">

            <div className="flex flex-wrap">
              {galleryData && galleryData.map((el) => (
                // <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`https://abudhabi-malayalees.onrender.com/resource/gallery/${el.image.key}`} />

              ))
              }

            </div>

            <Link href='/gallery'
              className="mt-8 md:mt-12 lg:mt-16 font-regular border border-white py-3 px-10 md:px-12 text-sm md:text-base rounded-full text-white text-center block mx-auto
                hover:bg-gray-900 w-fit"
            >
              Load More
            </Link>
          </div> */}
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* TESTIMONIAL */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      {/* <section>
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
      </section> */}

      {/* \\\\\\\\\\\\\\\\\\\ */}
      {/* CONTACT FORM */}
      {/* \\\\\\\\\\\\\\\\\\\ */}

      {/* <div className="w-full h-16 md:h-24 xl:h-32" /> */}
      <ContactForm />
    </>
  );
};
export default Index;
