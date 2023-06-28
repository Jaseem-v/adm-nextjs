"use client"

import SectionHeader from "@/components/SectionHeader";
import Masonry from 'react-masonry-css'

const Advertisement = () => {
  const breadcrumbs = ["Advertisement"];

  const breakpointColumnsObj = {
    default: 3,
    4000: 3,
    1024: 2,
    500: 1
  };

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
        {/* array of JSX items */}
        {item}
        {item}
        <div className="rounded-lg shadow-md inline-block">
            <div>
            <img src="images/about2.png" alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="text p-6">
              <h3 className="font-semibold text-xl">For sale</h3>
              <p className="mt-4">This item is for sale hahah now grab this oppertunity and buy this whole company</p>
            </div>
            </div>
          </div>
        <div className="rounded-lg shadow-md inline-block">
            <div>
            <img src="images/header.png" alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="text p-6">
              <h3 className="font-semibold text-xl">For sale</h3>
              <p className="mt-4">This item is for sale hahah now grab this oppertunity and buy this whole company</p>
            </div>
            </div>
          </div>
        <div className="rounded-lg shadow-md inline-block">
            <div>
            <img src="images/team6.png" alt="c" className="rounded-t-md w-full h-full block"/>
            <div className="text p-6">
              <h3 className="font-semibold text-xl">For sale</h3>
              <p className="mt-4">This item is for sale hahah now grab this oppertunity and buy this whole company</p>
            </div>
            </div>
          </div>
        {item}
        {item}
      </Masonry>
      </section>
    </>
  )
};

export default Advertisement;
