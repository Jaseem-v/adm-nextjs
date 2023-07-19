import "./enlistModel.css";

interface AdvertisementModelProps {
  setShowAdvertisementModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdvertisementModel = ({ setShowAdvertisementModel }: AdvertisementModelProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={() => setShowAdvertisementModel(false)}
      />
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white z-50" onClick={() => setShowAdvertisementModel(false)}>
        <div className="relative flex flex-col md:flex-row gap-5 p-5 text-center font-medium text-2xl lg:text-3xl bg-black rounded-lg">
          hoiiii
          {/* close button */}
          <svg
            className="block h-12 w-12 absolute -bottom-20 right-1/2 translate-x-1/2 hover:cursor-pointer"
            onClick={() => setShowAdvertisementModel(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            id="menu-close"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {/* close button */}
        </div>
      </div>
    </>
  );
};

export default AdvertisementModel;
