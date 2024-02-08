const PageBanner = ({ title }) => {
  return (
    <div className="bg-[#F9F9FF] w-full">
      <div className="mx-auto flex justify-center items-center w-5xl h-[260px] bg-[#F9F9FF] mb-[60px]">
        <h1 className="text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
