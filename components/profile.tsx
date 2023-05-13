"use client";

import { BsPencilSquare } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillCameraFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";


import "./enlist/form.css";

const Profile = () => {
  return (
    <div className="bg-[#F5F2F0]">
      <div className="lg:p-8 w-screen lg:w-page flex flex-col gap-8 max-w-7xl mx-auto font-inter ">
        {/* \\\\\\\\\\\\\\\\\ */}
        {/* PROGRESS👇 */}
        <div className=" lg:m-0 flex flex-col gap-1 p-5 rounded-md border-2 border-primary-v1 text-gray-800 bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10">
            <div className="flex flex-col gap-2 text-inter">
              <p className="text-4xl lg:text-7xl font-semibold">50%</p>
              <p className="font-semibold text-lg md:text-xl lg:max-w-[194px]">
                of your profile is complete
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:py-6 w-full xl:w-min">
              <div className="w-full xl:w-[800px] h-8 bg-skeleton rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gold flex items-center justify-center font-semibold text-white">
                  50%
                </div>
              </div>
              <p className="text-lg md:text-xl font-medium">
                Complete your profile to get more reach!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-12 font-regular">
                {/* ITEM 1 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-success">Name, Address & phone</p>
                  <div className="flex items-center gap-2">
                    <BsPencilSquare />
                    <p>Edit</p>
                  </div>
                </div>
                {/* ITEM 2 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-success">Business Categories</p>
                  <div className="flex items-center gap-2">
                    <BsPencilSquare />
                    <p>Edit</p>
                  </div>
                </div>
                {/* ITEM 3 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-success">Detailed Description</p>
                  <div className="flex items-center gap-2">
                    <BsPencilSquare />
                    <p>Edit</p>
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-error">Logo or Image</p>
                  <div className="flex items-center gap-2">
                    <HiPlus />
                    <p>Add</p>
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-error">Services</p>
                  <div className="flex items-center gap-2">
                    <HiPlus />
                    <p>Add</p>
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-error">Business Hours</p>
                  <div className="flex items-center gap-2">
                    <HiPlus />
                    <p>Add</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROGRESS👆 */}
        {/* MAIN DETAILS👇 */}
        <div className="flex flex-col lg:flex-row gap-4 bg-white text-gray-800 p-6">
          <div className="relative w-48 h-48  rounded overflow-hidden">
            {/* image */}
            <div className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer">
              <IoClose color="white" />
            </div>
            {/* close */}
            <div className="h-48 w-48 bg-cover bg-no-repeat bg-center bg-slate-200"></div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:pl-4">
            {/* name */}
            <div className="flex flex-row gap-4 pb-4">
              <div className="flex flex-col w-full">
                <div className="flex gap-4 items-center justify-between">
                  {/* normal */}
                  <span className="text-4xl font-extrabold text-gray-900 font-lora w-2/3">
                    Business name
                  </span>
                  <span className="flex-1"></span>
                  <button className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950">
                      Edit
                </button>
                  {/* edit mode */}
                  {/* <div className="flex items-center form-control">
                                        <input type="text" placeholder="edit mode" className="w-full md:w-108 lg:w-56 xl:w-108  mb-2 " />
                                    </div>
                                    <span className="flex-1"></span>
                                    <div className="flex items-start flex-wrap gap-2">
                                        <button className="bg-skeleton py-1 px-3  rounded ">Cancel</button>
                                        <button className="bg-orange text-white py-1 px-3 rounded ">Verify</button>
                                    </div> */}
                </div>
              </div>
            </div>
            {/* info */}
            <div className="flex flex-col gap-6 text-gray-800">
              <form className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <span className="text-2xl font-lora font-medium text-black">
                    Business Info
                  </span>
                  <span className="flex-1"></span>
                  {/* optional */}
                  <div>
                  <button className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950">
                      Edit
                </button>
                    {/* edit mode */}
                    {/* <div className="flex items-start flex-wrap gap-2">
                                            <button className="bg-skeleton py-1 px-3  rounded ">Cancel</button>
                                        <button className="bg-orange text-white py-1 px-3 rounded ">Verify</button>
                                            </div> */}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row items-start gap-2">
                    <CiLocationOn className="mt-1" />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-medium flex items-center gap-1">
                        Address{" "}
                        <span>
                          <FaEye className="h-3" />
                        </span>
                      </p>
                      <p className="text-lg text-gray-700">{`brooklyn, Brooklyn Manor, NY, 45676`}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <RiPhoneFill />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-medium flex items-center gap-1">
                        Phone{" "}
                        <span>
                          <FaEye className="h-3" />
                        </span>
                      </p>
                      <p className="text-lg text-gray-700">+971 123 4567</p>
                    </div>
                  </div>

                  {/* edit mode */}
                  {/* <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <CiLocationOn />
                      <p className="text-lg font-semibold">Address</p>
                      <FaEye />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1 form-control">
                        <label htmlFor="state">State</label>
                        <select
                          name="state"
                          id="state"
                          className="w-1/2 md:w-1/4"
                        >
                          <option value="Abudhabi">Abudhabi</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1 form-control">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input
                          type="text"
                          id="streetAddress"
                          placeholder="e.g. Sheikh Zayed St"
                        />
                      </div>
                       \\ <div className="flex flex-col gap-1"></div>  ADDRESS LINE 2 optional
                      <div className="grid md:grid-cols-3 md:gap-x-10 gap-y-3">
                        <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                          <label htmlFor="building">Apt/Suite (optional)</label>
                          <input type="text" id="building" placeholder="#200" />
                        </div>
                        <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            id="city"
                            placeholder="e.g. Al Ain"
                          />
                        </div>
                        <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]"
                            id="zip"
                            placeholder="126452"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <label htmlFor="hideAddress" className="cursor-pointer">
                          <input
                            type="checkbox"
                            className="cursor-pointer"
                            id="hideAddress"
                            name="hideAddress"
                            checked
                          />
                          <span className="ml-1 text-sm">
                            Don{`'`}t display my address publicly
                          </span>
                        </label>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <label
                          htmlFor="showServiceArea"
                          className="cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="cursor-pointer"
                            id="showServiceArea"
                            name="showServiceArea"
                            checked
                          />
                          <span className="ml-1 text-sm">
                            We deliver or provide sersvice at customer locations
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  \\\\\\
                  // service areas
                  <div className="flex flex-col w-full gap-2 px-4 items-start">
                    <div className="flex items-center">
                      <CiLocationOn />
                      <p className="text-lg font-medium mr-4">Service Areas</p>
                      <p className="text-sm">2/6 Areas listed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTrashAlt />
                      <div className="form-control">
                        <input type="text" />
                      </div>
                    </div>
                    <p className="font-semibold cursor-pointer text-orange-600 hover:underline">
                      + Add Service Area
                    </p>
                  </div>

                  \\\\\\\
                  // phone
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <RiPhoneFill />
                      <p className="text-lg font-semibold">Phone</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1 form-control">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]"
                          id="phone"
                          placeholder="1112223333"
                          className="md:w-1/2"
                        />
                      </div>
                      <div className="flex flex-grow gap-2 items-center">
                        <label
                          htmlFor="hidePhone"
                          className="cursor-pointer flex items-center "
                        >
                          <input type="checkbox" id="hidePhone" />
                          <span className="ml-1 text-sm">
                            Don{`'`}t display my phone publicly
                          </span>
                        </label>
                      </div>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>

            {/* \\\\\\\\ */}
            {/* website */}
            <div className="flex flex-col gap-4 text-gray-800">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <p className="text-2xl font-lora font-medium title">
                    Website
                  </p>
                  <button className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950">
                      Edit
                </button>

                  {/* edit mode */}
                  {/* <div className="flex items-start flex-wrap gap-2">
                    <button className="bg-skeleton py-1 px-3  rounded ">
                      Cancel
                    </button>
                    <button className="bg-orange text-white py-1 px-3 rounded ">
                      Verify
                    </button>
                  </div> */}
                  {/* edit mode */}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <VscGlobe />
                <a className="hover:underline" target="_blank" href="#">
                  userwebsite.com
                </a>
              </div>
              {/* edit mode */}
              {/* <div className="flex w-full ">
                <div className="px-2 py-2 bg-skeleton flex items-center justify-center rounded-l">
                  <VscGlobe />
                </div>
                <div className=" w-full rounded rounded-l-none border-l-0">
                  <input
                    type="text"
                    id="websiteUrl"
                    placeholder="www.yourwebsite.com"
                    className="border border-[#b7babf] py-2 px-3 w-full border-l-0 rounded-sm text-sm"
                  />
                </div>
              </div> */}
              {/* edit mode */}
            </div>
          </div>
        </div>
        {/* MAIN DETAILS👆 */}

        {/* \\\\\\\\\\\\\\ */}
        {/* ABOUT👇 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">About</p>
                <button className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950">
                      Edit
                </button>
                {/* edit mode */}
                {/* <div className="flex items-start flex-wrap gap-2">
                    <button className="bg-skeleton py-1 px-3  rounded ">
                      Cancel
                    </button>
                    <button className="bg-orange text-white py-1 px-3 rounded ">
                      Verify
                    </button>
                  </div> */}
                {/* edit mode */}
              </div>
              <p className="text-lg">Customers use this information to learn what makes your company great.</p>
          </div>
          <div className="border-2 border-black border-dashed p-4">
            <div className="flex flex-wrap gap-4">
              <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                <FaRegNewspaper className="h-5 w-6"/>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-700">Tell your customers more about your business! What makes your business unique? Introduce your company name and explain what your business does, where youoperate (or the markets you serve), and tell us how long you’ve been doing it for.</p>
                  <div className="flex items-center font-bold gap-1">
                    <span className="cursor-pointer hover:underline">Add business description</span>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* edit mode */}
          {/* <div className="w-full">
            <div className="flex flex-col gap-4 lg:w-3/4">
              <p className="font-semibold">Short Description:</p>
              <div className="flex flex-col">
                <div className="flex">
                  <textarea name="shortDescription" id="shortDescription" rows={3} maxLength={150} className="border border-[#b7babf] w-full py-2 px-3 text-sm" placeholder="This should be a simple statement about your business that summarizes the services you provide, the products you offer, and/or the areas that you serve."></textarea>
                </div>
                <div className="self-end">
                  <span>0/150</span>
                </div>
              </div>
              <p className="font-semibold">Detailed Description:</p>
              <div className="flex flex-col">
                <div className="flex">
                  <textarea name="detailedDescription" id="detailedDescription" rows={10} maxLength={2500} className="border border-[#b7babf] w-full py-2 px-3 text-sm" placeholder="What do you do exceptionally well? Let your customers know what your business is all about. This can include how long you've been in business, the story of how it all started, or anything else you want your customers to know."></textarea>
                </div>
                <div className="self-end">
                  <span>0/2500</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* edit mode */}
          {/* edited */}
          {/* <div className="flex flex-col gap-4 leading-relaxed">
            <div className="lg:w-3/4">
              <p className="font-semibold">Short Description:</p>
              <p>The actual short description text</p>
            </div>
            <div className="lg:w-3/4">
            <p className="font-semibold">Detailed Description:</p>
              <p>The actual detailed description text</p>
            </div>
          </div> */}
          {/* edited */}
          
        </div>
        {/* ABOUT👆 */}

        {/* \\\\\\\\\\\ */}
        {/* SOCAIL MEDIA LINKS👇 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">Social Media Links</p>
                <button className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950">
                      Edit
                </button>
                {/* edit mode */}
                {/* <div className="flex items-start flex-wrap gap-2">
                    <button className="bg-skeleton py-1 px-3  rounded ">
                      Cancel
                    </button>
                    <button className="bg-orange text-white py-1 px-3 rounded ">
                      Verify
                    </button>
                  </div> */}
                {/* edit mode */}
              </div>
              <p className="text-lg">Add links to your social media pages on various major platforms.</p>
          </div>
          <div className="border-2 border-black border-dashed p-4">
            <div className="flex flex-wrap lg:flex-col gap-4">
              <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                <FaShareAlt className="h-5 w-6"/>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-700">Stay connected with your customers. Add links to your business social networks.</p>
                  <div className="flex items-center font-bold gap-1">
                    <span className="cursor-pointer hover:underline">Add social links</span>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* edit mode */}
          {/* <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="facebook">Facebook URL</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton">
                  <BsFacebook />
                  <p className="text-sm">https://</p>
                </div>
                <input type="text" id="facebook" className="form-input w-full" placeholder="e.g. www.facebook.com/companyProfile"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="instagram">Instagram</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                  <BsInstagram />
                  <p className="text-sm">@</p>
                </div>
                <input type="text" id="instagram" className="form-input w-full" placeholder="e.g. @instagramProfile"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="twitter">Twitter</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                  <BsTwitter />
                  <p className="text-sm">@</p>
                </div>
                <input type="text" id="twitter" className="form-input w-full" placeholder="e.g. @twitterProfile"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="linkedin">LinkedIn URL</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                  <BsLinkedin />
                  <p className="text-sm">https://</p>
                </div>
                <input type="text" id="linkedin" className="form-input w-full" placeholder="e.g. www.linkedin.com/companyProfile"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="youtube">Youtube Channel</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                  <BsYoutube />
                  <p className="text-sm">https://</p>
                </div>
                <input type="text" id="youtube" className="form-input w-full" placeholder="e.g. www.youtube.com/profile"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="pinterest">Pinterest URL</label>
              <div className="flex w-full flex-row">
                <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                  <BsPinterest />
                  <p className="text-sm">https://</p>
                </div>
                <input type="text" id="pinterest" className="form-input w-full" placeholder="e.g. www.pinterest.com/profile"/>
              </div>
            </div>
          </div> */}
          {/* edit mode */}
          {/* edited */}
          {/* <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="w-8">
                <BsFacebook className="w-full h-full"/>
              </div>
              <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
                <span>http://facebook.com</span>
                <HiOutlineExternalLink className="w-5 h-5"/>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-8">
                <BsInstagram className="w-full h-full"/>
              </div>
              <div className="flex flex-row items-center gap-2 hover:underline cursor-pointer">
                <span>@mkbhd</span>
                <HiOutlineExternalLink className="w-5 h-5"/>
              </div>
            </div>
          </div> */}
          {/* edited */}
          </div>
        {/* SOCAIL MEDIA LINKS👆 */}

        {/* \\\\\\\\\\\\\\\\ */}
        {/* PHOTOS */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
                <p className="text-2xl font-medium font-lora text-black title">Photos</p>
              <p className="text-lg">Upload images of your business so your customers can see what products you sell or what services you provide. Photos must be png, jpeg, or gif format.</p>
              <hr className="w-full text-gray-300"/>
              <div className="text-xs pb-4">{`0`}{`/30 photos added`}</div>
          </div>
          <div className="border-2 border-black border-dashed p-4">
          <div className="flex flex-wrap lg:flex-col gap-4">
              <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                <BsFillCameraFill className="h-5 w-6"/>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-700">Photos are one of the biggest factors consumers use to evaluate a business. Make sure your photos show your business at its best.</p>
                  <div className="flex items-center font-bold gap-1">
                    <span className="cursor-pointer hover:underline">Add photos</span>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* edit mode */}
          {/* <div className="flex flex-row flex-wrap gap-4"> */}
            {/* added photo👇 */}
            {/* <div>
              <div className="relative">
                <div className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer">
                  <IoClose color="white" />
                </div>
                <div className="h-48 w-48 border border-gray-600 flex justify-center items-center rounded overflow-hidden">
                  <div className="h-48 w-48 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://unsplash.com/photos/Nnh4gV8TwlY')"}}></div>
                </div>
              </div>
            </div> */}
            {/* added photo👆 */}
            {/* <div>
              <input type="file" className="hidden" />
              <div className="w-48 h-48 border-2 rounded border-dashed p-4 flex flex-col gap-2 items-center justify-center cursor-pointer border-black">
                <p className="font-semibold">Add a photo</p>
                <BsFillCameraFill className="w-11 h-11" />
              </div>
            </div>
          </div> */}
          {/* edit mode */}
          </div>
          {/* PHOTOS👆 */}

          {/* \\\\\\\\\\\ */}
          {/* CONTACT */}
          <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium font-lora text-black title">Contacts</p>
                {/* edit mode */}
                {/* <div className="flex items-start flex-wrap gap-2">
                    <button className="bg-skeleton py-1 px-3  rounded ">
                      Cancel
                    </button>
                    <button className="bg-orange text-white py-1 px-3 rounded ">
                      Verify
                    </button>
                  </div> */}
                {/* edit mode */}
              </div>
              <p className="text-lg">Who are the primary contacts in your business?</p>
          </div>
          <div className="md:grid gap-2 grid-cols-2">
            <div className="border-2 border-black border-dashed p-4">
              <div className="flex flex-wrap lg:flex-col gap-4">
                <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                  <IoMdContact className="h-5 w-6"/>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700">Inform customers on special contacts in your company.</p>
                    <div className="flex items-center font-bold gap-1">
                      <span className="cursor-pointer hover:underline">Create an additional contact</span>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <button className="py-2 rounded w-48 bg-black text-white">Add contact</button>
          {/* edit mode */}
          {/* <div className="w-full">
            <div className="flex flex-col gap-4 lg:w-3/4">
              <p className="font-semibold">Short Description:</p>
              <div className="flex flex-col">
                <div className="flex">
                  <textarea name="shortDescription" id="shortDescription" rows={3} maxLength={150} className="border border-[#b7babf] w-full py-2 px-3 text-sm" placeholder="This should be a simple statement about your business that summarizes the services you provide, the products you offer, and/or the areas that you serve."></textarea>
                </div>
                <div className="self-end">
                  <span>0/150</span>
                </div>
              </div>
              <p className="font-semibold">Detailed Description:</p>
              <div className="flex flex-col">
                <div className="flex">
                  <textarea name="detailedDescription" id="detailedDescription" rows={10} maxLength={2500} className="border border-[#b7babf] w-full py-2 px-3 text-sm" placeholder="What do you do exceptionally well? Let your customers know what your business is all about. This can include how long you've been in business, the story of how it all started, or anything else you want your customers to know."></textarea>
                </div>
                <div className="self-end">
                  <span>0/2500</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* edit mode */}
          {/* edited */}
          {/* <div className="flex flex-col gap-4 leading-relaxed">
            <div className="lg:w-3/4">
              <p className="font-semibold">Short Description:</p>
              <p>The actual short description text</p>
            </div>
            <div className="lg:w-3/4">
            <p className="font-semibold">Detailed Description:</p>
              <p>The actual detailed description text</p>
            </div>
          </div> */}
          {/* edited */}
          
        </div>
          {/* CONTACT👆 */}
          {/* \\\\\\\\\\\ */}

      </div>
    </div>
  );
};

export default Profile;
