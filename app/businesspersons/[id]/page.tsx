"use client"

import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import SectionHeader from "@/components/SectionHeader";
import Masonry from 'react-masonry-css'

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

const BusinessPersonDetails = ({ params }: {
  params: { id: string }
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [ads, setAds] = useState<AdvertisementProps[]>([])
  const [data, setData] = useState({
    _id: "",
    fname: "",
    lname: "",
    username: "",
    phone: '',
    email: '',
    about: '',
    socialMediaLinks: [],
    status: '',
    profilePicture: {
      key: ""
    },
  })



  const { id } = params




  const fullname = data.fname + " " + data.lname;
  useEffect(() => {
    const fetchData = async () => {
      try {
        await httpClient().get(`/user/personal/${id}`)
          .then(res => {
            if (res.status === 400) {
              toast.error(res.data.message, {
                icon: '👏',
              });
            }
            if (res.status === 200) {
              setData(res.data.data);
            }
          })
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  interface SocialMediaLink {
    _id: string;
    title: string;
    link: string;
    // Add other properties if necessary
  }
  const socialMediaLinks: SocialMediaLink[] = data.socialMediaLinks;

  const instagramObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "INSTAGRAM");
  const facebookObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "FACEBOOK");
  const linkedinObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "LINKEDIN");
  const twitterObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "TWITTER");
  const youtubeObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "YOUTUBE");
  const whatsappObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "WHATSAPP");
  const telegramObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "TELEGRAM");


  console.log('socialmedia', socialMediaLinks)
  const breadcrumbs = ['Business', 'Details']

  // Advertisement

  const breakpointColumnsObj = {
    default: 3,
    4000: 3,
    1024: 2,
    500: 1
  };

  useEffect(() => {
    const getAd = async () => {
      try {
        const ads = await httpClient().get(`advertisement/owned/${id}`)
        console.log('ads', ads)
        setAds(ads.data?.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAd()
  }, [])
  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}

      <SectionHeader title={fullname} breadcrumbs={breadcrumbs} />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 lg:gap-7 gap-5 px-5 xl:px-0 ">

          <div className="flex flex-col md:col-span-2 bg-white rounded-[10px] row-start-1  xl:row-start-1 xl:col-start-1">
            <div className="py-6 px-11 bg-black text-white w-full rounded-[10px] flex gap-5 md:gap-6 lg:gap-7 overflow-x-scroll">
              <a href="#">
                <p className=" text-lg md:text-xl text-[#E46E00] underline underline-offset-4">
                  Overview
                </p>
              </a>
              {/* <a href="#">
                <p className=" text-lg md:text-xl">Articles</p>
              </a>
              <a href="#">
                <p className=" text-lg md:text-xl">Awards</p>
              </a>
              <a href="#">
                <p className=" text-lg md:text-xl">Location</p>
              </a> */}
            </div>
            <div className="flex flex-col gap-8 md:gap-9 lg:gap-10 p-9 md:p-11">
              {/* businessman details  */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <div className="w-full max-h-[270px] flex items-center">
                  <img
                    src={data?.profilePicture?.key ? `https://abudhabi-malayalees.onrender.com/resource/personal-account-profile-picture/${data.profilePicture.key}` : "/images/team5.png"}
                    alt="person"
                    className="object-cover h-64 rounded"
                  />
                </div>
                <p className="business-name font-semibold text-2xl md:text-3xl lg:text-[32px] pt-7">
                  {fullname}
                </p>
                {/* <p className="business-name font-semibold text-base lg:text-lg font-lora lg:pt-1">
                CEO & Founder
              </p> */}
                {/* <p className="font-medium text-base text-desc mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labor.
              </p> */}
                <div className="flex flex-col gap-4 font-medium text-base md:text-lg pb-4">
                  <div className="flex items-center justify-start gap-2">
                    <img src="/images/location.svg" alt="location" />
                    <p>Al Ain, Abudhabi</p>
                  </div>
                  <div className="flex items-center justify-start gap-2 w">
                    <img src="/images/mail.svg" alt="mail" />
                    <p className="break-all">{data.email}</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <img src="/images/phone.svg" alt="phone" />
                    <p>{data.phone}</p>
                  </div>
                </div>
                {/* <p className="font-bold text-xl md:text-2xl">
                  Personal Details
                </p>
                <div className="flex flex-col gap-4 text-desc text-lg md:text-xl">
                  <p className="font-semibold">
                    Full Name :{" "}
                    <span className="font-medium">{fullname}</span>
                  </p>
                  {/* <p className="font-semibold">
                    Age : <span className="font-medium">34</span>
                  </p> */}

                {/* <p className="font-semibold">
                    Place : <span className="font-medium">Dubai</span>
                  </p>
                </div> */}
              </div>
              <div className={`flex flex-col gap-6 md:gap-7 lg:gap-8 ${data.about === 'NO ABOUT' ? 'hidden' : ''}`}>
                <p className="font-bold text-xl md:text-2xl">
                  About Business Man
                </p>
                <p className="font-medium text-lg md:text-xl text-desc">
                  {data.about}
                </p>
              </div>

              {/* company gallery  */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-xl md:text-2xl">Gallery</p>
                <div className="flex gap-6 overflow-x-scroll lg:overflow-auto">
                  <img src="/images/gallery4.png" alt="" />
                  <img src="/images/gallery2.png" alt="" />
                  <img src="/images/gallery3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* business man card  */}
          {/* <div className=" bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 xl:row-span-1 text-left">
            <div className="w-full max-h-[270px] flex justify-center items-center">
              <img
                src={data.profilePicture.key ? `https://abudhabi-malayalees.onrender.com/resource/personal-account-profile-picture/${data.profilePicture.key}` : "/images/team5.png"}
                alt="person"
                className="object-cover w-full h-64 rounded"
              />
            </div>
            <p className="business-name font-semibold text-2xl md:text-3xl lg:text-[32px] pt-7">
              {fullname}
            </p> */}
          {/* <p className="business-name font-semibold text-base lg:text-lg font-lora lg:pt-1">
                CEO & Founder
              </p> */}
          {/* <p className="font-medium text-base text-desc mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labor.
              </p> */}
          {/* <div className="flex flex-col gap-4 font-medium text-base md:text-lg py-8">
              <div className="flex items-center justify-start gap-2">
                <img src="/images/location.svg" alt="location" />
                <p>Al Ain, Abudhabi</p>
              </div>
              <div className="flex items-center justify-start gap-2 w">
                <img src="/images/mail.svg" alt="mail" />
                <p className="break-all">{data.email}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/images/phone.svg" alt="phone" />
                <p>{data.phone}</p>
              </div>
            </div> */}
          {/* <div className="flex items-center justify-start gap-2">
                <a href="#">
                  <button className="py-3 md:py-4 px-6 md:px-7 border border-black text-sm rounded-lg w-32 md:w-36">
                    Message
                  </button>
                </a>
                <a href="#">
                  <button className="py-3 md:py-4 px-6 md:px-7 bg-orange text-white text-sm rounded-lg w-32 md:w-36">
                    Follow
                  </button>
                </a>
              </div> */}
          {/* </div> */}
          {/* social media  */}
          <div className=" bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7 h-fit">
            <p className="font-semibold text-xl md:text-2xl">Social Media</p>
            <p className="font-medium text-base text-desc">
              Connect with me on social media to stay updated on my latest projects, interests, and experiences.
            </p>
            <div className="grid grid-cols-4 gap-10">
              {facebookObj && <a href={`facebook.com/${facebookObj.link}`}>
                <img src="/images/fb.png" alt="fb" />
              </a>}
              {whatsappObj && <a href="#">
                <img src="/images/whatsappp.png" alt="fb" />
              </a>}
              {twitterObj && <a href="#">
                <img src="/images/twitter2.png" alt="twitter" />
              </a>}
              {instagramObj && <a href={`instagram.com/${instagramObj.link}`}>
                <img src="/images/insta.png" alt="instagram" />
              </a>}
              {linkedinObj && <a href="#">
                <img src="/images/linkedin2.png" alt="linkedin" />
              </a>}
              {youtubeObj && <a href="#">
                <img src="/images/yt.png" alt="youtube" />
              </a>}
              {/* <a href="#">
                  <img src="/images/tiktok.png" alt="tiktok" />
                </a> */}
              {telegramObj && <a href="#">
                <img src="/images/tg.png" alt="telegram" />
              </a>}
            </div>
          </div>

          {/* Overview  */}

        </div>
        {ads.length > 0 && 
        <div className="mt-8 lg:mt-10 max-w-7xl mx-2 lg:mx-auto">
          <p className="font-semibold text-xl md:text-2xl mb-5 lg:mb-7 pl-4">Advertisements</p>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid xl:mx-0"
            columnClassName="my-masonry-grid_column">
            {ads.map((ad) => (
              <div key={ad._id} className="rounded-lg shadow-md inline-block h-fit w-full">
                <div>
                <img src={`https://abudhabi-malayalees.onrender.com/resource/advertisement/${ad?.image?.key}`} alt="c" className="rounded-t-md w-full h-full block"/>
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
          </Masonry>
        </div>}
      </section>
      {/* \\\\\\\\\\\\\\\\  */}
      {/*  \\\ Newsletter */}
      <section className="overflow-hidden">
        <div className="flex flex-col items-start md:items-center justify-center pt-20 md:pt-24 lg:pt-28 pb-32 lg:pb-36 px-5 xl:px-0 text-left md:text-center">
          <p className="font-semibold text-xl md:text-2xl ">
            Subscribe to our newsletter
          </p>
          <p className="font-medium text-base text-desc mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labor.
          </p>
          <div className="flex items-center justify-between border border-black w-3/4 mt-7 md:mt-8 lg:mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 w-52 md:w-full"
            />
            <a href="#">
              <button className="py-4 px-7 md:py-5 md:px-10 bg-brownBg text-white">
                Subscribe
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPersonDetails;
