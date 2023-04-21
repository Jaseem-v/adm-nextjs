interface sectionHeaderProps {
  title: String;
  classname: String;
  description: String;
}

const SectionHeader: React.FC<sectionHeaderProps> = ({
  title,
  classname,
  description,
}) => {
  return (
    <div
      className={`${classname} text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-5 xl:px-0 mx-auto`}
    >
      <p className="font-kaisei text-lg md:text-xl lg:text-2xl">{title}</p>
      <p
        className="font-bold text-4xl md:text-5xl lg:text-6xl
                mt-3 md:mt-4 lg:mt-5"
      >
        {title}
      </p>
      <p
        className="text-sm md:text-base max-w-lg text-center
                mt-3 md:mt-4 lg:mt-5"
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
