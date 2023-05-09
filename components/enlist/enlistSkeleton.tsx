import "./enlist.css";

import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { RiPhoneFill } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiDirectionFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

interface Props {
  companyName: string;
  streetAddress: string;
  city: string;
  zip: string;

  phoneNumber: string;
  websiteUrl: string;

  isCompany: boolean;
}

export const EnlistSkeleton = ({
  companyName,
  streetAddress,
  city,
  zip,
  phoneNumber,
  websiteUrl,
  isCompany,
}: Props) => {
  return (
    <div className="w-full">
      {/* \\\\\\\\\\\\\\\\\\ */}

      {/* NAVBAR */}
      <div className="bg-skeleton flex justify-between items-center p-3 flex-wrap font-inter">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0">
            <div className="preview-logo w-[42px] h-7 rounded-sm"></div>
          </div>
          <div className="rounded-lg rounded-r-none bg-white flex items-center p-2">
            <div className="h-4 mr-4 w-40 max-w-40 bg-skeleton"></div>
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p className="font-regular">
                Business City <span>, Abu dhabi</span>
              </p>
            </div>
          </div>
          <div className="text-white fa fa-search bg-darkSkeleton px-3 py-3 overflow-hidden rounded-r-lg">
            <BiSearch />
          </div>
        </div>
      </div>

      {/* \\\\\\\\\\\\\\\\\\ */}
      {/* DETAILS */}
      <div className="bg-white py-4">
        <div className="px-8">
          <div className="flex items-baseline text-darkSkeleton">
            <div className="w-16 h-3 bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-24 h-3 bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-40 h-3 bg-skeleton"></div>
          </div>
          <p
            id="business-name"
            className=" text-zinc-800 font-bold font-kaisei text-3xl mt-6"
          >
            {companyName && companyName.length > 0
              ? companyName
              : "Business name"}
          </p>

          <div className="flex items-center mt-2 mb-8 flex-wrap">
            <div className="flex items-center mr-2">
              <div className="w-5 h-4 bg-skeleton" />
            </div>
            {/* location */}
            <div className="flex items-center mr-2 ">
              <CiLocationOn />
              <p className="flex-shrink-0">
                <span>
                  {streetAddress && streetAddress.length > 0
                    ? streetAddress
                    : "Street Address"}
                </span>
                , <span>{city && city.length > 0 ? city : "city"}</span> ,{" "}
                <span>Abu dhabi</span>,{" "}
                <span>{zip && zip.length > 0 ? zip : "500001"}</span>
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center mr-2 gap-1">
              <RiPhoneFill />
              {phoneNumber && phoneNumber.length > 0 ? (
                phoneNumber
              ) : (
                <div className="w-20 h-4 bg-skeleton"></div>
              )}
            </div>
            {/* website */}
            <div className="flex items-center mr-2 gap-1">
              <VscGlobe />
              {websiteUrl && websiteUrl.length > 0 ? (
                websiteUrl
              ) : (
                <div className="w-20 h-4 bg-skeleton"></div>
              )}
            </div>
          </div>

          <div className="flex items-center text-darkSkeleton font-bold">
            <p className="py-3 border-b-4 border-darkSkeleton">About</p>
            <p className="pr-4 pl-6">Contact</p>
            <p className="px-4">Details</p>
            <p className="px-4">Reviews</p>
          </div>
        </div>
      </div>

      {/* \\\\\\\\\\\\\\\ */}
      {/* OTHER DETAILS */}
      <div className="bg-skeleton px-8 py-6">
        {/* ABOUT */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6">
          <p className="font-bold text-darkSkeleton font-serif mb-3">About</p>
          <div className="w-full h-4 bg-skeleton mb-2" />
          <div className="w-11/12 h-4 bg-skeleton mb-4" />
          <div className="w-full h-4 bg-skeleton mb-2" />
          <div className="w-5/12 h-4 bg-skeleton mb-4" />
          <div className="w-1/4 h-4 bg-skeleton" />
        </div>
        {/* SERVICES */}
        {isCompany && (
          <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6">
            <p className="font-bold text-darkSkeleton font-serif mb-3">
              Services
            </p>
            <div className="flex justify-between">
              <div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-40 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-24 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-32 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-28 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-24 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-36 h-4 bg-skeleton"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-40 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-24 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-32 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-28 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-24 h-4 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <FaCheckCircle color="#a6a8ab" />
                  <div className="w-36 h-4 bg-skeleton"></div>
                </div>
              </div>
            </div>
            <div className="w-2/5 h-4 bg-skeleton mt-4" />
          </div>
        )}
        {/* PHOTOS */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6">
          <p className="font-bold text-darkSkeleton font-serif mb-3">Photos</p>
          <div className="flex">
            <div className="border border-gray-300 w-32 h-32 rounded mr-2"></div>
            <div className="border border-gray-300 w-32 h-32 rounded"></div>
          </div>
        </div>
        {/* CONTACT */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6">
          <p className="font-bold text-darkSkeleton font-serif mb-3">Contact</p>
          <div className="flex justify-between">
            <div className="flex gap-1 items-baseline">
              <CiLocationOn />
              <div className="flex flex-col">
                <p>Business Name</p>
                <p>Street Address</p>
                <p>
                  <span>City</span> , <span>default</span> , <span>012345</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <RiPhoneFill color="#a6a8ab" />
                <div className="mr-1 w-32 h-4 bg-skeleton" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <VscGlobe color="#a6a8ab" />
                <div className="mr-1 w-44 h-4 bg-skeleton" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <CgFacebook color="#a6a8ab" />
                <div className="mr-1 w-36 h-4 bg-skeleton" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <BsTwitter color="#a6a8ab" />
                <div className="mr-1 w-24 h-4 bg-skeleton" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <ImLinkedin2 color="#a6a8ab" />
                <div className="mr-1 w-36 h-4 bg-skeleton" />
              </div>
            </div>
          </div>
          {/* ====== */}
          <div className="rounded flex mt-4">
            <div className="preview-map w-3/5 flex flex-col p-2">
              <div className="flex-grow flex justify-center items-center">
                <CiLocationOn color="#a6a8ab" size={"48px"} />
              </div>
              <span className="flex items-center justify-center gap-4 rounded-lg py-2 bg-darkSkeleton text-white w-full">
                <RiDirectionFill color="white" />
                Directions
              </span>
            </div>
            <div className="w-2/5 flex flex-col py-6 px-4 rounded border-t border-r border-b border-gray-300 ">
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans">Mon</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Tue</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Wed</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Thu</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Fri</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Sat</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
              <div className="flex items-center">
                <p className="mr-3 w-16 text-darkSkeleton font-sans ">Sun</p>
                <div className="w-full h-4 bg-skeleton" />
              </div>
            </div>
          </div>
        </div>
        {/* SIMILAR BUSINESSES */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6">
          <p className="font-bold text-darkSkeleton font-serif mb-3">
            Similar Businesses
          </p>
          <div className="flex">
            {/* one card */}
            <div className="w-1/2 mr-2 mb-2 bg-skeleton border border-darkSkeleton p-2 rounded">
              <div className="flex items-center">
                <div className="h-4 mr-2 w-full bg-mediumSkeleton" />
                <MdVerified color="#a6a8ab" />
              </div>
              <div className="h-3 mr-2 mb-2 w-3/5 my-2 bg-mediumSkeleton"></div>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <RiPhoneFill color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-mediumSkeleton"></div>
                </div>
                <div className="flex items-center gap-1">
                  <VscGlobe color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-mediumSkeleton"></div>
                </div>
              </div>
            </div>
            {/* one card */}
            <div className="w-1/2 mr-2 mb-2 bg-white border border-darkSkeleton p-2 rounded">
              <div className="flex items-center">
                <div className="h-4 mr-2 w-full bg-skeleton" />
                <MdVerified color="#a6a8ab" />
              </div>
              <div className="h-3 mr-2 mb-2 w-3/5 my-2 bg-skeleton"></div>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <RiPhoneFill color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1">
                  <VscGlobe color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
              </div>
            </div>
            {/* one card */}
          </div>
          <div className="flex">
            <div className="w-1/2 mr-2 mb-2 bg-white border border-darkSkeleton p-2 rounded">
              <div className="flex items-center">
                <div className="h-4 mr-2 w-full bg-skeleton" />
                <MdVerified color="#a6a8ab" />
              </div>
              <div className="h-3 mr-2 mb-2 w-3/5 my-2 bg-skeleton"></div>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <RiPhoneFill color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1">
                  <VscGlobe color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
              </div>
            </div>
            {/* one card */}
            <div className="w-1/2 mr-2 mb-2 bg-white border border-darkSkeleton p-2 rounded">
              <div className="flex items-center">
                <div className="h-4 mr-2 w-full bg-skeleton" />
                <MdVerified color="#a6a8ab" />
              </div>
              <div className="h-3 mr-2 mb-2 w-3/5 my-2 bg-skeleton"></div>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <RiPhoneFill color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
                <div className="flex items-center gap-1">
                  <VscGlobe color="#a6a8ab" />
                  <div className="h-3 mr-2 mb-2 w-16 my-2 bg-skeleton"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DETAILED INFORMATION */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6">
          <p className="font-bold text-darkSkeleton font-serif mb-3">
            Detailed Information
          </p>
          <div className="flex items-center p-2 border-b border-gray-300">
            <p className="w-1/2">Loaction Type</p>
            <div className="w-32 h-4 bg-skeleton" />
          </div>
          <div className="flex items-center p-2 border-b border-gray-300">
            <p className="w-1/2">Year Established</p>
            <div className="w-32 h-4 bg-skeleton" />
          </div>
          <div className="flex items-center p-2 border-b border-gray-300">
            <p className="w-1/2">Annual Revenue Estimate</p>
            <div className="w-20 h-4 bg-skeleton" />
          </div>
          <div className="flex items-center p-2">
            <p className="w-1/2">Employees</p>
            <div className="w-16 h-4 bg-skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};
