import Link from "next/link";

interface BusinessDropdownProps {
  setIsBusinessDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const BusinessDropdown: React.FC<BusinessDropdownProps> = ({
  setIsBusinessDropdown,
}) => {
  return (
    <div
      className="bg-black flex flex-col rounded mt-1 p-2 text-black w-48 text-sm absolute top-full -right-10 text-center  nav-submenu"
      onMouseLeave={() => setIsBusinessDropdown(false)}
    >
      <Link
        href="/business"
        className=" py-1 hover:bg-zinc-800 rounded center text-white"
      >
        Business company
      </Link>
      <Link
        href="/businesspersons"
        className=" py-1 hover:bg-zinc-800 rounded center text-white"
      >
        Business Persons
      </Link>
    </div>
  );
};

export default BusinessDropdown;
