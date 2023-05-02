import "./enlistModel.css";

interface EnlistModelProps {
  setShowEnlistModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnlistModel = ({ setShowEnlistModel }: EnlistModelProps) => {
  return (
    <div
      className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => setShowEnlistModel(false)}
    >
      <div className="flex gap-5 p-5 text-center font-lexend font-medium text-xl md:text-2xl lg:text-3xl bg-black rounded-md z-50">
        <div className="enlist-company pb-14 w-64 h-[460px] flex  items-end justify-center">
          <h2>
            Enlist <br />
            Company
          </h2>
        </div>
        <div className="enlist-individual pb-14 w-64 flex items-end justify-center">
          <h2>
            Enlist <br />
            Individual
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EnlistModel;
