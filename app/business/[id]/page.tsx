"use client";

import SectionHeader from "@/components/SectionHeader";
import { getAccessToken, saveAccessToken } from "@/services/authService";
import httpClient from "@/services/axiosInstance";
import { useState, useEffect } from 'react';


const CompanyDetails = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState()
  const [userData, setUserData] = useState()
  // const id = 1;

  const { id } = params
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await httpClient().get(`/user/business/${id}`)
        console.log(response)
        console.log(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserData()
  }, [])

  const addCategory = async () => {
    const data = {
      'name': 'mobile', 'status': 'Active', 'visibility': 'Show', 'image': {
        uri: 'https://i.ibb.co/SPJXPcD/store.png',
        type: 'image/png',
        name: 'store.png',
      }
    }
    try {
      await httpClient().post('category', data)
        .then(res => console.log(res))
    } catch (error) {
      console.log(error)
    }
  }
  addCategory()

  const getCategory = async () => {
    try {
      const response = await httpClient().get('/category');
      if (response.status === 200) {
        const categoryData = response.data;
        // console.log(categoryData);
      } else {
        console.log('Failed to fetch category data.');
      }
      return response;
    } catch (error) {
      console.log('An error occurred while fetching category data:', error);
    }
  };
  // console.log(getCategory())
  getCategory()
  return (
    <>
      <div
        className="businessFirms-header text-white py-16 md:py-20 lg:py-24 xl:py-28
    
    px-5 xl:px-0  "
      >
        <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-center">
          <p className="font-kaisei text-lg md:text-xl lg:text-2xl">
            Business Profiles
          </p>
          <p
            className="font-bold text-4xl md:text-5xl lg:text-6xl
            mt-3 md:mt-4 lg:mt-5"
          >
            Business Details
          </p>
          <p
            className="text-sm md:text-base max-w-lg text-start
            mt-3 md:mt-4 lg:mt-5"
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore
          </p>
        </div>
      </div>

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-7 gap-5 px-5 xl:px-0 xl:grid-rows-5">
          {/* <!-- Overview --> */}
          <div className="flex flex-col md:col-span-2 bg-white rounded-[10px] xl:row-span-4">
            <div className="py-6 px-11 bg-black text-white w-full rounded-[10px]">
              <p className="font-medium text-lg md:text-xl">Overview</p>
            </div>
            <div className="flex flex-col gap-8 md:gap-9 lg:gap-10 p-9 md:p-11 font-poppins">
              <img src="/images/companyProfile.png" alt="img" />
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-2xl md:text-3xl">Twitter</p>
                <p className="font-medium text-lg md:text-xl text-desc max-w-2xl">
                  Dr. Agnes Ayres is a Maxillofacial Surgeon in New York, NY.
                  Dr. Ayres has more experience with Congenital Cardiac
                  Disorders and Cardiac Care than other specialists in his area.
                  He is affiliated with medical facilities such as Mount Sinai
                  Morningside and Roosevelt Hospital. He is accepting new
                  patients. Be sure to call ahead with Dr. Pinney to book an
                  appointment.
                </p>
              </div>
              {/* <!-- owner details --> */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-semibold text-xl md:text-2xl">Owner Details</p>
                <div className="flex flex-col gap-4 text-desc text-lg md:text-xl">
                  <p className="font-semibold">
                    Full Name :{" "}
                    <span className="font-medium">Business Man</span>
                  </p> 
                  <p className="font-semibold">
                    Age : <span className="font-medium">34</span>
                  </p>
                  <p className="font-semibold">
                    Place : <span className="font-medium">Dubai</span>
                  </p>
                </div>
              </div>
              {/* <!-- company gallery --> */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-semibold text-xl md:text-2xl">Company Gallery</p>
                <div className="flex gap-6 overflow-x-scroll lg:overflow-auto">
                  <img src="/images/gallery4.png" alt="" />
                  <img src="/images/gallery2.png" alt="" />
                  <img src="/images/gallery3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- contact info card --> */}
          <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Contact info</p>
            <div className="flex flex-col gap-4 font-medium text-base md:text-lg">
              <div className="flex items-center justify-start gap-2">
                <img src="/images/location.svg" alt="location" />
                <p>Al Ain, Abudhabi</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/images/mail.svg" alt="mail" />
                <p>businesscompany@gmail.com</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/images/phone.svg" alt="phone" />
                <p>980328793</p>
              </div>
            </div>
          </div>
          {/* <!-- location --> */}
          <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Location</p>
            <img src="/images/locationImg.png" alt="location" />
          </div>
          {/* <!-- social media --> */}
          <div className="w-full xl:max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
            <p className="font-semibold text-xl md:text-2xl">Social Media</p>
            <div className="grid grid-cols-4 gap-10">
              <a href="#">
                <img src="/images/fb.png" alt="fb" />
              </a>
              <a href="#">
                <img src="/images/whatsappp.png" alt="fb" />
              </a>
              <a href="#">
                <img src="/images/twitter2.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="/images/insta.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="/images/linkedin2.png" alt="linkedin" />
              </a>
              <a href="#">
                <img src="/images/yt.png" alt="youtube" />
              </a>
              <a href="#">
                <img src="/images/tiktok.png" alt="tiktok" />
              </a>
              <a href="#">
                <img src="/images/tg.png" alt="telegram" />
              </a>
            </div>
          </div>
        </div>
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
              <button className="py-4 px-7 md:py-5 md:px-10 bg-orange text-white">
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
