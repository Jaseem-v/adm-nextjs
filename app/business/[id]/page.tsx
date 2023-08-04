"use client";

import SectionHeader from "@/components/SectionHeader";
import { getAccessToken, saveAccessToken } from "@/services/authService";
import httpClient from "@/services/axiosInstance";
import { BusinessAccountDataType } from "@/utils/schema/stateType";
import Link from "next/link";
import Masonry from 'react-masonry-css'
import { useState, useEffect } from 'react';

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

const CompanyDetails = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<BusinessAccountDataType>()
  const [userData, setUserData] = useState()
  // const id = 1;

  const { id } = params
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await httpClient().get(`/user/business/${id}`)
        console.log(response)
        console.log(response.data.data)
        setData(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserData()
  }, [])

  const [ads, setAds] = useState<AdvertisementProps[]>([])

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

  // const addCategory = async () => {
  //   const data = {
  //     'name': 'mobile', 'status': 'Active', 'visibility': 'Show', 'image': {
  //       uri: 'https://i.ibb.co/SPJXPcD/store.png',
  //       type: 'image/png',
  //       name: 'store.png',
  //     }
  //   }
  //   try {
  //     await httpClient().post('category', data)
  //       .then(res => console.log(res))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // addCategory()

  // const getCategory = async () => {
  //   try {
  //     const response = await httpClient().get('/category');
  //     if (response.status === 200) {
  //       const categoryData = response.data;
  //       // console.log(categoryData);
  //     } else {
  //       console.log('Failed to fetch category data.');
  //     }
  //     return response;
  //   } catch (error) {
  //     console.log('An error occurred while fetching category data:', error);
  //   }
  // };
  // console.log(getCategory())
  // getCategory()

  interface SocialMediaLink {
    _id: string;
    title: string;
    link: string;
    // Add other properties if necessary
  }
  const socialMediaLinks: SocialMediaLink[] = data?.socialMediaLinks ?? [];

  const instagramObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "INSTAGRAM");
  const facebookObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "FACEBOOK");
  const linkedinObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "LINKEDIN");
  const twitterObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "TWITTER");
  const youtubeObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "YOUTUBE");
  const whatsappObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "WHATSAPP");
  const telegramObj = Object.values(socialMediaLinks).find((obj: { title: string }) => obj.title === "TELEGRAM");



  const breadcrumbs = ['Business', 'Details']
  return (
    <>
      <SectionHeader title={data ? data?.name : ""} breadcrumbs={breadcrumbs} />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-7 gap-5 px-5 xl:px-0 ">
          {/* <!-- Overview --> */}
          <div className="flex flex-col md:col-span-2 bg-white rounded-[10px] xl:row-span-5">
            <div className="py-6 px-11 bg-black text-white w-full rounded-[10px]">
              <p className="font-medium text-lg md:text-xl">Overview</p>
            </div>
            <div className="flex flex-col gap-8 md:gap-9 lg:gap-10 p-9 md:p-11 font-poppins">
              <img src={data?.profilePicture ? `https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${data.profilePicture.key}` : "/images/companyProfile.png"} alt="img" />
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-2xl md:text-3xl">{data?.name}</p>
                <p className="font-medium text-lg md:text-xl text-desc max-w-2xl">
                  {
                    data?.about
                  }
                </p>
              </div>
              {/* <!-- owner details --> */}
              {data?.contactDetails?.fname ? <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-semibold text-xl md:text-2xl">Owner Details</p>
                <div className="flex flex-col gap-4 text-desc text-lg md:text-xl">
                  <p className="font-semibold">
                    Full Name :{" "}
                    <span className="font-medium">{data?.contactDetails.fname} {data?.contactDetails.lname}</span>
                  </p>
                  <p className="font-semibold">
                    Email : <span className="font-medium">{data?.contactDetails.email}</span>
                  </p>
                  <p className="font-semibold">
                    Phone : <span className="font-medium">{data?.contactDetails.phone}</span>
                  </p>
                </div>
              </div> : null}
              {/* <!-- company gallery --> */}
              {/* <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-semibold text-xl md:text-2xl">Company Gallery</p>
                <div className="flex gap-6 overflow-x-scroll lg:overflow-auto">
                  <img src="/images/gallery4.png" alt="" />
                  <img src="/images/gallery2.png" alt="" />
                  <img src="/images/gallery3.png" alt="" />
                </div>
              </div> */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-semibold text-xl md:text-2xl">Contact info</p>
                <div className="flex flex-col gap-4 font-medium text-base md:text-lg">
                  <div className="flex items-center justify-start gap-2">
                    <img src="/images/location.svg" alt="location" />
                    <p>{data?.addressDetails.address} , {data?.addressDetails.city} , {data?.addressDetails.state} , {data?.addressDetails.pincode}</p>

                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <img src="/images/mail.svg" alt="mail" />
                    <p>{data?.email}</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <img src="/images/phone.svg" alt="phone" />
                    <p>{data?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- contact info card --> */}
          {/* <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Contact info</p>
            <div className="flex flex-col gap-4 font-medium text-base md:text-lg">
              <div className="flex items-center justify-start gap-2">
                <img src="/images/location.svg" alt="location" />
                <p>{data?.addressDetails.address} , {data?.addressDetails.city} , {data?.addressDetails.state} , {data?.addressDetails.pincode}</p>

              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/images/mail.svg" alt="mail" />
                <p>{data?.email}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/images/phone.svg" alt="phone" />
                <p>{data?.phone}</p>
              </div>
            </div>
          </div> */}

          {/* <!-- location --> */}
          <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Location</p>
            <img src="/images/locationImg.png" alt="location" />

            <Link target="_blank"
              className="text-center navBtn font-medium bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
              href={`https://www.google.com/maps?q=${data?.name.replace(/ /g, "+")},${data?.addressDetails.address.replace(/ /g, "+")},${data?.addressDetails.city.replace(/ /g, "+")},${data?.addressDetails.state.replace(/ /g, "+")},${data?.addressDetails.pincode}`}>
              Get Direction
            </Link>
          </div>
          {/* <!-- social media --> */}
          <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Social Media</p>
            <div className="grid grid-cols-4 gap-10">
              {facebookObj && <a href={facebookObj.link}>
                <img src="/images/fb.png" alt="fb" />
              </a>}
              {whatsappObj && <a href="#">
                <img src="/images/whatsappp.png" alt="fb" />
              </a>}
              {twitterObj && <a href={twitterObj.link}>
                <img src="/images/twitter2.png" alt="twitter" />
              </a>}
              {instagramObj && <a href={instagramObj.link}>
                <img src="/images/insta.png" alt="instagram" />
              </a>}
              {linkedinObj && <a href={linkedinObj.link}>
                <img src="/images/linkedin2.png" alt="linkedin" />
              </a>}
              {youtubeObj && <a href={youtubeObj.link}>
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
        </div>
        {/* <!-- advetisemnt --> */}
        {ads?.length > 0 &&
          <div className="mt-8 lg:mt-10 max-w-7xl mx-2 lg:mx-auto">
            <p className="font-semibold text-xl md:text-2xl mb-5 lg:mb-7 pl-4">Advertisements</p>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid xl:mx-0"
              columnClassName="my-masonry-grid_column">
              {ads.map((ad) => (
                <div key={ad._id} className="rounded-lg shadow-md inline-block h-fit w-full">
                  <div>
                    <img src={`https://abudhabi-malayalees.onrender.com/resource/advertisement/${ad?.image?.key}`} alt="c" className="rounded-t-md w-full h-full block" />
                    {/* <div className="flex items-center justify-between px-6 pt-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                      style={{backgroundImage: `url(https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${ad.createdBy?.profilePicture?.key})`}} 
                    />
                    <p className="font-semibold text-textBlack">{ad.createdBy?.name}</p>
                  </div>
                  <p className="text-sm text-descBlack">{ad.createdAt.slice(0,10)}</p>
                </div> */}
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

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

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
              <button className="py-4 px-7 md:py-5 md:px-10 bg-primary text-white">
                Subscribe
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
