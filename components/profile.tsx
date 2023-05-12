"use client";

import { BsPencilSquare } from "react-icons/bs"
import { HiPlus } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";


import "./enlist/form.css"

const Profile = () => {
    return ( 
        <div className="bg-[#F5F2F0]" >
            <div className="lg:p-8 w-screen lg:w-page flex flex-col gap-8 max-w-7xl mx-auto font-inter ">
                {/* \\\\\\\\\\\\\\\\\ */}
                    {/* PROGRESS👇 */}
                <div className="m-4 lg:m-0 flex flex-col gap-1 p-5 rounded-md border-2 border-primary-v1 text-gray-800 bg-white">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10">
                        <div className="flex flex-col gap-2 text-inter">
                            <p className="text-4xl lg:text-7xl font-semibold">30%</p>
                            <p className="font-semibold text-lg md:text-xl lg:max-w-[194px]">of your profile is complete</p>
                        </div>
                        <div className="flex flex-col gap-4 lg:py-6 w-full xl:w-min">
                            <div className="w-full xl:w-[800px] h-8 bg-skeleton rounded-full overflow-hidden">
                                <div className="h-full w-1/4 bg-gold flex items-center justify-center font-semibold text-white">30%</div>
                            </div>
                            <p className="text-lg md:text-xl font-medium">Complete your profile to get more reach!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-12 font-regular">
                                {/* ITEM 1 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-success">Name, Address & phone</p>
                                    <div className="flex items-center gap-2">
                                        <BsPencilSquare />
                                        <p >Edit</p>
                                    </div>
                                </div>
                                {/* ITEM 2 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-success">Business Categories</p>
                                    <div className="flex items-center gap-2">
                                        <BsPencilSquare />
                                        <p >Edit</p>
                                    </div>
                                </div>
                                {/* ITEM 3 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-success">Detailed Description</p>
                                    <div className="flex items-center gap-2">
                                        <BsPencilSquare />
                                        <p >Edit</p>
                                    </div>
                                </div>
                                {/* ITEM 4 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-error">Logo or Image</p>
                                    <div className="flex items-center gap-2">
                                        <HiPlus />
                                        <p >Add</p>
                                    </div>
                                </div>
                                {/* ITEM 4 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-error">Services</p>
                                    <div className="flex items-center gap-2">
                                        <HiPlus />
                                        <p >Add</p>
                                    </div>
                                </div>
                                {/* ITEM 4 */}
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-error">Business Hours</p>
                                    <div className="flex items-center gap-2">
                                        <HiPlus />
                                        <p >Add</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* PROGRESS👆 */}
                    {/* MAIN DETAILS👇 */}
                    <div className="flex flex-col lg:flex-row gap-4 bg-white text-gray-800 p-6 m-4">
                        <div className="relative w-48 h-48  rounded overflow-hidden">{/* image */}
                            <div className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer"><IoClose color="white"/></div>{/* close */}
                            <div className="h-48 w-48 bg-cover bg-no-repeat bg-center bg-slate-200"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-full lg:pl-4">
                        {/* name */}
                            <div className="flex flex-row gap-4 pb-4">
                                <div className="flex flex-col w-full">
                                <div className="flex gap-4 items-center justify-between">
                                    {/* normal */}
                                    <span className="text-4xl font-extrabold text-gray-900 font-lora w-2/3">Business name</span>
                                    <span className="flex-1"></span>
                                    <button className="btn py-1 px-2 border border-gray-950 text-darks-v1 hover:text-white hover:bg-darks-v1">Edit</button>
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
                                        <span className="text-2xl font-lora text-black">Business Info</span>
                                        <span className="flex-1"></span>{/* optional */}
                                        <div>
                                            <button className="btn py-1 px-2 border border-gray-950 text-darks-v1 hover:text-white hover:bg-darks-v1">Edit</button>
                                            {/* edit mode */}
                                            {/* <div className="flex items-start flex-wrap gap-2">
                                            <button className="bg-skeleton py-1 px-3  rounded ">Cancel</button>
                                        <button className="bg-orange text-white py-1 px-3 rounded ">Verify</button>
                                            </div> */}
                                        </div>

                                    </div>
                                        <div className="flex flex-col gap-6">
                                            {/* <div className="flex flex-row items-start gap-2">
                                                <CiLocationOn className="mt-1"  />
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-lg font-medium flex items-center gap-1">Address <span><FaEye className="h-3"/></span></p>
                                                    <p className="text-lg text-gray-700">{`brooklyn, Brooklyn Manor, NY, 45676`}</p>
                                                    
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <RiPhoneFill />
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-lg font-medium flex items-center gap-1">Phone <span><FaEye className="h-3"/></span></p>
                                                    <p className="text-lg text-gray-700">+971 123 4567</p>
                                                </div>
                                            </div> */}

                                            {/* edit mode */}
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-row items-center gap-2">
                                                    <CiLocationOn />
                                                    <p className="text-lg font-medium">Address</p>
                                                    <FaEye />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex flex-col gap-1 form-control">
                                                        <label htmlFor="state">State</label>
                                                        <select name="state" id="state" className="w-1/2 md:w-1/4">
                                                            <option value="Abudhabi">Abudhabi</option></select>
                                                    </div>
                                                    <div className="flex flex-col gap-1 form-control">
                                                    <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              placeholder="e.g. Sheikh Zayed St"
            />
                                                    </div>
                                                    {/* <div className="flex flex-col gap-1"></div>  ADDRESS LINE 2*/}
                                                    <div className="grid md:grid-cols-3 md:gap-x-10 gap-y-3">
                                                        <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                                                        <label htmlFor="building">Apt/Suite (optional)</label>
            <input
              type="text"
              id="building"
              placeholder="#200"
            />
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
                                                            <input type="checkbox" className="cursor-pointer"  id="hideAddress" name="hideAddress" checked/>
                                                            <span className="ml-1 text-sm">Don{`'`}t display my address publicly</span>
                                                        </label>
                                                    </div>
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <label htmlFor="showServiceArea" className="cursor-pointer">
                                                            <input type="checkbox" className="cursor-pointer"  id="showServiceArea" name="showServiceArea" checked/>
                                                            <span className="ml-1 text-sm">We deliver or provide sersvice at customer locations</span>
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            {/* service areas */}
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
                                                <p className="font-bold cursor-pointer text-orange">+ Add Service Area</p>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* MAIN DETAILS👆 */}
            </div>
        </div>
     );
}
 
export default Profile;