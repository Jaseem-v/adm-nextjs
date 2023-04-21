const Gallery = () => {
  return (
    <>
      <div
        className="gallery-header text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-4 xl:px-0"
      >
        <p className="font-kaisei text-lg md:text-xl lg:text-2xl">Gallery</p>
        <p
          className="font-bold text-4xl md:text-5xl lg:text-6xl
                mt-3 md:mt-4 lg:mt-5"
        >
          Gallery
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

      <section>
        <div className="pt-14 md:pt-20 lg:pt-32 bg-white text-black text-center  ">
          <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
            <div className="section-title grid place-items-center justify-items-center grid-cols-3 gap-1 md:gap-0">
              <div className="bg-lightOrange w-full h-[1px]"></div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl font-kaisei text-black">
                Gallery
              </h3>
              <div className="bg-lightOrange w-full h-[1px]"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-8 font-semibold text-3xl md:text-4xl lg:text-5xl md:max-w-2xl lg:max-w-4xl">
                Businesses and Connections of Abu Dhabi Malayalees
              </h2>
              <p className="md:max-w-3xl lg:max-w-5xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-desc">
                Welcome to our gallery section, where we proudly showcase the
                businesses and connections of our vibrant Abu Dhabi Malayalee
                community. As a community focused on empowering businesses and
                building connections, we understand the importance of showcasing
                the diverse range of talents, services and products that our
                members have to offer.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
                mt-16 gap-2 mb-2"
          >
            <img
              src="/images/one.png"
              alt="gallery img"
              className="w-full h-full object-cover md:col-span-2 md:row-span-2"
            />
            <img
              src="/images/two.png"
              alt="gallery img"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/three.png"
              alt="gallery img"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/four.png"
              alt="gallery img"
              className="w-full h-full object-cover md:col-span-2 md:row-span-2"
            />
            <img
              src="/images/five.png"
              alt="gallery img"
              className="w-full h-full object-cover "
            />
            <img
              src="/images/aboutUs-1.png"
              alt="gallery img"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
