"use client";

import { useEffect, useState } from "react";
import BusinessDropdown from "./BusinessDropdown";
import Link from "next/link";
import "./Navbar.css";
import EnlistModel from "./enlistModel";
import { Toaster } from "react-hot-toast";
import EnlistDropdown from "./enlistDropdown";
import httpClient from "@/services/axiosInstance";

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
  const [username, setUsername] = useState('')

  const selectedStyle =
    "nav1 text-base font-bold hover:text-slate-300 active:text-slate-400  px-2";
  const nonSelectedStyle =
    "text-base  text-gray-300 hover:text-white active:text-slate-400 px-2";

  let autoCloseTimeout: NodeJS.Timeout;

  const handleMouseLeave = () => {
    // Automatically close the dropdown after 4 seconds unless the dropdown component is hovered
    setTimeout(() => {
      if (!isBusinessDropdown) {
        autoCloseTimeout = setTimeout(() => {
          setIsBusinessDropdown(false);
        }, 1000);
      }
    }, 1000);
  };

  const token = localStorage.getItem('accessToken')
  const isLoggedin = token !== null;
  
  useEffect(() => {
    const fetchUser = async() => {
      const accountType = localStorage.getItem('accountType')

      if (accountType === 'personal') {
        try {
          const response = await httpClient().get("user/personal/profile")
          if (response.status === 200) {
            const { username } = response.data.data
            const editedUsername = username.slice(3)
            setUsername(editedUsername)
          }
        } catch (error) {
          console.log(error)
        }
      } else if (accountType === 'business') {
        try {
          const response = await httpClient().get("user/business/profile")
          if (response.status === 200) {
            const { username } = response.data.data
            setUsername(username)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchUser()
  }, [])

  return (
    // need to implement proper sticky navbar
    <header
      className="font-inter z-20 bg-black text-white sticky top-0 left-0"
      id="navbar"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 xl:px-0">
        {/* logo👇 */}
        <Link href="/" className="logo flex items-center gap-2 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="logo" className="h-9 lg:h-11" />
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
              {navItems.map((item) => (
                <li
                  className={`py-10 hidden lg:block ${
                    item.title === "Business" ? "relative" : ""
                  } `}
                  key={item.id}
                >
                  <Link
                    href={`/${item.link}`}
                    className={`${item.animation} text-sm hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2`}
                    aria-current="page"
                  >
                    {item.title}
                    {item.title === "Business" && (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          setIsBusinessDropdown(true);
                          clearTimeout(autoCloseTimeout);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src="/images/expand.svg"
                          alt="expand"
                          className="mt-1 cursor-pointer"
                        />
                        {/* {isBusinessDropdown && (
                          <BusinessDropdown
                            setIsBusinessDropdown={setIsBusinessDropdown}
                            setIsDropdownHovered={setIsDropdownHovered}
                          />
                        )} */}
                      </div>
                    )}
                  </Link>
                  {item.title === "Business" && isBusinessDropdown && (
                    <BusinessDropdown
                      setIsBusinessDropdown={setIsBusinessDropdown}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* login */}
        {isLoggedin ? <div className="flex items-center justify-end gap-3 hover:cursor-pointer">
          <p>{username}</p>
          <div className="h-9 w-9 bg-skeleton rounded-full"></div>
        </div> :
        <div className="hidden lg:flex items-center gap-5 text-sm">
          <div className="relative">
            <button
              className="navBtn font-medium bg-orange text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
              onClick={() => setIsEnlistDropdown((prevState) => !prevState)}
            >
              Claim my Listing
            </button>
            {isEnlistDropdown && (
              <EnlistDropdown setIsEnlistDropdown={setIsEnlistDropdown} />
            )}
          </div>
          <Link href="/login">
            <button className="navBtn font-medium bg-white text-black py-3 px-12 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
              Login
            </button>
          </Link>
        </div>}

        {showEnlistModel && (
          <EnlistModel setShowEnlistModel={setShowEnlistModel} />
        )}
        {/* \\\\\\\\\\\\\\\\\ */}
        {/* mobile menu */}
        <div className="-mr-2 flex lg:hidden z-30">
          {/* Hamburger button */}
          <button
            type="button"
            className="mobile-menu inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white transition duration-700 ease-in-out"
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
      </div>
      {/* <div className="w-full h-[1px] bg-white navLine"></div> */}
      {/* Mobile menu, toggle classNamees based on menu state */}
      {isMobileNavOpen && (
        <div className=" lg:hidden z-50" id="myLinks">
          <div className="flex flex-col gap-16 items-start justify-center px-6 py-10 sm:px-3  links w-full h-screen absolute top-0 right-0 bg-black">
            <div
              className="flex flex-col items-start justify-center gap-4 w-full"
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
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
              <div>
                <Link
                  href="/about"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  About Us
                </Link>
              </div>
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
              <div>
                <Link
                  href="/gallery"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Gallery
                </Link>
              </div>
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
              <div>
                <Link
                  href="/business"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Business Firms
                </Link>
              </div>
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
              <div>
                <Link
                  href="/business/persons"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Business Persons
                </Link>
              </div>
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
              <div>
                <Link
                  href="/events"
                  className={nonSelectedStyle}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Events
                </Link>
              </div>
              <div className="w-full h-[1px] bg-white bg-opacity-10 navLine" />
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
            <div className="w-full flex items-start justify-center gap-5 text-center ">
              <div className="relative flex-1">
                <button
                  className=" w-full font-medium bg-orange text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75"
                  onClick={() => setIsEnlistDropdown((prevState) => !prevState)}
                >
                  Enlist
                </button>
                {isEnlistDropdown && (
                  <EnlistDropdown setIsEnlistDropdown={setIsEnlistDropdown} />
                )}
              </div>
              <Link href="/login" className="flex-1">
                <button className="w-full font-medium bg-white text-black py-3 px-12 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                  Login
                </button>
              </Link>
            </div>
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
