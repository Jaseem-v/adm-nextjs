import "./enlist.css";

import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiDirectionFill } from "react-icons/ri";

export const EnlistSkeleton = () => {
  return (
    <div className="w-full">
      {/* \\\\\\\\\\\\\\\\\\ */}

      {/* NAVBAR */}
      <div className="bg-skeleton flex justify-between items-center p-3 flex-wrap">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0">
            <img src="/public/images/logo.png" alt="logo" />
          </div>
          <div className="rounded-lg rounded-r-none bg-white flex items-center p-2">
            <div className="h-4 mr-4 w-40 max-w-40 bg-skeleton"></div>
            <div className="flex items-center">
              <CiLocationOn />
              <p>
                Business City <span>, default</span>
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
            className="font-serif text-black font-bold text-3xl mt-6"
          >
            Business Name
          </p>

          <div className="flex items-center mt-2 mb-8 flex-wrap">
            <div className="flex items-center mr-2">
              <div className="w-5 h-4 bg-skeleton" />
            </div>
            {/* location */}
            <div className="flex items-center mr-2 font-medium">
              <CiLocationOn />
              <p className="flex-shrink-0">
                <span>Street Address</span>, <span>City</span> ,{" "}
                <span>default</span>, <span>012345</span>
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center mr-2 gap-1">
              <FaPhoneAlt />
              <div className="w-20 h-4 bg-skeleton"></div>
            </div>
            {/* website */}
            <div className="flex items-center mr-2 gap-1">
              <VscGlobe />
              <div className="w-20 h-4 bg-skeleton"></div>
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
                <FaPhoneAlt color="#a6a8ab" />
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
          </div>
        </div>
        {/* SIMILAR BUSINESSES */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
        {/* DETAILED INFORMATION */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="w-full">
      {/* \\\\\\\\\\\\\\\\\\ */}

      {/* NAVBAR */}
      <div className="bg-skeleton flex justify-between items-center p-3 flex-wrap">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0">
            <img src="/public/images/logo.png" alt="logo" />
          </div>
          <div className="rounded-lg rounded-r-none bg-white flex items-center p-2">
            <div className="h-4 mr-4 w-40 max-w-40 bg-skeleton"></div>
            <div className="flex items-center">
              <CiLocationOn />
              <p>
                Business City <span>, default</span>
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
            <div className="w-4 h-3 bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-6 h-3 bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-10 h-3 bg-skeleton"></div>
          </div>
          <p
            id="business-name"
            className="font-serif text-black font-bold text-3xl mt-6"
          >
            Business Name
          </p>

          <div className="flex items-center mt-2 mb-8 flex-wrap">
            <div className="flex items-center mr-2">
              <div className="w-5 h-4 bg-skeleton" />
            </div>
            {/* location */}
            <div className="flex items-center mr-2 font-medium">
              <CiLocationOn />
              <p className="flex-shrink-0">
                <span>Street Address</span>, <span>City</span> ,{" "}
                <span>default</span>, <span>012345</span>
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center mr-2">
              <FaPhoneAlt />
              <div className="w-5 h-1 bg-skeleton"></div>
            </div>
            {/* website */}
            <div className="flex items-center mr-2">
              <VscGlobe />
              <div className="w-5 h-1 bg-skeleton"></div>
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
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        {/* PHOTOS */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        {/* CONTACT */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        {/* SIMILAR BUSINESSES */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
        {/* DETAILED INFORMATION */}
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
      </div>
    </div>
  );
};

// export const EnlistSkeleton = () => {
//     <div className="w-full">
//       {/* NAVBAR */}
//       <div className="flex justify-between">
//         <div className="flex items-center gap-2">
//           <img src="/public/images/logo.png" alt="logo" />
//           <div className="flex gap-1">
//             <div className="w-40 h-4 bg-skeleton" />
//             <p>Business City, default</p>
//           </div>
//           <div className="flex justify-center items-center bg-darkSkeleton">
//             <BiSearch />
//           </div>
//         </div>
//         <button className="bg-darkSkeleton py-2 px-6 rounded-sm">Sign up</button>
//       </div>

//       {/* DETAILS */}
//       <div className="py-4 bg-white"></div>
//     </div>;
//   };
