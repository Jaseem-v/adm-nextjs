import React from "react";
import "./home.css";
import ContactForm from "@/components/contactForm";
import Index from "../page";

export const socialMedia = [
  {
    id: 1,
    title: "Facebook",
    type: "Group",
    link: "https://www.facebook.com/groups/abudhabimalayalees",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    title: "Facebook",
    type: "Profile",
    link: "https://www.facebook.com/abudhabimalayalee",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    title: "Facebook",
    type: "Page",
    link: "https://www.facebook.com/abudhabimalayalees",
    icon: "fab fa-facebook",
  },
  {
    id: 4,
    title: "Telegram",
    type: "Group",
    link: "https://t.me/abudhabimalayali",
    icon: "fab fa-telegram",
  },
  {
    id: 5,
    title: "Whatsapp",
    type: "Group",
    link: "https://chat.whatsapp.com/LtrgXq9UdbBCOc82H958uU",
    icon: "fab fa-whatsapp",
  },
  {
    id: 6,
    title: "Instagram",
    type: "",
    link: "https://www.instagram.com/abudhabimalayalee",
    icon: "fab fa-instagram",
  },
];

export const members = [
  {
    id: 1,
    name: "Daniel Sams",
    position: "CEO of Amazon",
    image: "/images/team1.png",
  },
  {
    id: 2,
    name: "John wook",
    position: "CEO of flipkart",
    image: "/images/team2.png",
  },
  {
    id: 3,
    name: "John wook",
    position: "CEO of Linkedin",
    image: "/images/team3.png",
  },
  {
    id: 4,
    name: "John wook",
    position: "CEO of Facebook",
    image: "/images/team4.png",
  },
  {
    id: 5,
    name: "John wook",
    position: "CEO of Apple",
    image: "/images/team5.png",
  },
  {
    id: 6,
    name: "John wook",
    position: "CEO of Google",
    image: "/images/team6.png",
  },
];

export const popularCompanies = [
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

export const newsFeed = [
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

export const numbers = [
  { id: 1, title: "Happy Clients", number: 100 },
  { id: 2, title: "Awards Won", number: 70 },
  { id: 3, title: "Projects Completed", number: 200 },
  { id: 4, title: "Cups of Coffee", number: 500 },
];
const Home = () => {
  return <Index />;
};

export default Home;
