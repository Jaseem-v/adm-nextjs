"use client";

import "./enlist/form.css";

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
import { MdMiscellaneousServices } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

import React, { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useState, useRef } from "react";

type EditModeState = {
  [key: string]: boolean;
};

const Profile = () => {
  const initialEditModeState: EditModeState = {
    businessName: false,
    businessInfo: false,
    website: false,
    about: false,
    businessCategories: false,
    products: false,
    socialMedia: false,
    contact: false,
    photos: false,
    detailedInformation: false,
  };
  const [editModeState, setEditModeState] =
    useState<EditModeState>(initialEditModeState);
  const [isServiceArea, setIsServiceArea] = useState(false);
  const [isPrimaryCategoryChange, setIsPrimaryCategoryChange] = useState(false);
  const [isSecondaryCategoryChange, setIsSecondaryCategoryChange] =
    useState(false);
  const [isAddedPhoto, setIsAddedPhoto] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handleToggleEditMode = (section: string) => {
    setEditModeState((prevState) => {
      const newState: EditModeState = {};

      for (const key in prevState) {
        newState[key] = key === section ? !prevState[key] : false;
      }

      return newState;
    });
  };

  // SECTION REFS
  const businessInfoRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const handleProgessBarClick = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    const navbarHeight = 120;
    const rect = ref.current?.getBoundingClientRect();
    const topOffset = rect?.top || 0;
    window.scrollTo({
      top: window.pageYOffset + topOffset - navbarHeight,
      behavior: "smooth",
    });
    handleToggleEditMode(section);
  };

  // DROPZONE
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      acceptedFiles.forEach((file: FileWithPath) => {
        const reader: FileReader = new FileReader();

        reader.onabort = () => console.log("File reading was aborted");
        reader.onerror = () => console.log("File reading has failed");
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr: ArrayBuffer | null = reader.result as ArrayBuffer;
          console.log(binaryStr);
          const newPhotos = [...uploadedPhotos, URL.createObjectURL(file)];
          setUploadedPhotos(newPhotos);
          setIsAddedPhoto(true);
        };

        reader.readAsArrayBuffer(file);
      });
      console.log(acceptedFiles);
    },
    [uploadedPhotos]
  );

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({ onDrop });

  const removePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index);
    setUploadedPhotos(newPhotos);
    if (newPhotos.length === 0) {
      setIsAddedPhoto(false);
    }
  };

  // INITIAL STATE
  type EditInfoStateType = {
    businessName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    hideAddress: boolean;
    serviceAtCustomerLocation: boolean;
    phone: string;
    hidePhone: boolean;
    website: string;
    shortDescription: string;
    detailedDescription: string;
    primaryCategory: string;
    secondaryCategory: string[];
    products: string[];
    photos: any[]; // Assuming photos can be of any type, adjust accordingly
    socialMedia: {
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
      youtube: string;
      pinterest: string;
    };
    contacts: string;
  };

  const [editInfoState, setEditInfoState] = useState({
    businessName: "",
    streetAddress: "",
    city: "",
    state: "Abudhabi",
    zip: "",
    hideAddress: false,
    serviceAtCustomerLocation: false,
    phone: "",
    hidePhone: true,
    website: "",
    shortDescription: "",
    detailedDescription: "",
    primaryCategory: "",
    secondaryCategory: [],
    products: [],
    photos: [],
    socialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      youtube: "",
      pinterest: "",
    },
    contacts: "",
  });

  const handleEditInfoStateChange = (
    section: keyof EditInfoStateType,
    value: EditInfoStateType[keyof EditInfoStateType]
  ) => {
    setEditInfoState((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();

    if (input === "" || /^\d+$/.test(input)) {
      setEditInfoState((prevState) => ({
        ...prevState,
        phone: input,
      }));
    }
  };

  // SECTION FUNCTIONS
  const verifyBusinessName = () => {
    // POST API
    handleToggleEditMode("businessName");
    console.log("verified business name");
  };

  const verifyBusinessInfo = () => {
    // POST API
    handleToggleEditMode("businessInfo");
    console.log("verified business info");
  };

  const verifyAbout = () => {
    // POST API
    handleToggleEditMode("about");
    console.log("verified about");
  };

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
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      handleProgessBarClick(businessInfoRef, "businessInfo")
                    }
                  >
                    <BsPencilSquare />
                    <p>Edit</p>
                  </div>
                </div>
                {/* ITEM 2 */}
                <div className="flex justify-between items-center gap-2">
                  <p className="text-success">Business Categories</p>
                  <div
                    className="flex items-center gap-2"
                    onClick={() =>
                      handleProgessBarClick(categoriesRef, "businessCategories")
                    }
                  >
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
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* MAIN DETAILS👇 */}
        <div
          className="flex flex-col lg:flex-row gap-4 bg-white text-gray-800 p-6"
          ref={businessInfoRef}
        >
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
                {!editModeState.businessName ? (
                  <div className="flex gap-4 items-center justify-between">
                    {/* normal */}
                    <span className="text-4xl font-extrabold text-gray-900 font-lora w-2/3">
                      {editInfoState.businessName.length > 0
                        ? editInfoState.businessName
                        : "Business name"}
                    </span>
                    <span className="flex-1"></span>
                    <button
                      className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                      onClick={() => handleToggleEditMode("businessName")}
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex items-center form-control">
                      <input
                        type="text"
                        placeholder="edit mode"
                        className="w-full md:w-108 lg:w-56 xl:w-108  mb-2 "
                        value={editInfoState.businessName}
                        onChange={(e) =>
                          handleEditInfoStateChange(
                            "businessName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <span className="flex-1"></span>
                    <div className="flex items-start flex-wrap gap-2">
                      <button
                        className="bg-skeleton py-1 px-3  rounded "
                        onClick={() => handleToggleEditMode("businessName")}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-orange text-white py-1 px-3 rounded "
                        onClick={verifyBusinessName}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                )}
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
                    {!editModeState.businessInfo ? (
                      <button
                        className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                        onClick={() => handleToggleEditMode("businessInfo")}
                      >
                        Edit
                      </button>
                    ) : (
                      <div className="flex items-start flex-wrap gap-2">
                        <button
                          className="bg-skeleton py-1 px-3  rounded "
                          onClick={() => handleToggleEditMode("businessInfo")}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-orange text-white py-1 px-3 rounded "
                          onClick={verifyBusinessInfo}
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  {!editModeState.businessInfo ? (
                    <div className="flex flex-row items-start gap-2">
                      <CiLocationOn className="mt-1" />
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-medium flex items-center gap-1">
                          Address{" "}
                          <span>
                            <FaEye className="h-3" />
                          </span>
                        </p>
                        <p className="text-lg text-gray-700">
                          {editInfoState.streetAddress.length > 0
                            ? editInfoState.streetAddress
                            : "Brooklyn"}
                          {`, `}
                          {editInfoState.city.length > 0
                            ? editInfoState.city
                            : "city"}
                          {`, `}
                          {editInfoState.state}
                          {`, `}
                          {editInfoState.zip.length > 0
                            ? editInfoState.zip
                            : "123456"}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <CiLocationOn />
                        <p className="text-lg font-medium flex items-center gap-1">
                          Address{" "}
                          <span>
                            <FaEye className="h-3" />
                          </span>
                        </p>
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
                            value={editInfoState.streetAddress}
                            onChange={(e) =>
                              handleEditInfoStateChange(
                                "streetAddress",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-1"></div>{" "}
                        {/* ADDRESS LINE 2 optional */}
                        <div className="grid md:grid-cols-3 md:gap-x-10 gap-y-3">
                          <div className="flex flex-col col-span-3 md:col-span-1 md:mr-2 form-control">
                            <label htmlFor="building">
                              Apt/Suite (optional)
                            </label>
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
                              value={editInfoState.city}
                              onChange={(e) =>
                                handleEditInfoStateChange(
                                  "city",
                                  e.target.value
                                )
                              }
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
                              value={editInfoState.zip}
                              onChange={(e) =>
                                handleEditInfoStateChange("zip", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <label
                            htmlFor="hideAddress"
                            className="cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="cursor-pointer"
                              id="hideAddress"
                              name="hideAddress"
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
                            />
                            <span className="ml-1 text-sm">
                              We deliver or provide service at customer
                              locations
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {editModeState.businessInfo && isServiceArea && (
                    <div className="flex flex-col w-full gap-2 px-4 items-start">
                      <div className="flex items-center">
                        <CiLocationOn />
                        <p className="text-lg font-medium mr-4">
                          Service Areas
                        </p>
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
                  )}

                  {!editModeState.businessInfo ? (
                    <div className="flex flex-row gap-2">
                      <RiPhoneFill className="mt-1" />
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-medium flex items-center gap-1">
                          Phone{" "}
                          <span>
                            <FaEye className="h-3" />
                          </span>
                        </p>
                        <p className="text-lg text-gray-700">
                          {editInfoState.phone.length > 0
                            ? editInfoState.phone
                            : "+971 123 4567"}
                        </p>
                      </div>
                    </div>
                  ) : (
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
                            value={editInfoState.phone}
                            onChange={handlePhoneChange}
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
                    </div>
                  )}
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
                  {!editModeState.website ? (
                    <button
                      className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                      onClick={() => handleToggleEditMode("website")}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex items-start flex-wrap gap-2">
                      <button
                        className="bg-skeleton py-1 px-3  rounded "
                        onClick={() => handleToggleEditMode("website")}
                      >
                        Cancel
                      </button>
                      <button className="bg-orange text-white py-1 px-3 rounded ">
                        Verify
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {!editModeState.website ? (
                <div className="flex flex-row items-center gap-2">
                  <VscGlobe />
                  <a className="hover:underline" target="_blank" href="#">
                    userwebsite.com
                  </a>
                </div>
              ) : (
                <div className="flex w-full ">
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
                </div>
              )}
            </div>
          </div>
        </div>
        {/* MAIN DETAILS👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* ABOUT👇 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                About
              </p>
              {!editModeState.about ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("about")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("about")}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white py-1 px-3 rounded "
                    onClick={verifyAbout}
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg">
              Customers use this information to learn what makes your company
              great.
            </p>
          </div>
          {!editModeState.about ? (
            editInfoState.shortDescription.length > 0 ||
            editInfoState.detailedDescription.length > 0 ? (
              <div className="flex flex-col gap-4 leading-relaxed">
                <div className="lg:w-3/4">
                  <p className="font-semibold">Short Description:</p>
                  <p>{editInfoState.shortDescription}</p>
                </div>
                <div className="lg:w-3/4">
                  <p className="font-semibold">Detailed Description:</p>
                  <p>{editInfoState.detailedDescription}</p>
                </div>
              </div>
            ) : (
              <div className="border-2 border-black border-dashed p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                    <FaRegNewspaper className="h-5 w-6" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-700">
                        Tell your customers more about your business! What makes
                        your business unique? Introduce your company name and
                        explain what your business does, where you operate (or
                        the markets you serve), and tell us how long you’ve been
                        doing it for.
                      </p>
                      <div className="flex items-center font-bold gap-1">
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() => handleToggleEditMode("about")}
                        >
                          Add business description
                        </span>
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="w-full">
              <div className="flex flex-col gap-4 lg:w-3/4">
                <p className="font-semibold">Short Description:</p>
                <div className="flex flex-col">
                  <div className="flex">
                    <textarea
                      name="shortDescription"
                      id="shortDescription"
                      rows={3}
                      maxLength={150}
                      className="border border-[#b7babf] w-full py-2 px-3 text-sm"
                      placeholder="This should be a simple statement about your business that summarizes the services you provide, the products you offer, and/or the areas that you serve."
                      value={editInfoState.shortDescription}
                      onChange={(e) =>
                        handleEditInfoStateChange(
                          "shortDescription",
                          e.target.value
                        )
                      }
                    ></textarea>
                  </div>
                  <div className="self-end">
                    <span>0/150</span>
                  </div>
                </div>
                <p className="font-semibold">Detailed Description:</p>
                <div className="flex flex-col">
                  <div className="flex">
                    <textarea
                      name="detailedDescription"
                      id="detailedDescription"
                      rows={10}
                      maxLength={2500}
                      className="border border-[#b7babf] w-full py-2 px-3 text-sm"
                      placeholder="What do you do exceptionally well? Let your customers know what your business is all about. This can include how long you've been in business, the story of how it all started, or anything else you want your customers to know."
                      value={editInfoState.detailedDescription}
                      onChange={(e) =>
                        handleEditInfoStateChange(
                          "detailedDescription",
                          e.target.value
                        )
                      }
                    ></textarea>
                  </div>
                  <div className="self-end">
                    <span>0/2500</span>
                  </div>
                </div>
              </div>
            </div>
          )}

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
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* BUSINESS CATEGORIES👇 */}
        <div
          className="flex flex-col gap-4 bg-white text-gray-800 p-6"
          ref={categoriesRef}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                Business Categories
              </p>
              {!editModeState.businessCategories ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("businessCategories")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("businessCategories")}
                  >
                    Cancel
                  </button>
                  <button className="bg-orange text-white py-1 px-3 rounded ">
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg">
              Categorizing your business will help customers find your listing
              among your competitors.
            </p>
          </div>
          {!editModeState.businessCategories ? (
            <div className="flex flex-col gap-2 mt-2">
              <p>Marketing</p>
              <p>Web development</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-1">
                <label htmlFor="primaryCategory">
                  Primary Category (required)
                </label>
                <p className="text-sm text-gray-600">
                  Select the category that best describes your business
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                {!isPrimaryCategoryChange ? (
                  <div className="w-80 px-4 py-2 bg-skeleton">
                    <p>Marketing</p>
                  </div>
                ) : (
                  <input
                    type="text"
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="react-autosuggestion"
                    className="form-input md:w-80"
                    placeholder="Search for a category"
                  />
                )}

                <div
                  className="hover:underline cursor-pointer"
                  onClick={() =>
                    setIsPrimaryCategoryChange(!isPrimaryCategoryChange)
                  }
                >
                  {editModeState.businessCategories && isPrimaryCategoryChange
                    ? "cancel"
                    : "change"}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="primaryCategory">
                  Secondary Categories (optional)
                </label>
                <p className="text-sm text-gray-600">
                  Secondary categories let people know any additional services
                  your business provides.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                {!isSecondaryCategoryChange ? (
                  <div className="w-80 px-4 py-2 bg-skeleton">
                    <p>Web development</p>
                  </div>
                ) : (
                  <input
                    type="text"
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="react-autosuggestion"
                    className="form-input md:w-80"
                    placeholder="Search for a category"
                  />
                )}
                <div
                  className="hover:underline cursor-pointer"
                  onClick={() =>
                    setIsSecondaryCategoryChange(!isSecondaryCategoryChange)
                  }
                >
                  {editModeState.businessCategories && isSecondaryCategoryChange
                    ? "cancel"
                    : "change"}
                </div>
                {!isSecondaryCategoryChange && (
                  <div className="hover:underline cursor-pointer text-error">
                    remove
                  </div>
                )}
              </div>
              <div className="flex flex-row gap-4">
                <div
                  role="combobox"
                  aria-controls="react-autosuggestion"
                  aria-expanded="false"
                  className="react-autosuggestion-container"
                >
                  <input
                    type="text"
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="react-autosuggestion"
                    className="form-input md:w-80"
                    placeholder="Search for a category"
                  />
                  <div
                    className="react-auto-suggestion-container"
                    id="react-autosuggestion"
                    role="listbox"
                  ></div>
                </div>
              </div>
            </>
          )}

          {/* edit mode */}
          {/* <div className="flex flex-col gap-1">
            <label htmlFor="primaryCategory">
              Primary Category (required)
            </label>
              <p className="text-sm text-gray-600">Select the category that best describes your business</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-80 px-4 py-2 bg-skeleton">
              <p>Marketing</p>
            </div>
            <div className="hover:underline cursor-pointer">change</div> */}
          {/* edit mode */}
          {/* <div className="hover:underline cursor-pointer">cancel</div> */}
          {/* edit mode */}
          {/* </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="primaryCategory">
            Secondary Categories (optional)
            </label>
              <p className="text-sm text-gray-600">Secondary categories let people know any additional services your business provides.</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-80 px-4 py-2 bg-skeleton">
              <p>Software development</p>
            </div>
            <div className="hover:underline cursor-pointer">change</div>
            <div className="hover:underline cursor-pointer text-error">remove</div>
          </div>
          <div className="flex flex-row gap-4">
            <div role="combobox" aria-controls="react-autosuggestion" aria-expanded="false" className="react-autosuggestion-container">
              <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autosuggestion" className="form-control" placeholder="Search for a category" />
              <div className="react-auto-suggestion-container" id="react-autosuggestion" role="listbox"></div>
            </div>
          </div> */}
          {/* edit mode */}
        </div>
        {/* BUSINESS CATEGORIES👆 */}
        {/* \\\\\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* PRODUCTS AND SERVICES👆 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                Products and Services
              </p>
            </div>
            <p className="text-lg">
              Create a list of your products and services for your customers.
            </p>
          </div>
          {!editModeState.products ? (
            <div className="border-2 border-black border-dashed p-4">
              <div className="flex flex-wrap gap-4">
                <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                  <MdMiscellaneousServices className="h-5 w-6" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700">
                      Attract the right customers by creating a list of up to 30
                      products or services that you offer.
                    </p>
                    <div className="flex items-center font-bold gap-1">
                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() => handleToggleEditMode("products")}
                      >
                        Create services list
                      </span>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <hr className="w-full text-grey-300" />
              <div className="text-xs">
                {`1`}
                {`/30 Items Listed`}
              </div>
              <form name="editProductForm">
                <div className="flex">
                  <input
                    type="text"
                    name="product-0"
                    className="form-input rounded-r-0"
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 bg-success text-white"
                    title="save"
                  >
                    <FaCheck />
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-error text-white"
                    title="save"
                  >
                    <FaTrashAlt />
                  </button>
                  <div className="flex items-center justify-center px-2">
                    <IoClose
                      className="text-error w-6 h-6 stroke-3 cursor-pointer"
                      onClick={() => handleToggleEditMode("products")}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
          {/* edit mode */}
          {/* <div className="flex flex-col gap-2">
            <hr className="w-full text-grey-300"/>
            <div className="text-xs">{`1`}{`/30 Items Listed`}</div> */}
          {/* edited */}
          {/* <div title="click to edit" className="flex flex-row gap-2 items-center cursor-pointer"> */}
          {/* <FaCheckCircle /> */}
          {/* reordering */}
          {/* <div className="flex flex-col">
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div> */}
          {/* reordering */}
          {/* <span>bottle</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <BsFillPlusCircleFill className="text-success" />
                <span>Add a product</span>
              </div>
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <TiArrowUnsorted className="text-orange-700" />
                <span>Reorder product</span>
              </div>
            </div> */}
          {/* edited */}
          {/* reordering */}
          {/* <div className="flex flex-row items-center gap-2 cursor-pointer text-error">
              <button className="flex flex-row items-center gap-2 text-error py-2 px-4">
                <IoClose className="text-error"/>
                <span>Cancel</span>
              </button>
              <button className="flex flex-row items-center gap-2 text-error py-2 px-4">
                <FaCheck className="text-error"/>
                <span>Save</span>
              </button>
            </div> */}
          {/* reordering */}
          {/* <form name="editProductForm" >
              <div className="flex ">
                <input type="text" name="product-0" className="form-input rounded-r-0"/>
                <button type="submit" className="py-2 px-4 bg-success text-white" title="save"><FaCheck /></button>
                <button type="submit" className="py-2 px-4 bg-error text-white" title="save"><FaTrashAlt /></button>
              </div>
            </form>
          </div> */}
          {/* edit mode */}
        </div>
        {/* PRODUCTS AND SERVICES👆 */}
        {/* \\\\\\\\\\\ */}

        {/* \\\\\\\\\\\\\\\\ */}
        {/* PHOTOS */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium font-lora text-black title">
              Photos
            </p>
            <p className="text-lg">
              Upload images of your business so your customers can see what
              products you sell or what services you provide. Photos must be
              png, jpeg, or gif format.
            </p>
            <hr className="w-full text-gray-300" />
            <div className="text-xs pb-4">
              {`0`}
              {`/30 photos added`}
            </div>
          </div>
          {!editModeState.photos ? (
            <div className="border-2 border-black border-dashed p-4">
              <div className="flex flex-wrap lg:flex-col gap-4">
                <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                  <BsFillCameraFill className="h-5 w-6" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700">
                      Photos are one of the biggest factors consumers use to
                      evaluate a business. Make sure your photos show your
                      business at its best.
                    </p>
                    <div className="flex items-center font-bold gap-1">
                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() => handleToggleEditMode("photos")}
                      >
                        Add photos
                      </span>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap gap-4">
              {/* if photo is added */}
              {uploadedPhotos.length > 0 &&
                uploadedPhotos.map((photo, index) => (
                  <div key={index}>
                    <div className="relative">
                      <div
                        className="absolute top-0 right-0 flex flex-col justify-center items-center w-8 h-8 bg-red-500 rounded cursor-pointer"
                        onClick={() => removePhoto(index)}
                      >
                        <IoClose color="white" />
                      </div>
                      <div className="h-48 w-48 border border-gray-600 flex justify-center items-center rounded overflow-hidden">
                        <div
                          className="h-48 w-48 bg-cover bg-no-repeat bg-center"
                          style={{ backgroundImage: `url('${photo}')` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

              <div {...getRootProps()}>
                <input type="file" {...getInputProps()} />
                <div
                  className={`w-48 h-48 border-2 rounded border-dashed p-4 flex flex-col gap-2 items-center justify-center cursor-pointer border-black ${
                    isDragActive ? "border-blue-500" : "border-black"
                  }`}
                >
                  <p className="font-semibold">Add a photo</p>
                  <BsFillCameraFill className="w-11 h-11" />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* PHOTOS👆 */}
        {/* \\\\\\\\\\\\\\ */}

        {/* \\\\\\\\\\\ */}
        {/* SOCAIL MEDIA LINKS👇 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                Social Media Links
              </p>
              {!editModeState.socialMedia ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("socialMedia")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("socialMedia")}
                  >
                    Cancel
                  </button>
                  <button className="bg-orange text-white py-1 px-3 rounded ">
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg">
              Add links to your social media pages on various major platforms.
            </p>
          </div>
          {!editModeState.socialMedia ? (
            <div className="border-2 border-black border-dashed p-4">
              <div className="flex flex-wrap lg:flex-col gap-4">
                <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                  <FaShareAlt className="h-5 w-6" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700">
                      Stay connected with your customers. Add links to your
                      business social networks.
                    </p>
                    <div className="flex items-center font-bold gap-1">
                      <span className="cursor-pointer hover:underline">
                        Add social links
                      </span>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="facebook">Facebook URL</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                    <BsFacebook />
                    <p className="text-sm">https://</p>
                  </div>
                  <input
                    type="text"
                    id="facebook"
                    className="form-input w-full"
                    placeholder="e.g. www.facebook.com/companyProfile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="instagram">Instagram</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                    <BsInstagram />
                    <p className="text-sm">@</p>
                  </div>
                  <input
                    type="text"
                    id="instagram"
                    className="form-input w-full"
                    placeholder="e.g. @instagramProfile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="twitter">Twitter</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[94px]">
                    <BsTwitter />
                    <p className="text-sm">@</p>
                  </div>
                  <input
                    type="text"
                    id="twitter"
                    className="form-input w-full"
                    placeholder="e.g. @twitterProfile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="linkedin">LinkedIn URL</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                    <BsLinkedin />
                    <p className="text-sm">https://</p>
                  </div>
                  <input
                    type="text"
                    id="linkedin"
                    className="form-input w-full"
                    placeholder="e.g. www.linkedin.com/companyProfile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="youtube">Youtube Channel</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                    <BsYoutube />
                    <p className="text-sm">https://</p>
                  </div>
                  <input
                    type="text"
                    id="youtube"
                    className="form-input w-full"
                    placeholder="e.g. www.youtube.com/profile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="pinterest">Pinterest URL</label>
                <div className="flex w-full flex-row">
                  <div className="flex items-center gap-2 px-2 py-2 bg-skeleton w-[88px]">
                    <BsPinterest />
                    <p className="text-sm">https://</p>
                  </div>
                  <input
                    type="text"
                    id="pinterest"
                    className="form-input w-full"
                    placeholder="e.g. www.pinterest.com/profile"
                  />
                </div>
              </div>
            </div>
          )}

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

        {/* \\\\\\\\\\\ */}
        {/* CONTACT */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium font-lora text-black title">
                Contacts
              </p>
              {editModeState.contact && (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("contact")}
                  >
                    Cancel
                  </button>
                  <button className="bg-orange text-white py-1 px-3 rounded ">
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg">
              Who are the primary contacts in your business?
            </p>
          </div>
          {!editModeState.contact ? (
            <>
              <div className="md:grid gap-2 grid-cols-2">
                <div className="border-2 border-black border-dashed p-4">
                  <div className="flex flex-wrap lg:flex-col gap-4">
                    <div className="bg-skeleton w-12 h-12 flex items-center justify-center rounded-full">
                      <IoMdContact className="h-5 w-6" />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <p className="text-gray-700">
                          Inform customers on special contacts in your company.
                        </p>
                        <div className="flex items-center font-bold gap-1">
                          <span
                            className="cursor-pointer hover:underline"
                            onClick={() => handleToggleEditMode("contact")}
                          >
                            Create an additional contact
                          </span>
                          <FaChevronRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="py-2 mt-2 rounded w-48 bg-black text-white"
                onClick={() => handleToggleEditMode("contact")}
              >
                Add contact
              </button>
            </>
          ) : (
            <div className="md:grid gap-2 grid-cols-2">
              <div className="flex flex-col gap-2 py-2">
                <span className="text-xs text-red-700">Required</span>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-80"
                    id="firstname"
                    name="firstname"
                  />
                </div>
                <span className="text-xs text-red-700">Required</span>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-80"
                    id="lastname"
                    name="lastname"
                  />
                </div>
                <span className="text-xs text-red-700">Required</span>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Title or Role"
                    className="w-80"
                    id="title"
                    name="title"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-80"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-80"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Fax"
                    className="w-80"
                    id="fax"
                    name="fax"
                  />
                </div>
              </div>
              <div className="error">
                First Name, Last Name and Title are required
              </div>
            </div>
          )}

          {/* EDIT MODE */}
          {/*  */}
          {/* EDIT MODE */}
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

        {/* \\\\\\\\\\\ */}
        {/* DETAILED INFORMATION👇 */}
        <div className="flex flex-col gap-4 bg-white text-gray-800 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-2xl font-medium font-lora text-black title">
                Detailed Information
              </h3>
              {!editModeState.detailedInformation ? (
                <button
                  className="btn py-1 px-2 border-2 rounded border-gray-950 text-darks-v1 hover:text-white hover:bg-gray-950"
                  onClick={() => handleToggleEditMode("detailedInformation")}
                >
                  Edit
                </button>
              ) : (
                <div className="flex items-start flex-wrap gap-2">
                  <button
                    className="bg-skeleton py-1 px-3  rounded "
                    onClick={() => handleToggleEditMode("detailedInformation")}
                  >
                    Cancel
                  </button>
                  <button className="bg-orange text-white py-1 px-3 rounded ">
                    Verify
                  </button>
                </div>
              )}
            </div>
            <p className="text-lg text-gray-700">
              Additional business information to set your apart from your
              competitors. <br />
              This is unique information and increases the legitimacy of your
              business
            </p>
          </div>
          {!editModeState.detailedInformation ? (
            <div className="flex flex-col gap-2 text-gray-700">
              <div className="flex border-b border-gray-200 py-2">
                <p className="w-64">Location Type</p>
                <p>headquarters</p>
              </div>
              <div className="flex border-b border-gray-200 py-2">
                <p className="w-64">Year Established</p>
                <p>2015</p>
              </div>
              <div className="flex border-b border-gray-200 py-2">
                <p className="w-64">Annual Revenue Estimate</p>
                <p>more than 1M</p>
              </div>
              <div className="flex py-2">
                <p className="w-64">Employees</p>
                <p>5 to 9</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 text-gray-700">
              <div className="flex items-center gap-4">
                <p>Location Type</p>
                <div>
                  <input
                    type="text"
                    id="locationType"
                    className="w-48 form-input"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p>Year Established</p>
                <div>
                  <input
                    type="text"
                    id="yearEstablished"
                    className="w-48 form-input"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p>Annual Revenue Estimate</p>
                <div>
                  <input
                    type="text"
                    id="annualRevenueEstimate"
                    className="w-48 form-input"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p>Employees</p>
                <div>
                  <input
                    type="text"
                    id="employees"
                    className="w-48 form-input"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* DETAILED INFORMATION👆 */}
        {/* \\\\\\\\\\\ */}
      </div>
    </div>
  );
};

export default Profile;
