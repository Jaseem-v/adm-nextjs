"use client"
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  return (
    <footer className={`bg-nav text-white px-4 xl:px-0 font-inter ${isLoginPage ? 'hidden' : 'block'}`}>
      <div
        className="max-w-screen-xl mx-auto
            flex justify-between flex-col lg:flex-row gap-y-8
            pt-14 md:pt-16 lg:pt-16 pb-14 md:pb-14 lg:pb-16 xl:pb-20"
      >
        <div>
          <a href="#" className=" flex items-center gap-2 pb-7">
            <img src="/images/newLogo.png" alt="logo" className="h-10 lg:h-12" />
            <p className="text-lg lg:text-2xl font-kaisei font-bold bg-logoBg text-transparent bg-clip-text leading-[23.83px]">
              Abu Dhabi
              <br />
              Malayalees
            </p>
          </a>
          <p
            className="text-base md:text-lg pt-3 md:pt-4 lg:pt-5 text-white
                    max-w-lg"
          >
            We are a group of like-minded individuals who come together to foster a strong sense of community,
            promote business opportunities, and support each other in both personal and professional endeavors.
          </p>
        </div>
        <div>
          <h3 className="font-bold">MENU</h3>
          <ul
            className="mt-3 md:mt-4 lg:mt-5
                    flex flex-col gap-5"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/advertisement">Advertisement</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">SOCIAL MEDIA</h3>
          <p className="mt-3 md:mt-4 lg:mt-5 max-w-xs">
            Follow us on social media to find out latest update on our progress
          </p>
          <ul
            className="mt-3 md:mt-4 lg:mt-5
                    flex gap-5"
          >
            <li>
              <a
                href="https://www.facebook.com/groups/abudhabimalayalees"
                target="_blank"
              >
                <img src="/images/facebookkkk.png" alt="fb"  />
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/LtrgXq9UdbBCOc82H958uU"
                target="_blank"
              >
                <img
                  src="/images/whatsapppp.png"
                  alt="google"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abudhabimalayalee"
                target="_blank"
              >
                <img src="/images/instagrammmm.png" alt="instagram" />
              </a>
            </li>
            
            <li>
              <a href="https://t.me/abudhabimalayali" target="_blank">
                <img
                  src="/images/telegrammmm.png"
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- empty div for copyright --> */}
      <div className="h-8 w-full"></div>
    </footer>
  );
};

export default Footer;
