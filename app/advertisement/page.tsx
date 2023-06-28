import SectionHeader from "@/components/SectionHeader";

const Advertisement = () => {
  const breadcrumbs = ["Advertisement"];
  return (
    <>
      <SectionHeader title="Advertisement" breadcrumbs={breadcrumbs} />
      <section className="my-16 max-w-7xl mx-auto">
        <div className="ad-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <div className="rounded-lg shadow-md">
            <div>
            <img src="images/companyProfile.png" alt="c" className="rounded-t-md w-full h-full"/>
            <div className="text p-6">
              <h3>For sale</h3>
              <p className="mt-4">This item is for sale hahah now grab this oppertunity and buy this whole company</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Advertisement;
