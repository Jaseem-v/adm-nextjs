import React from "react";
import "./home.css";
import Index from "../page";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

type socialMediaProps = {
  id: number;
  title: string;
  type: string;
  link: string;
  icon: JSX.Element;
}

// color="#3b5998"
// color="#0088cc"
// color="#25D366"

const socialMedia: socialMediaProps[] = [
  {
    id: 1,
    title: "Facebook",
    type: "Group",
    link: "https://www.facebook.com/groups/abudhabimalayalees",
    icon: <FaFacebookF className="w-7 h-7" />,
  },
  {
    id: 4,
    title: "Telegram",
    type: "Group",
    link: "https://t.me/abudhabimalayali",
    icon: <FaTelegramPlane className="w-7 h-7"  />
  },
  {
    id: 5,
    title: "Whatsapp",
    type: "Group",
    link: "https://chat.whatsapp.com/LtrgXq9UdbBCOc82H958uU",
    icon: <BsWhatsapp className="w-7 h-7" />,
  },
  {
    id: 6,
    title: "Instagram",
    type: "",
    link: "https://www.instagram.com/abudhabimalayalee",
    icon: <BsInstagram className="w-7 h-7"/>,
  },
  {
    id: 2,
    title: "Facebook",
    type: "Profile",
    link: "https://www.facebook.com/abudhabimalayalee",
    icon: <FaFacebookF className="w-7 h-7" />,
  },
  {
    id: 3,
    title: "Facebook",
    type: "Page",
    link: "https://www.facebook.com/abudhabimalayalees",
    icon: <FaFacebookF className="w-7 h-7" />,
  },

];

const members = [
  {
    id: 1,
    name: "Daniel Sams",
    position: "Founder and CEO",
    image: "/images/team1.png",
  },
  {
    id: 2,
    name: "Steve Rogers",
    position: "Strategy",
    image: "/images/team2.png",
  },
  {
    id: 3,
    name: "John wook",
    position: "Co Founder and CTO",
    image: "/images/team3.png",
  },
  {
    id: 4,
    name: "Smith Jones",
    position: "Creative director",
    image: "/images/team4.png",
  },
  {
    id: 5,
    name: "Johnson",
    position: "Founder and CEO",
    image: "/images/team5.png",
  },
  {
    id: 6,
    name: "John wook",
    position: "Creative directo",
    image: "/images/team6.png",
  },
  {
    id: 7,
    name: "Daniel Sams",
    position: "CEO of Amazon",
    image: "/images/team1.png",
  },
  {
    id: 8,
    name: "John wook",
    position: "CEO of flipkart",
    image: "/images/team2.png",
  },
];

const popularCompanies = [
  {
    id: 1,
    image: "/images/fbImage.png",
    logo: "/images/fbLogo.png",
    title: "Facebook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    image: "/images/googleImg.png",
    logo: "/images/googleLogo.png",
    title: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    image: "/images/appleImg.png",
    logo: "/images/appleLogo.png",
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    image: "/images/youtubeImg.png",
    logo: "/images/youtubeLogo.png",
    title: "Youtube",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const newsFeed = [
  {
    id: 1,
    image: "/images/news1.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, adipiscing sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    image: "/images/news2.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, adipiscing sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    image: "/images/news1.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, adipiscing sed do eiusmod tempor incididunt ut labore",
  },
];

const numbers = [
  { id: 1, title: "Happy Clients", number: 100 },
  { id: 2, title: "Awards Won", number: 70 },
  { id: 3, title: "Projects Completed", number: 200 },
  { id: 4, title: "Cups of Coffee", number: 500 },
];
const Home = () => {
  return <Index />;
};

export {socialMedia , members, popularCompanies, newsFeed , numbers};
