"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Data } from "../../utils/schema/stateType";

const BusinessPersons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Data[]>([]);

  // const fullname = data.fname + " " + data.lname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await httpClient()
          .get(`/user/personal/verified`)
          .then((res) => {
            if (res.status === 400) {
              toast.error(res.data.message, {
                icon: "👏",
              });
            }
            if (res.status === 200) {
              console.log(res.data);
              setData(res.data.data);
            }
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);
  const breadcrumbs = ["Business Persons"];

  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}
      <SectionHeader title="Business Persons" breadcrumbs={breadcrumbs} />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div
          className="py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-start justify-center
            px-4 xl:px-0 max-w-screen-xl mx-auto"
        >
          {/* <p className="font-kaisei text-lg md:text-xl lg:text-2xl">
            Business profiles
          </p> */}
          <p
            className="font-semibold text-3xl md:text-4xl lg:text-5xl
                mt-3 md:mt-4 lg:mt-5 text-textBlack font-albra"
          >
            Connect with a Network of <br /> Business Professionals
          </p>
          <p
            className="text-sm md:text-base max-w-4xl text-start
                mt-3 md:mt-4 lg:mt-5 font-semibold text-desc"
          >
            Welcome to our Business Profiles section, where you can explore a
            diverse collection of professionals, entrepreneurs, and business
            leaders from various industries. Discover their stories, expertise,
            and achievements, and connect with like-minded individuals who share
            your passion for success.
          </p>
          {/* search div  */}
          <div
            className="border border-black px-4 py-2 lg:py-3
                flex items-center justify-between
                mt-10 md:mt-11 lg:mt-12 w-full"
          >
            <input
              type="text"
              placeholder="Search persons"
              className="focus:outline-none"
            />
            <a href="">
              <button className="font-regular text-lightGold bg-primary py-3 px-4 min-[380px]:px-8 md:px-12 text-base rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Search
              </button>
            </a>
          </div>

          {/* business persons div */}
          <div className="grid place-items-center justify-items-center w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10 md:mb-14 xl:mb-20 mt-14 md:mt-16 xl:mt-20">
            {/* business person card */}
            {data.map((person) => (
              <Link
                href={`/businesspersons/${person._id}`}
                key={person._id}
                className="w-full"
              >
                <div
                  className="py-4 md:py-5 lg:py-6  px-6 md:px-8 lg:px-10  rounded-[20px]
                    border border-black flex gap-4 items-center justify-center w-full"
                >
                  <img
                    src="/images/testimonialImg.png"
                    alt="person"
                    className=""
                  />
                  <div className="flex flex-col gap-1 items-start">
                    <p className="font-semibold text-lg md:text-xl">
                      {`${person.fname} ${person.lname}`}
                    </p>
                    <p className="font-light text-sm">CEO Amazon</p>
                    <p className="font-light text-sm">www.amazon.com</p>
                  </div>
                </div>
              </Link>
            ))}
            {/* <Link href="/businesspersons/details" className="w-full">
              <div
                className="py-4 md:py-5 lg:py-6  px-6 md:px-8 lg:px-10  rounded-[20px]
                    border border-black flex gap-4 items-center justify-center w-full"
              >
                <img
                  src="/images/testimonialImg.png"
                  alt="person"
                  className=""
                />
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-semibold text-lg md:text-xl">
                    Business man
                  </p>
                  <p className="font-light text-sm">CTO Amazon</p>
                  <p className="font-light text-sm">www.amazon.com</p>
                </div>
              </div>
            </Link> */}
            {/* business person card */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPersons;
