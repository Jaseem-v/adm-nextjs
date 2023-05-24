import Link from "next/link";

interface EnlistDropdownProps {
  setIsEnlistDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnlistDropdown: React.FC<EnlistDropdownProps> = ({
  setIsEnlistDropdown,
}) => {
  return (
    <div
      className="bg-black flex flex-col rounded mt-8 p-2 text-black w-48 text-sm absolute top-full -right-10 text-center nav-submenu"
      onMouseEnter={() => {
        setIsEnlistDropdown(true);
      }}
      onMouseLeave={() => {
        setIsEnlistDropdown(false);
      }}
    >
      <Link
        href="/business-listings/add-individual"
        className="py-1 hover:bg-zinc-800 rounded center text-white"
        onClick={() => setIsEnlistDropdown(false)}
      >
        Enlist Individual
      </Link>
      <Link
        href="/business-listings/add-company"
        className="py-1 hover:bg-zinc-800 rounded center text-white"
        onClick={() => setIsEnlistDropdown(false)}
      >
        Enlist Company
      </Link>
    </div>
  );
};

export default EnlistDropdown;
