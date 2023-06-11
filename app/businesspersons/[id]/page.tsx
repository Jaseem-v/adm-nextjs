"use client"

import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const BusinessPersonDetails = ({ params }: {
  params: { id: string }
}) => {
  const [isLoading, setIsLoading] = useState(false)
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
    lastSync: '',
    isDeleted: false,
    createdAt: '',
    updatedAt: '',
    __v: 0
  })



  const { id } = params




  const fullname = data.fname + " " + data.lname;

  // const id = "64699180fb028a79b7284578"

  // console.log(id);


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

  console.log('data', data)


  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}

      <div
        className="py-16 md:py-20 lg:py-24 xl:py-28
            px-5 xl:px-0  bg-black text-white"
      >
        <div className=" flex flex-col items-start justify-center max-w-screen-xl mx-auto">
          <p className="font-kaisei text-lg md:text-xl lg:text-2xl">
            Business profiles
          </p>
          <p
            className="font-bold text-4xl md:text-5xl lg:text-6xl
                    mt-3 md:mt-4 lg:mt-5"
          >
            Business Man
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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-7 gap-5 px-5 xl:px-0 ">
          <div className="flex flex-col lg:gap-7 gap-5">
            {/* business man card  */}
            <div className="max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 xl:row-span-2 text-left">
              <div className="w-full max-h-[270px] flex justify-center items-center">
                <img
                  src="/images/team5.png"
                  alt="person"
                  className="object-cover w-full h-64 rounded"
                />
              </div>
              <p className="business-name font-semibold text-2xl md:text-3xl lg:text-[32px] pt-7">
                {fullname}
              </p>
              <p className="business-name font-semibold text-base lg:text-lg font-lora lg:pt-1">
                CEO & Founder
              </p>
              <p className="font-medium text-base text-desc mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labor.
              </p>
              <div className="flex flex-col gap-4 font-medium text-base md:text-lg py-8">
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/location.svg" alt="location" />
                  <p>Al Ain, Abudhabi</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/mail.svg" alt="mail" />
                  <p>{data.email}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/phone.svg" alt="phone" />
                  <p>{data.phone}</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
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
              </div>
            </div>
            {/* social media  */}
            <div className="max-w-[400px] bg-white rounded-[10px] flex flex-col px-5 md:px-6 lg:px-7 py-8 md:py-9 lg:py-10 gap-7">
              <p className="font-semibold text-xl md:text-2xl">Social Media</p>
              <p className="font-medium text-base text-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labor.
              </p>
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
          {/* Overview  */}
          <div className="flex flex-col md:col-span-2 bg-white rounded-[10px] xl:row-span-3">
            <div className="py-6 px-11 bg-black text-white w-full rounded-[10px] flex gap-5 md:gap-6 lg:gap-7 overflow-x-scroll">
              <a href="#">
                <p className=" text-lg md:text-xl text-[#E46E00] underline underline-offset-4">
                  Overview
                </p>
              </a>
              <a href="#">
                <p className=" text-lg md:text-xl">Articles</p>
              </a>
              <a href="#">
                <p className=" text-lg md:text-xl">Awards</p>
              </a>
              <a href="#">
                <p className=" text-lg md:text-xl">Location</p>
              </a>
            </div>
            <div className="flex flex-col gap-8 md:gap-9 lg:gap-10 p-9 md:p-11">
              {/* businessman details  */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-xl md:text-2xl">
                  Business man Details
                </p>
                <div className="flex flex-col gap-4 text-desc text-lg md:text-xl">
                  <p className="font-semibold">
                    Full Name :{" "}
                    <span className="font-medium">{fullname}</span>
                  </p>
                  <p className="font-semibold">
                    Language :{" "}
                    <span className="font-medium">English, Spanish, Hindi</span>
                  </p>
                  <p className="font-semibold">
                    Age : <span className="font-medium">34</span>
                  </p>
                  <p className="font-semibold">
                    Place : <span className="font-medium">Dubai</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-xl md:text-2xl">
                  About Business Man
                </p>
                <p className="font-medium text-lg md:text-xl text-desc">
                  Dr. Agnes Ayres is a Maxillofacial Surgeon in New York, NY.
                  Dr. Ayres has more experience with Congenital Cardiac
                  Disorders and Cardiac Care than other specialists in his area.
                  He is affiliated with medical facilities such as Mount Sinai
                  Morningside and Roosevelt Hospital. He is accepting new
                  patients. Be sure to call ahead with Dr. Pinney to book an
                  appointment.
                </p>
              </div>

              {/* company gallery  */}
              <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                <p className="font-bold text-xl md:text-2xl">Company Gallery</p>
                <div className="flex gap-6 overflow-x-scroll lg:overflow-auto">
                  <img src="/images/gallery4.png" alt="" />
                  <img src="/images/gallery2.png" alt="" />
                  <img src="/images/gallery3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default BusinessPersonDetails;
