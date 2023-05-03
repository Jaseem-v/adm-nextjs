import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

export const EnlistSkeleton = () => {
  <div className="w-full">
    {/* NAVBAR */}
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <img src="/public/images/logo.png" alt="logo" />
        <div className="flex gap-1">
          <div className="w-40 h-4 bg-skeleton" />
          <p>Business City, default</p>
        </div>
        <div className="flex justify-center items-center bg-darkSkeleton">
          <BiSearch />
        </div>
      </div>
      <button className="bg-darkSkeleton py-2 px-6 rounded-sm">Sign up</button>
    </div>

    {/* DETAILS */}
    <div className="py-4 bg-white"></div>
  </div>;
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
            <div className="w-4 h-[3px] bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-6 h-[3px] bg-skeleton"></div>
            <p>{">"}</p>
            <div className="w-10 h-[3px] bg-skeleton"></div>
          </div>
          <p
            id="business-name"
            className="font-serif text-black font-bold text-3xl mt-6"
          >
            Business Name
          </p>

          <div className="flex items-center mt-2 mb-8 flex-wrap">
            <div className="flex items-center mr-2">
              <div className="w-5 h-1 bg-skeleton" />
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
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6 my-6"></div>
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
        <div className="bg-white max-w-3/4 lg:max-w-9/10 rounded py-4 px-6"></div>
      </div>
    </div>
  );
};
