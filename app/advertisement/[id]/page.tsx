"use client"

import SectionHeader from "@/components/SectionHeader";
import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import Link from "next/link";
import { formatDate } from "@/utils/content";
// import { formatDate } from "../page";
// import { useRouter } from 'next/navigation';

type AdvertisementProps = {
  _id: string;
  desc: string;
  createdAt: string;
  image: {
    key: string;
  },
  type: string;
  createdByRole: string;
  createdBy: {
    fname: string;
    lname: string;
    profilePicture: {
      key: string;
    }
  }
};



const Advertisement = ({ params }: {
  params: { id: string }
}) => {

  const { id } = params

  // const router = useRouter()
  const breadcrumbs = ["Advertisement"];
  const [ads, setAds] = useState<AdvertisementProps[]>([])
  // const [usedCars, setUsedCars] = useState<AdvertisementProps[]>([])
  // const [realEstate, setRealEstate] = useState<AdvertisementProps[]>([])
  // const [job, setJob] = useState<AdvertisementProps[]>([])

  console.log(id);


  // const DropdownItems: MenuProps['items'] = [
  //   {
  //     key: '1',
  //     label: (
  //       <p onClick={() => setAds(job)}>
  //         Job
  //       </p>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <p onClick={() => setAds(usedCars)}>
  //         Used car
  //       </p>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <p onClick={() => setAds(realEstate)}>
  //         Used car
  //       </p>
  //     ),
  //   }
  // ];

  const breakpointColumnsObj = {
    default: 3,
    4000: 3,
    1024: 2,
    500: 1
  };

  useEffect(() => { }, [ads])

  useEffect(() => {
    const getAd = async () => {
      if (id) {

        try {
          const adsapi = await httpClient().get(`advertisement${id != "all" ? `/${id}` : ''}/approved`)
          // const realEstate = await httpClient().get('advertisement/real-estate/approved')
          // setUsedCars(usedCar?.data?.data)
          // setRealEstate(realEstate?.data?.data)
          setAds(adsapi?.data?.data)
        } catch (error) {
          console.log(error)
        }
      }

    }
    getAd()
  }, [id])
  // console.log(ads)

  const item = (
    <div className="rounded-lg shadow-md inline-block h-fit">
      <div>
        <img src="images/companyProfile.png" alt="c" className="rounded-t-md w-full h-full block" />
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
          {ads?.length ? ads.map((ad) => (
            <div key={ad._id} className="rounded-lg shadow-md inline-block h-fit w-full">
              <div>
                {ad?.image?.key ? <img src={`https://abudhabi-malayalees.onrender.com/resource/advertisement/${ad?.image?.key}`} alt="c" className="rounded-t-md w-full h-full block" /> : null}
                <div className="flex items-center justify-between px-6 pt-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                      style={{ backgroundImage: `url(${ad.createdBy?.profilePicture?.key ? `https://abudhabi-malayalees.onrender.com/resource/${ad.createdByRole == "Personal_Accounts" ? "personal" : "business"}-account-profile-picture/${ad.createdBy?.profilePicture?.key}` : 'https://abudhabimalayalees.com/images/profilePreview.png'})` }}
                    />
                    <p className="font-semibold text-textBlack">{ad.createdBy?.fname}</p>
                  </div>
                  <p className="text-sm text-descBlack">{formatDate(ad.createdAt.slice(0, 10))}</p>
                </div>
                <div className="text p-6">
                  {/* <h3 className="font-semibold text-xl">For sale</h3> */}
                  <p className="mb-2">{ad?.desc}</p>
                </div>
              </div>
            </div>
          )) : null}
        </Masonry>
      </section>
    </>
  )
};

export default Advertisement;
