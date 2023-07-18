"use client"

import SectionHeader from "@/components/SectionHeader";
import httpClient from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import Link from "next/link";

type AdvertisementProps = {
  _id: string;
  desc: string;
  createdAt: string;
  image: {
    key: string;
  },
  type: string;
  createdBy: {
    name: string;
    profilePicture: {
      key: string;
    }
  }
};

const DropdownItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link rel="noopener noreferrer" href="/business" >
        Business Company
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link rel="noopener noreferrer" href="/businesspersons" >
        Business Persons
      </Link>
    ),
  }
];
const enlistItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link rel="noopener noreferrer" href="/business-listings/add-individual" >
        Personal
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link rel="noopener noreferrer" href="/business-listings/add-company" >
        Business
      </Link>
    ),
  }
];

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
        const usedCar = await httpClient().get('advertisement/used-car/approved')
        const realEstate = await httpClient().get('advertisement/real-estate/approved')
        setAds([...usedCar?.data?.data, ...realEstate?.data?.data])
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
        <div className="w-32 border border-black border-opacity-50 px-4 py-2 my-4 flex items-center justify-center rounded">
          <Dropdown menu={{ items: DropdownItems }} placement="bottomRight" arrow>
                  <div
                    className='text-smactive:text-slate-400 flex items-center justify-center gap-2 cursor-pointer'
                    aria-current="page"
                  >
                    Advertisement
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.34106L6 6.19106L11 1.34106" stroke="black" stroke-opacity="0.78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
          </Dropdown>
        </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid xl:mx-0"
        columnClassName="my-masonry-grid_column">
        {ads.map((ad) => (
          <div key={ad._id} className="rounded-lg shadow-md inline-block h-fit w-full">
            <div>
            <img src={`https://abudhabi-malayalees.onrender.com/resource/advertisement/${ad?.image?.key}`} alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-2">
                <div
                  className="h-9 w-9 rounded-full navbarImage bg-cover bg-center"
                  style={{backgroundImage: `url(https://abudhabi-malayalees.onrender.com/resource/business-account-profile-picture/${ad.createdBy?.profilePicture?.key})`}} 
                />
                <p className="font-semibold text-textBlack">{ad.createdBy?.name}</p>
              </div>
              <p className="text-sm text-descBlack">{ad.createdAt.slice(0,10)}</p>
            </div>
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
