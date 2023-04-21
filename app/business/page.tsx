const firms = [
  {
    id: 1,
    title: "Paypal",
    image: "/images/company1.png",
    link: "www.paypal.com",
  },
  {
    id: 2,
    title: "Amazon",
    image: "/images/company2.png",
    link: "www.amazon.com",
  },
  {
    id: 3,
    title: "Slack",
    image: "/images/company3.png",
    link: "www.slack.com",
  },
  {
    id: 4,
    title: "Microsoft",
    image: "/images/company4.png",
    link: "www.microsoft.com",
  },
  {
    id: 5,
    title: "Github",
    image: "/images/company5.png",
    link: "www.github.com",
  },
  {
    id: 6,
    title: "Paypal",
    image: "/images/company1.png",
    link: "www.paypal.com",
  },
  {
    id: 7,
    title: "Amazon",
    image: "/images/company2.png",
    link: "www.amazon.com",
  },
  {
    id: 8,
    title: "Slack",
    image: "/images/company3.png",
    link: "www.slack.com",
  },
  {
    id: 9,
    title: "Microsoft",
    image: "/images/company4.png",
    link: "www.microsoft.com",
  },
];

const Business = () => {
  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HERO */}
      {/* \\\\\\\\\\\\ */}

      <div
        className="businessFirms-header text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-4 xl:px-0"
      >
        <p className="font-kaisei text-lg md:text-xl lg:text-2xl">
          Business Profiles
        </p>
        <p
          className="font-bold text-4xl md:text-5xl lg:text-6xl
                mt-3 md:mt-4 lg:mt-5"
        >
          Business Firms
        </p>
        <p
          className="text-sm md:text-base max-w-lg text-center
                mt-3 md:mt-4 lg:mt-5"
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore
        </p>
      </div>

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <div className="my-12 md:my-14 lg:my-16 max-w-screen-xl mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          <div className="flex-1">
            <img src="/images/firms1.png" alt="img" className="w-full" />
          </div>
          <div className="flex flex-col text-left flex-1">
            <p className="font-medium text-xl lg:text-2xl">dolor sit atetur</p>
            <p className="font-medium text-3xl md:text-4xl xl:text-5xl">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="mt-5 md:mt-6 lg:mt-7 font-semibold text-lg md:text-xl text-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in{" "}
            </p>
          </div>
        </div>
      </div>

      {/* \\\\\\\\\\\\ */}
      {/* COMPANIES */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
          {/* <!-- reusable👇 --> */}
          <div className="about-us-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
            <div className="bg-lightOrange w-full h-[1px]"></div>
            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black">
              About us
            </h3>
            <div className="bg-lightOrange w-full h-[1px]"></div>
          </div>
          <p className="font-normal text-lg lg:text-xl text-center">
            Lorem ipsum dolor sit amo
          </p>
          {/* <!-- search div --> */}
          <div
            className="border border-black px-4 py-2 lg:py-3
                flex items-center justify-between
                mt-10 md:mt-11 lg:mt-12"
          >
            <input
              type="text"
              placeholder="Search companies"
              className="focus:outline-none"
            />
            <a href="">
              <button className="font-regular text-white bg-orange py-3 px-12 text-base rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Search here
              </button>
            </a>
          </div>

          {/* <!-- company card section --> */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                mt-14 lg:mt-16 mb-14 md:mb-20 lg:mb-24 
                gap-x-10 md:gap-x-11 lg:gap-x-12 gap-y-6 md:gap-y-7 lg:gap-8"
          >
            {firms.map((firm) => (
              <a href="businessFirmDetails.html" key={firm.id}>
                <div
                  className="flex flex-col items-center justify-between shadow-eventCard
                        pt-12 md:pt-14 lg:pt-16 px-14 md:px-16 lg:px-20
                        pb-8 md:pb-9 lg:pb-10
                        rounded-[20px]"
                >
                  <img
                    src={firm.image}
                    alt="company"
                    className="max-w-[230px]"
                  />
                  <p className="mt-7 md:mt-8 lg:mt-9 font-semibold text-lg lg:text-xl text-center">
                    {firm.title}
                  </p>
                  <p className="text-sm">{firm.link}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
