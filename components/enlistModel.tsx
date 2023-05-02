import "./enlistModel.css";

interface EnlistModelProps {
  setShowEnlistModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnlistModel = ({ setShowEnlistModel }: EnlistModelProps) => {
  return (
    <div
      className="absolute w-full h-screen top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center "
      onClick={() => setShowEnlistModel(false)}
    >
      <div className="relative flex gap-5 p-5 text-center font-lexend font-medium text-xl md:text-2xl lg:text-3xl bg-black rounded-lg z-50 ">
        <div className="enlist-company pb-14 w-64 h-[460px] flex  items-end justify-center hover:cursor-pointer rounded-sm hover:border hover:border-white ">
          <h2 className="hover:underline hover:underline-offset-1 transition-all duration-300">
            Enlist <br />
            Company
          </h2>
        </div>
        <div className="enlist-individual pb-14 w-64 flex items-end justify-center hover:cursor-pointer rounded-sm hover:border hover:border-white">
          <h2 className="hover:underline hover:underline-offset-1 transition-all duration-300">
            Enlist <br />
            Individual
          </h2>
        </div>
      </div>
      {/* close button */}
      <svg
        className="block h-12 w-12 absolute top-5 right-5 hover:cursor-pointer"
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
  );
};

export default EnlistModel;
