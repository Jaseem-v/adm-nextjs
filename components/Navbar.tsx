"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import EnlistModel from "./enlistModel";
import { Toaster } from "react-hot-toast";
import httpClient from "@/services/axiosInstance";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { getLoginStatus } from "./../services/loginStatus";

import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import AdvertisementModel from "./advetisementModel";

const businessItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/business">
        Business Directory
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/businesspersons">
        Personal Directory
      </Link>
    ),
  },
];
const advertismentItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/advertisement/all">
        All
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/advertisement/real-estate">
        Realestate
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/advertisement/used-car">
        Used car
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/advertisement/job">
        Job
      </Link>
    ),
  },
];
const enlistItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/business-listings/add-individual">
        Personal
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/business-listings/add-company">
        Business
      </Link>
    ),
  },
];

const navItems = [
  { id: 1, title: "Home", animation: "nav1", link: "" },
  { id: 2, title: "About Us", animation: "nav2", link: "about" },
  { id: 3, title: "Gallery", animation: "nav3", link: "gallery" },
  { id: 4, title: "Business", animation: "nav4", link: "business" },
  { id: 5, title: "Events", animation: "nav5", link: "events" },
  { id: 6, title: "Contact Us", animation: "nav6", link: "contact" },
];

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isBusinessDropdown, setIsBusinessDropdown] = useState(false);
  const [isEnlistDropdown, setIsEnlistDropdown] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showEnlistModel, setShowEnlistModel] = useState(false);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [showAdvertisementModel, setShowAdvertisementModel] = useState(false);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedOut(true);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/myProfile"
          className="flex gap-2 items-center"
        >
          <FaHome />
          Dashboard
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/myProfile"
          className="flex gap-2 items-center"
        >
          <IoPersonSharp />
          My profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <div
          rel="noopener noreferrer"
          className="flex gap-2 items-center border-none"
          onClick={logout}
        >
          <MdLogout />
          Logout
        </div>
      ),
    },
  ];
  // const [isLoggedin, setIsLoggedin] = useState(false)

  const selectedStyle =
    "text-base  text-gray-300 hover:text-white active:text-slate-400 px-2";
  // const selectedStyle =
  //   "nav1 text-base font-bold hover:text-slate-300 active:text-slate-400  px-2";
  const nonSelectedStyle =
    "text-base  text-gray-300 hover:text-white active:text-slate-400 px-2";

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/login") {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [pathname]);

  useEffect(() => {
    const token =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
    const loggedin = token !== null;
    if (isLoggedin !== loggedin) setIsLoggedIn(loggedin);
    // if (!token)

    // setIsLoggedIn(true)

    //    const { loginStatus} = router.query;
    // setIsLoggedin(loginStatus === 'success');

    const fetchUser = async () => {
      const accountType = localStorage.getItem("accountType");

      if (accountType === "personal") {
        try {
          const response = await httpClient().get("user/personal/profile");
          if (response.status === 200) {
            const { profilePicture } = response.data.data;
            profilePicture.key
              ? setProfileImage(
                `https://abudhabi-malayalees.onrender.com/resource/personal-account-profile-picture/${profilePicture.key}`
              )
              : setProfileImage("images/profilePreview.png");
            const { username } = response.data.data;
            const editedUsername = username.slice(3);
            setUsername(editedUsername);
          }
        } catch (error) {
          console.log(error);
        }
      } else if (accountType === "business") {
        try {
          const response = await httpClient().get("user/business/profile");
          if (response.status === 200) {
            const { profilePicture } = response.data.data;
            profilePicture.key
              ? setProfileImage(
                `https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${profilePicture.key}`
              )
              : setProfileImage("images/profilePreview.png");
            const { username } = response.data.data;
            const editedUsername = username.slice(3);
            setUsername(editedUsername);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUser();
    // const loginStatus = token !== null
  }, [isLoggedOut, pathname]);

  useEffect(() => {
    if (isLoggedin == false && isLoggedOut == true) {
      router.push("/");
    }
  }, [isLoggedin, isLoggedOut]);

  return (
    // need to implement proper sticky navbar
    <header
      className={`font-inter z-20 bg-nav text-white sticky top-0 left-0 ${isLoginPage ? "hidden" : "block"
        }`}
      id="navbar"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 xl:px-0">
        {/* logo👇 */}
        <Link href="/" className="logo flex items-center gap-2 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/newLogo.png" alt="logo" className="h-9 lg:h-11" />
          <p className="text-lg lg:text-xl font-kaisei font-bold bg-logoBg text-transparent bg-clip-text leading-[23.83px]">
            Abu Dhabi
            <br />
            Malayalees
          </p>
        </Link>
        {/* \\\\\\\\\\\\\\\\\\\\\\ */}
        {/*  menu items */}
        {!isMobileNav && (
          <div className="hidden lg:grid items-center px-16">
            <ul className="flex gap-10" id="navbar-cta">
              <li className="py-10 hidden lg:block">
                <Link
                  href="/"
                  className={`nav1 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li
                className="py-10 hidden lg:block"
              >
                <Link
                  href='/about'
                  className={`nav2 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2`}
                  aria-current="page"
                >
                  About Us
                </Link>
              </li> */}
              <li className="py-10 hidden lg:block">
                <Link
                  href="/gallery"
                  className={`nav3 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2`}
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
              <li className="py-10 hidden lg:block h-[17px]">
                <Dropdown
                  menu={{ items: businessItems }}
                  placement="bottomRight"
                  arrow
                >
                  <div
                    className="nav4 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2 cursor-pointer"
                    aria-current="page"
                  >
                    Directory
                    <img
                      src="/images/expand.svg"
                      alt="expand"
                      className="mt-1cursor-pointer"
                    />
                  </div>
                </Dropdown>
              </li>
              <li className="py-10 hidden xl:block">
                <Link
                  href="/events"
                  className="nav5 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2"
                  aria-current="page"
                >
                  Events
                </Link>
              </li>
              <li className="py-10 hidden lg:block">
                <Dropdown
                  menu={{ items: advertismentItems }}
                  placement="bottomRight"
                  arrow
                >
                  <div
                    className="nav4 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2 cursor-pointer"
                    aria-current="page"
                  >
                    Advertisement
                    <img
                      src="/images/expand.svg"
                      alt="expand"
                      className="mt-1cursor-pointer"
                    />
                  </div>
                </Dropdown>

              </li>
              <li className="py-10 hidden lg:block">
                <Link
                  href="/contact"
                  className="nav6 text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* login */}
        {isLoggedin ? (
          <div className="flex items-center gap-6">
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <div className="hidden md:flex items-center justify-end gap-3 hover:cursor-pointer ">
                <div
                  className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                  style={{ backgroundImage: `url(${profileImage})` }}
                ></div>

                <div className="flex items-center gap-2">
                  {/* <p>{username}</p> */}
                  <img
                    src="/images/expand.svg"
                    alt="expand"
                    className="mt-1 cursor-pointer w-[11px] h-2"
                  />
                </div>
              </div>
            </Dropdown>
            <button
              className="navBtn font-medium bg-white text-primary py-2 px-7 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
              onClick={() => setShowAdvertisementModel(true)}
            >
              post AD
            </button>
            {showAdvertisementModel && (
              <AdvertisementModel
                setShowAdvertisementModel={setShowAdvertisementModel}
              />
            )}

          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-5 text-sm">
            <div className="relative">
              <Dropdown
                menu={{ items: enlistItems }}
                placement="bottomRight"
                arrow
              >
                <button className="navBtn font-medium bg-lightGold text-primary py-3 px-6 min-w-[120px] rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                  Register
                </button>
              </Dropdown>
            </div>
            <Link href="/login">
              <button className="navBtn font-medium bg-white text-black py-3 px-10 min-w-[120px] rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Login
              </button>
            </Link>
          </div>
        )}

        {/* \\\\\\\\\\\\\\\\\ */}
        {/* mobile menu */}
        <div className="-mr-2 flex lg:hidden z-30">
          {/* Hamburger button */}
          <button
            type="button"
            className="mobile-menu inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:text-white transition duration-700 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={() => setIsMobileNavOpen((prevState) => !prevState)}
          >
            {!isMobileNavOpen ? (
              <svg
                className=" block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                id="menu-open"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                id="menu-close"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {showEnlistModel && (
          <EnlistModel setShowEnlistModel={setShowEnlistModel} />
        )}
      </div>
      {/* <div className="w-full h-[1px] bg-white navLine"></div> */}
      {/* Mobile menu, toggle classNamees based on menu state */}
      {isMobileNavOpen && (
        <div className=" lg:hidden z-50" id="myLinks">
          <div className="flex flex-col gap-16 items-start justify-center px-6 py-10 sm:px-3  links w-full h-screen absolute top-0 right-0 bg-black">
            {isLoggedin && (
              <div className="self-end flex items-center gap-6 ">
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                  <div className="flex items-center justify-end gap-3 hover:cursor-pointer ">
                    <div
                      className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                      style={{ backgroundImage: `url(${profileImage})` }}
                    ></div>

                    <div className="flex items-center gap-2">
                      {/* <p>{username}</p> */}
                      <img
                        src="/images/expand.svg"
                        alt="expand"
                        className="mt-1 cursor-pointer w-[11px] h-2"
                      />
                    </div>
                  </div>
                </Dropdown>
              </div>
            )}
            <div
              className="flex flex-col items-center justify-center gap-8 w-full"
              id="navbar-cta"
            >
              <div>
                <Link
                  href="/"
                  className={selectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Home
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/gallery"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Gallery
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/business"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Business Company
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/businesspersons"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Business Persons
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/events"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Events
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/advertisement"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Advertisement
                </Link>
              </div>
              {/* <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" /> */}
              <div>
                <Link
                  href="/contact"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {!isLoggedin &&
              <div className="w-full flex items-start justify-center gap-5 text-center ">
                <div className="relative flex-1">
                  <button
                    className=" w-full font-medium bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
                    onClick={() => {
                      setShowEnlistModel(true);
                      setIsMobileNavOpen(false);
                    }}
                  >
                    Register
                  </button>
                  {showEnlistModel && (
                    <EnlistModel setShowEnlistModel={setShowEnlistModel} />
                  )}
                </div>
                <Link href="/login" className="flex-1">
                  <button className="w-full font-medium bg-white text-black py-3 px-12 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                    Login
                  </button>
                </Link>
              </div>}
          </div>
        </div>
      )}
      {/* {isMobileNavOpen && (
        <div className=" lg:hidden z-50" id="myLinks">
          <div className="flex flex-col gap-10 items-center justify-center px-2 py-10 sm:px-3  links w-full h-screen absolute top-0 right-0 bg-black">
            <ul
              className="flex flex-col items-center justify-center gap-10"
              id="navbar-cta"
            >
              <li>
                <Link
                  href="/"
                  className={selectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  GALERY
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  BUSINESS FIRMS
                </Link>
              </li>
              <li>
                <Link
                  href="/business/persons"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  BUSINESS PERSONS
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-5 text-center ">
            <div className="relative">
              <button
                className="w-full font-medium bg-orange text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
                onClick={() => setIsEnlistDropdown((prevState) => !prevState)}
              >
                Claim my Listing
              </button>
              {isEnlistDropdown && (
                <EnlistDropdown setIsEnlistDropdown={setIsEnlistDropdown} />
              )}
            </div>
            <Link href="/login">
              <button className="w-full font-medium bg-white text-black py-3 px-12 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Login
              </button>
            </Link>
          </div>
          </div>
          
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
