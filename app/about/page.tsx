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
                  <button
            className="mt-9 font-medium bg-black text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2"
          >
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
      <section className="bg-zinc-900 ">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-10 md:py-12 xl:py-20  text-center flex flex-col items-center">
          <h3 className="text-white font-poppins font-bold text-2xl md:text-3xl">Want to join the team?</h3>
            <button
              onClick={() => setShowEnlistModel(true)}
              className="mt-6 lg:mt-9 font-medium bg-orange text-white py-3 px-6 rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75 flex items-center justify-center gap-2"
            >
              Enlist Now
              <img src="/images/arrow-right.svg" alt="right arrow" />
            </button>
        </div>
      </section>
      {showEnlistModel && (
          <EnlistModel setShowEnlistModel={setShowEnlistModel} />
        )}
      {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}
{/* 
      <div
        className="about-us-header text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-4 xl:px-0"
      >
        <p className="font-kaisei text-lg md:text-xl lg:text-2xl">About Us</p>
        <p
          className="font-bold text-4xl md:text-5xl lg:text-6xl
                mt-3 md:mt-4 lg:mt-5"
        >
          About Us
        </p>
        <p
          className="text-sm md:text-base max-w-lg text-center
                mt-3 md:mt-4 lg:mt-5"
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore
        </p>
      </div> */}

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      {/* <section>
        <div className="py-14 md:py-20 lg:py-32 bg-white text-black text-center  ">
          <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
            <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
              <div className="bg-lightOrange w-full h-[1px]"></div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black">
                About us
              </h3>
              <div className="bg-lightOrange w-full h-[1px]"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-8 font-semibold text-3xl md:text-4xl lg:text-5xl md:max-w-2xl lg:max-w-4xl">
                Get to Know Us: Discover Our Story and Mission
              </h2>
              <p className="md:max-w-3xl lg:max-w-5xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc">
                Abu Dhabi Malayalees is a vibrant and thriving business
                community of Malayalees in Abu Dhabi, United Arab Emirates. We
                are a group of like-minded individuals who come together to
                foster a strong sense of community, promote business
                opportunities, and support each other in both personal and
                professional endeavors.
              </p>
              <p className="md:max-w-3xl lg:max-w-5xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc">
                Our community is made up of individuals from all walks of life,
                including entrepreneurs, professionals, and business owners, who
                share a common interest in connecting and collaborating with
                fellow Malayalees. We aim to provide a platform for our members
                to network, share ideas, and explore new business opportunities.
              </p>
              <button className="mt-8 md:mt-12 lg:mt-16 font-regular bg-lightOrange py-3 px-12 text-base rounded-full text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-start mt-16 overflow-x-hidden">
            <div className="grow hidden lg:block">
              <img
                src="/images/aboutUs-1.png"
                alt="about us"
                className="w-full"
              />
            </div>
            <div className="grow">
              <img src="/images/aboutUs2.png" alt="" className="min-w-full" />
              <div className="flex justify-center items-center h-full pt-[10%]">
                <div className=" grid grid-cols-3 gap-x-10 gap-y-8 md:gap-x-16 md:gap-y-10 xl:gap-x-24 xl:gap-y-12 justify-items-center place-items-center">
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      245+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">
                      Companies
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      44+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">Staffs</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      85+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">
                      Contributors
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      60K+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">
                      Customers
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      133+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">
                      Employees
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
                      205+
                    </p>
                    <p className="text-sm md:text-base lg:text-base">
                      Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      {/* <section>
        <div
          className="max-w-screen-xl mx-auto px-5 xl:px-0
            font-bold text-xl md:text-2xl lg:text-3xl
            flex flex-col lg:flex-row justify-between gap-8 md:gap-9 lg:gap-10 mb-24"
        >
          <div className="flex-1 max-w-2xl">
            <h3 className="font-kaisei opacity-70">Lorem ipsum dolor</h3>
            <h2
              className="font-semibold text-3xl md:text-4xl lg:text-5xl 
                    md:max-w-2xl lg:max-w-4xl
                    mt-2 md:mt-3 lg:mt-4"
            >
              Lorem ipsum dolor
            </h2>
            <div
              className="mt-8 md:mt-9 lg:mt-10
                    flex flex-col gap-4 md:gap-5 lg:gap-6"
            >
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                  <img src="/images/checkIcon.png" alt="checkmark" />
                  <p>sit amet, consectetur adipiscing</p>
                </div>
                <p className="font-normal">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo in
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                  <img src="/images/checkIcon.png" alt="checkmark" />
                  <p>sit amet, consectetur adipiscing</p>
                </div>
                <p className="font-normal">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo in
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 ">
                <div className="flex gap-2 md:gap-3 lg:gap-4 items-center ">
                  <img src="/images/checkIcon.png" alt="checkmark" />
                  <p>sit amet, consectetur adipiscing</p>
                </div>
                <p className="font-normal">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo in
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/images/about-us-section.png"
              alt="img"
              className="w-full"
            />
          </div>
        </div>
      </section> */}

      
    </>
  );
};

export default AboutUs;
