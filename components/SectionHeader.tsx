import Link from "next/link";

interface sectionHeaderProps {
  title: String;
  page: String;
}

const SectionHeader: React.FC<sectionHeaderProps> = ({
  title,
  page,
}) => {
  return (
    <div
      className={`sectionHeader text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-5 xl:px-0 mx-auto`}
    >
      <p
        className="font-joane font-bold text-4xl md:text-5xl lg:text-[64px]
                mt-3 md:mt-4 lg:mt-5"
      >
        {title}
      </p>
      <div
        className="text-sm md:text-base max-w-lg text-center
                mt-3 md:mt-4 lg:mt-5 flex items-center justify-center gap-2"
      >
        <p className="hover:underline hover:underline-offset-1 underline-white"><Link href='/'>Home </Link></p><p className="text-lg">{`>`}</p>{page}
      </div>
    </div>
  );
};

export default SectionHeader;
