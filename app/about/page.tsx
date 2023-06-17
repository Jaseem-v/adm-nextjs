"use client"
import Link from "next/link";
import SectionHeader from '@/components/SectionHeader';
import { numbers } from '../../utils/content';
import { useState } from "react";
import EnlistModel from "@/components/enlistModel";

const features = [
  {
    id: 1,
    title: 'Collaboration is Key',
    description: 'We firmly believe that collaboration is key to business growth. We understand the power of bringing together individuals from diverse backgrounds and experiences. By fostering a collaborative environment, we encourage our members to share their knowledge, insights, and expertise, leading to innovative ideas and solutions.',
    image: 'collaboration.svg'
  },
  {
    id: 2,
    title: 'Networking Opportunities',
    description: 'Networking plays a vital role in expanding horizons and creating meaningful connections. We provide ample networking opportunities for our members to interact and engage with like-minded individuals. Our community hosts regular events, workshops, and conferences where members can network, exchange business cards, and forge valuable relationships.',
    image: 'networking.svg'
  },
  {
    id: 3,
    title: 'Exploring New Frontiers',
    description: 'Embracing change and exploring new frontiers is essential for businesses to thrive in todays dynamic world. We encourage our members to stay updated with the latest industry trends, emerging technologies, and market opportunities. Through our platform, members can access a wealth of resources, including informative articles, expert interviews, and educational webinars.',
    image: 'explore.svg'
  },
]

const AboutUs = () => {
  const [showEnlistModel, setShowEnlistModel] = useState(false)
  const breadcrumbs = ['About']
  return (
    <>
    {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}
      <SectionHeader title="About Us" breadcrumbs={breadcrumbs}/>


      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}
      <section>
        <div className="mt-20 mb-20 xl:mb-0 text-center text-black max-w-screen-xl mx-auto px-5 xl:px-0">
          <h1 className="font-albra text-3xl md:text-4xl xl:text-5xl font-bold text-[#333]">We believe community grows businesses</h1>
          <h6 className="font-inter text-base lg:text-xl font-normal text-opacity-70 mt-4">Connecting Malayalee Entrepreneurs for Collective Success</h6>
          <div className="mt-10 md:mt-12 xl:mt-20 flex items-start justify-center gap-32 text-left ">
            <img src="/images/about3.png" alt="community image" className="w-[530px] hidden lg:block"/>
            <div className="flex flex-col font-inter lg:pt-12">
              <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl">
                  Discover Our Story <br />
                  and Mission</h2>
                  <p className="pt-8 lg:pt-16 font-medium text-xl leading-[1.5]">Abu Dhabi Malayalees is a vibrant and thriving business community of Malayalees in Abu Dhabi, United Arab Emirates. We are a group of like-minded individuals who come together to foster a strong sense of community, promote business opportunities, and support each other in both personal and professional endeavors.</p>
                  <p className="pt-2 lg:pt-4 font-medium text-xl leading-[1.5]">We aim to provide a platform for our members to network, share ideas, and explore new business opportunities.</p>
                  <Link href="/register" >
                  <button className="mt-9 font-medium bg-brownBg text-lightGold py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2">
            Register Now
            <img src="/images/arrow-right.svg" alt="right arrow" />
          </button>
          </Link>
            </div>
          </div>
        </div>

      </section>

      {/* \\\\\\\\\\\\ */}
      {/* MISSION */}
      {/* \\\\\\\\\\\\ */}
      <section className="bg-black xl:-mt-20">
        <div className="text-white  pb-10 md:pb-12 xl:pb-20 pt-16 md:pt-20 xl:pt-32 text-left">
          <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
          <p className="font-semibold font-poppins text-base lg:text-xl tracking-wide">OUR MISSION</p>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl font-poppins text-[#FFF5CF] max-w-[890px] mt-5 leading-[1.3]">Our mission is to empower businesses with technology, helping them to reach their full potential and achieve their goals.</h3>
          </div>
          <div className="w-full mt-16">
          <img src="/images/path.png" alt="path" className="w-screen" />
        </div>
        <div className="mt-16 max-w-screen-xl mx-auto px-5 xl:px-0 flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          <p className="font-poppins font-medium text-base md:text-lg lg:text-xl leading-8 flex-1">Our mission is centered around facilitating the growth and success of businesses by providing a dynamic platform for collaboration, learning, and support. We foster a vibrant community where entrepreneurs, professionals, and business owners can connect, exchange ideas, and gain valuable insights.
</p>
          <div className="flex flex-col gap-6 flex-1">
            <p className="font-poppins font-medium  text-base md:text-lg lg:text-xl leading-8 ">Through our network and resources, we aim to empower businesses to reach their full potential, realize their goals, and stay ahead in an ever-evolving marketplace.
            </p>
            <img src="/images/ourMission.png" alt="mission" className="rounded-md " />
          </div>
        </div>
        </div>
      </section>
      
      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}
      <section>
        <div className="w-full ">
          <div className=" text-black max-w-screen-xl mx-auto px-5 xl:px-0 py-10 md:py-12 xl:py-20  text-center">
            {/* <p className="text-opacity-70 font-medium text-[#474c56] text-inter text-lg">CONNECT</p> */}
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[40px] font-bold font-albra text-[#333]">Unlocking Business Success with Our Community</h2>
            <div className="mt-16 flex flex-col gap-20 text-left">
              {features.map(feature => (
              <div className={`flex ${feature.id === 2 ? 'lg:flex-row-reverse': 'flex-col lg:flex-row'} flex-col lg:flex-row gap-16 items-center justify-center`} key={feature.id}>
                <div className="text flex-1">
                  <h4 className="text-[32px] font-albra font-semibold">{feature.title}</h4>
                  <p className="pt-4 font-inter leading-[1.7]">{feature.description}</p>
                </div>
                <img src={`/images/${feature.image}`} alt="collaboration" className="flex-1"/>
              </div>

              ))}
            </div>
          </div>
        </div>
      </section>
      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}
      <section className="bg-lightBg ">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-10 md:py-12 xl:py-20  text-center flex flex-col items-center">
          <h3 className="text-textBlack font-poppins font-bold text-2xl md:text-3xl">Want to join the team?</h3>
            <button
              onClick={() => setShowEnlistModel(true)}
              className="mt-9 font-medium bg-brownBg text-lightGold py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2"
            >
              Enlist Now
              <img src="/images/arrow-right.svg" alt="right arrow" />
            </button>
        </div>
      </section>
      {showEnlistModel && (
          <EnlistModel setShowEnlistModel={setShowEnlistModel} />
        )}
      
    </>
  );
};

export default AboutUs;
