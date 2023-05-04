import Link from "next/link";
import "./enlistModel.css";

interface EnlistModelProps {
  setShowEnlistModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnlistModel = ({ setShowEnlistModel }: EnlistModelProps) => {
  return (
    <>
      <div
        className="absolute w-full h-screen top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center "
        onClick={() => setShowEnlistModel(false)}
      />
      <div className="absolute top-0 left-0 w-full h-screen  flex items-center justify-center">
        <div className="relative flex flex-col  md:flex-row gap-5 p-5 text-center font-lexend font-medium text-2xl lg:text-3xl bg-black rounded-lg z-50 ">
          <Link
            href="/business-listings/add-company"
            onClick={() => setShowEnlistModel(false)}
            className="enlist-company md:pb-14 w-64 h-48 md:w-56 md:h-[400px] lg:w-64 lg:h-[460px] flex  items-center md:items-end justify-center hover:cursor-pointer rounded-sm hover:border hover:border-white "
          >
            <h2 className="hover:underline hover:underline-offset-1 transition-all duration-300">
              Enlist <br />
              Company
            </h2>
          </Link>
          <Link
            href="/business-listings/add-individual"
            onClick={() => setShowEnlistModel(false)}
            className="enlist-individual md:pb-14 w-64 h-48 md:w-56 md:h-[400px] lg:w-64 lg:h-[460px] flex items-center md:items-end justify-center hover:cursor-pointer rounded-sm hover:border hover:border-white relative"
          >
            <div className="absolute top-0 left-0 bg-enlist w-full h-full z-10 md:w-0 md:h-0" />
            <h2 className="hover:underline hover:underline-offset-1 transition-all duration-300 z-20">
              Enlist <br />
              Individual
            </h2>
          </Link>
          {/* close button */}
          <svg
            className="block h-12 w-12 absolute -bottom-20 right-1/2 translate-x-1/2 hover:cursor-pointer"
            onClick={() => setShowEnlistModel(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            id="menu-close"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {/* close button */}
        </div>
      </div>
    </>
  );
};

export default EnlistModel;
