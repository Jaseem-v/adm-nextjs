"use client";

import { useState } from "react";
import BusinessDropdown from "./BusinessDropdown";
import Link from "next/link";
import "./Navbar.css";

const navItems = [
  { id: 1, title: "Home", animation: "nav1", link: "home" },
  { id: 2, title: "About Us", animation: "nav2", link: "about" },
  { id: 3, title: "Gallery", animation: "nav3", link: "gallery" },
  { id: 4, title: "Business", animation: "nav4", link: "business" },
  { id: 5, title: "Events", animation: "nav5", link: "events" },
  { id: 6, title: "Contact Us", animation: "nav6", link: "contact" },
];

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isBusinessDropdown, setIsBusinessDropdown] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const selectedStyle =
    "nav1 text-base font-bold hover:text-slate-300 active:text-slate-400 ";
  const nonSelectedStyle =
    "text-base  text-gray-300 hover:text-white active:text-slate-400";
  return (
    <header
      className="font-inter relative z-20 bg-black text-white"
      id="navbar"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 xl:px-0">
        {/* logo👇 */}
        <Link href="/" className="logo flex items-center gap-2 py-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="logo" className="h-10 lg:h-12" />
          <p className="text-lg lg:text-2xl font-kaisei font-bold bg-logoBg text-transparent bg-clip-text leading-[23.83px]">
            Abu Dhabi
            <br />
            Malayalees
          </p>
        </Link>
        {/* \\\\\\\\\\\\\\\\\\\\\\ */}
        {/*  menu items */}
        {!isMobileNav && (
          <div className="hidden lg:grid h-[120px] items-center border-x px-16">
            <ul className="flex gap-14" id="navbar-cta">
              {navItems.map((item) => (
                <li
                  className={`py-12 hidden lg:block ${
                    item.title === "Business" ? "relative" : ""
                  } `}
                  key={item.id}
                >
                  <Link
                    href={`/${item.link}`}
                    className={`${item.animation} text-base hover:text-slate-300 active:text-slate-400 flex items-center justify-center gap-2`}
                    aria-current="page"
                  >
                    {item.title}
                    {item.title === "Business" && (
                      <img
                        src="/images/expand.svg"
                        alt="expand"
                        className="mt-1"
                        onMouseEnter={() => setIsBusinessDropdown(true)}
                      />
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
        <div className="hidden lg:block">
          <Link href="/login">
            <button className="navBtn font-regular bg-white text-black py-3 px-12 text-base rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
              Login
            </button>
          </Link>
        </div>

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white navLine"></div>
      {/* Mobile menu, toggle classNamees based on menu state */}
      {isMobileNavOpen && (
        <div className=" lg:hidden z-50" id="myLinks">
          <div className="flex items-center justify-center px-2 py-10 sm:px-3  links w-full h-screen absolute top-0 right-0 bg-black">
            {/* Your navigation links here */}
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
