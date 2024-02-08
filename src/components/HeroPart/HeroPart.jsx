const HeroPart = () => {
  return (
    <div className="w-full my-9">
      <div className="max-w-5xl mx-auto">
        <div className="  flex md:flex-row lg:flex  items-center justify-between h-[calc(100vh-185px)]">
          <div className="info text-center sm:ps-4 sm:text-left mb-8 sm:mb-0">
            <h2 className="text-4xl sm:text-4xl  md:text-2xl lg:text-6xl mb-4 sm:mb-6 text-extrabold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-violet-500">Dream Job</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-8 text-[#757575]">
              Explore thousands of job opportunities with all the information
              you need. It's your future. Come find it. Manage all your job
              applications from start to finish.
            </p>
            <button className="gradient-btn text-base sm:text-lg">
              Start Applying
            </button>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co/nD8RB5G/hero-img.png"
              className=" overflow-none md:w-[700px] sm:w-[700px] lg:w-[800px] "
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
