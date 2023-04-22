import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const BusinessPersons = () => {
  return (
    <>
      {/* \\\\\\\\\\\\ */}
      {/* HEADER */}
      {/* \\\\\\\\\\\\ */}
      <SectionHeader
        title="Business Persons"
        classname="businessFirms-header"
        description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
      />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div
          className="py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-start justify-center
            px-4 xl:px-0 max-w-screen-xl mx-auto"
        >
          <p className="font-kaisei text-lg md:text-xl lg:text-2xl">
            Business profiles
          </p>
          <p
            className="font-semibold text-3xl md:text-4xl lg:text-5xl
                mt-3 md:mt-4 lg:mt-5"
          >
            Lorem ipsum <br />
            dolor tempor incididunt
          </p>
          <p
            className="text-sm md:text-base max-w-4xl text-start
                mt-3 md:mt-4 lg:mt-5 font-semibold text-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
          </p>
          {/* search div  */}
          <div
            className="border border-black px-4 py-2 lg:py-3
                flex items-center justify-between
                mt-10 md:mt-11 lg:mt-12 w-full"
          >
            <input
              type="text"
              placeholder="Search companies"
              className="focus:outline-none"
            />
            <a href="">
              <button className="font-regular text-white bg-orange py-3 px-4 min-[380px]:px-8 md:px-12 text-base rounded-lg hover:bg-opacity-90 active:translate-y-[1px] transition-all duration-75">
                Search
              </button>
            </a>
          </div>

          {/* business persons div */}
          <div className="grid place-items-center justify-items-center w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-14 md:mb-16 lg:mb-20 mt-40">
            {/* business person card */}
            <Link href="/businesspersons/details">
              <div
                className="py-8 md:py-9 lg:py-10  pl-12 md:pl-14 lg:pl-16 pr-44 rounded-[20px]
                    border border-black relative"
              >
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-semibold text-lg md:text-xl">
                    John Lormmy
                  </p>
                  <p className="font-light text-sm">CEO Amazon</p>
                  <p className="font-light text-sm">www.amazon.com</p>
                </div>
                <img
                  src="/images/p.png"
                  alt="person"
                  className="absolute bottom-0 right-6"
                />
              </div>
            </Link>
            {/* business person card */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPersons;
