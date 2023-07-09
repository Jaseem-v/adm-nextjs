"use client"

import SectionHeader from "@/components/SectionHeader";
import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import Masonry from 'react-masonry-css'

type AdvertisementProps = {};

const Advertisement = () => {
  const breadcrumbs = ["Advertisement"];
  const [ads, setAds] = useState<AdvertisementProps[]>([])

  const breakpointColumnsObj = {
    default: 3,
    4000: 3,
    1024: 2,
    500: 1
  };

  useEffect(() => {
    const getAd = async () => {
      try {
        const usedCar = await httpClient().get('advertisement/used-car/customer')
        const realEstate = await httpClient().get('advertisement/real-estate/customer')
        setAds([...usedCar.data.data, ...realEstate.data.data])
      } catch (error) {
        console.log(error)
      }
    }
    getAd()
  }, [])
  console.log(ads)

  const item = (
    <div className="rounded-lg shadow-md inline-block h-fit">
            <div>
            <img src="images/companyProfile.png" alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="text p-6">
              {/* <h3 className="font-semibold text-xl">For sale</h3> */}
              <p className="mb-2">This item is for sale hahah now grab this oppertunity and buy this whole company</p>
            </div>
            </div>
          </div>
  )
  return (
    <>
      <SectionHeader title="Advertisement" breadcrumbs={breadcrumbs} />
      <section className="my-16 max-w-7xl mx-4 xl:mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid xl:mx-0"
        columnClassName="my-masonry-grid_column">
        {ads.map((ad, index) => (
          <div key={index} className="rounded-lg shadow-md inline-block h-fit">
            <div>
            <img src="images/companyProfile.png" alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="text p-6">
              {/* <h3 className="font-semibold text-xl">For sale</h3> */}
              <p className="mb-2">{ad?.desc}</p>
            </div>
            </div>
          </div>
        ))}
      </Masonry>
      </section>
    </>
  )
};

export default Advertisement;
