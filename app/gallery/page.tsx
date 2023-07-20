"use client";

import SectionHeader from "@/components/SectionHeader";
import LightGallery from "lightgallery/react";
import { useEffect, useState } from "react";
import httpClient from "@/services/axiosInstance";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [galleryData, setGalleryData] = useState<
  { image: { key: string } }[] | []
>([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        await httpClient()
          .get(`/gallery/customer`)
          .then((res) => {
            if (res.status === 200) {
              setGalleryData(res.data.data);
            }
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchGalleryData();
  }
  , []);
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
              Welcome to our gallery section, where we proudly showcase the businesses and connections of our vibrant Abu Dhabi Malayalee community. As a community focused on empowering businesses and building connections, we understand the importance of showcasing the diverse range of talents, services and products that our members have to offer.
              </p>
            </div>
          <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <div className="flex flex-wrap -mx-4 my-10">
              {galleryData &&
                galleryData.map((el, i) => (
                  <div className="md:w-1/3 px-4 mb-8" key={i}>
                    <a
                      href={`https://abudhabi-malayalees.onrender.com/resource/gallery/${el.image.key}`}
                    >
                      <img
                        alt="img1"
                        src={`https://abudhabi-malayalees.onrender.com/resource/gallery/${el.image.key}`}
                      />
                    </a>
                  </div>
                ))}
            </div>
          </LightGallery>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;
