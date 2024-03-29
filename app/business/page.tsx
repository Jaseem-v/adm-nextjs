"use client"

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { useState, useEffect } from 'react';
import httpClient from "@/services/axiosInstance";


const firms = [
  {
    id: 1,
    title: "Paypal",
    image: "/images/company1.png",
    link: "www.paypal.com",
  },
  {
    id: 2,
    title: "Amazon",
    image: "/images/company2.png",
    link: "www.amazon.com",
  },
  {
    id: 3,
    title: "Slack",
    image: "/images/company3.png",
    link: "www.slack.com",
  },
  {
    id: 4,
    title: "Microsoft",
    image: "/images/company4.png",
    link: "www.microsoft.com",
  },
  {
    id: 5,
    title: "Github",
    image: "/images/company5.png",
    link: "www.github.com",
  },
  {
    id: 6,
    title: "Paypal",
    image: "/images/company1.png",
    link: "www.paypal.com",
  },
  {
    id: 7,
    title: "Amazon",
    image: "/images/company2.png",
    link: "www.amazon.com",
  },
  {
    id: 8,
    title: "Slack",
    image: "/images/company3.png",
    link: "www.slack.com",
  },
  {
    id: 9,
    title: "Microsoft",
    image: "/images/company4.png",
    link: "www.microsoft.com",
  },
];

const Business = () => {
  type Business = {
    _id: string;
    image: string;
    name: string;
    website: string;
    profilePicture: {
      key: string
    };
  }
  const [business, setBusiness] = useState<Business[]>()
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        await httpClient().get('/user/business/verified')
          .then(res => {
            console.log(res)
            setBusiness(res.data.data)
          })
      } catch (err) {
        console.log(err)
      }
    }
    fetchBusinesses()
  }, [])


  console.log(business);
  const breadcrumbs = ['Business Firms']
  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HERO */}
      {/* \\\\\\\\\\\\ */}

      <SectionHeader
        title="Business Firms"
        breadcrumbs={breadcrumbs}
      />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      {/* <div className="my-12 md:my-14 lg:my-16 max-w-screen-xl mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          <div className="flex-1">
            <img src="/images/firms1.png" alt="img" className="w-full" />
          </div>
          <div className="flex flex-col text-left flex-1">
            <p className="font-medium text-3xl md:text-4xl xl:text-5xl text-textBlack">
            Unlock the Power of Connections
            </p>
            <p className="mt-5 md:mt-6 lg:mt-7 font-semibold text-lg md:text-xl text-descBlack">
              Explore a diverse range of industry-leading businesses that have consistently demonstrated excellence and innovation. Discover their unique stories, expertise, and offerings, and connect with these exceptional enterprises to forge valuable partnerships. Join us in celebrating the success and accomplishments of our esteemed business community members!
            </p>
          </div>
        </div>
      </div> */}

      {/* \\\\\\\\\\\\ */}
      {/* COMPANIES */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
          {/* <!-- search div --> */}
          {/* <div
            className="border border-black px-4 py-2 lg:py-3
                flex items-center justify-between
                mt-10 md:mt-11 lg:mt-12 max-w-full"
          >
            <input
              type="text"
              placeholder="Search companies"
              className="focus:outline-none"
            />
            <a href="">
              <button className="font-regular text-white bg-primary py-3  px-4 min-[380px]:px-8 md:px-12 text-base rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Search
              </button>
            </a>
          </div> */}

          {/* <!-- company card section --> */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                mt-14 lg:mt-16 mb-14 md:mb-20 lg:mb-24 
                gap-x-10 md:gap-x-11 lg:gap-x-12 gap-y-6 md:gap-y-7 lg:gap-8"
          >
            {business && business.map((firm) => (
              <Link href={`/business/${firm._id}`} key={firm._id} >
                <div
                  className="flex flex-col items-center justify-between shadow-eventCard
                        pt-8 md:pt-10 lg:pt-12 px-10 md:px-12 lg:px-14
                        pb-8 md:pb-9 lg:pb-10
                        rounded-[20px] hover:scale-[1.02] transition-all duration-200 hover:shadow-xl"
                >
                  <img
                    src={firm.profilePicture ? `https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${firm?.profilePicture?.key}` : "https://imgv3.fotor.com/images/slider-image/three-skyscrapers-in-black-and-white-effect.png"}
                    alt="company"
                    className="w-[282px] h-[146px] object-cover"
                  />
                  <p className="mt-7 md:mt-8 lg:mt-9 font-semibold text-lg lg:text-xl text-center">
                    {firm.name}
                  </p>
                  <p className="text-sm">{firm.website}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
