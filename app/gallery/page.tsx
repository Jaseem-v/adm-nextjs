import SectionHeader from "@/components/SectionHeader";

const Gallery = () => {
  const breadcrumbs = ['Gallery']



  
  return (
    <>
      <SectionHeader title="Gallery" breadcrumbs={breadcrumbs} />

      {/* \\\\\\\\\\\\ */}
      {/* SECTION */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div className="pt-10 md:pt-14 lg:pt-16 bg-white text-black text-center  ">
          <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-8 font-bold text-3xl md:text-4xl lg:text-5xl md:max-w-2xl lg:max-w-4xl text-textBlack font-albra">
                Businesses and Connections of Abu Dhabi Malayalees
              </h2>
              <p className="md:max-w-3xl lg:max-w-5xl font-semibold text-base md:text-lg lg:text-xl mt-8 text-descBlack">
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
