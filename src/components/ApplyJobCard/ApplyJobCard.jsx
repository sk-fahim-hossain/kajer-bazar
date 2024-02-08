import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ApplyJobCard = (item) => {
  const {
    id,
    companyName,
    companyLogo,
    jobTitle,
    remoteOrOnsite,
    employmentType,
    location,
    salary,
  } = item.data;

  return (
    <div className="shadow-lg border rounded-md p-4 flex justify-evenly flex-col sm:flex-row items-center m-2">
      <img
        src={companyLogo}
        className="w-full md:w-[240px] md:h-[240px] w-[100px] bg-gray-200 border rounded-md mb-4 sm:mb-0"
        alt=""
      />
      <div className=" mt-3 sm:ml-6 sm:mt-0">
        <p className="title text-xl font-bold">{jobTitle}</p>
        <p className="company-name text-gray-500 my-2">{companyName}</p>
        <div className="flex  gap-3">
          <p className="py-1 px-3 border border-blue-500 rounded-sm">
            {remoteOrOnsite}
          </p>
          <p className="py-1 px-3 border border-blue-500 rounded-sm">
            {employmentType}
          </p>
        </div>
        <div className="flex-col   md:flex  lg:flex-row gap-3">
          <div className="flex gap-2 items-center text-gray-500 my-2 sm:my-4">
            <CiLocationOn className="text-[#8E7DFE]" />
            <p>
              <span className="font-bold text-gray-700">Address:</span>
              {location}
            </p>
          </div>
          <div className="flex gap-2 items-center  ">
            <HiOutlineCurrencyDollar className="text-[#8E7DFE]" />
            <p>
              <span className="font-semibold">Salary:</span> {salary}(Per Month)
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={`/jobs/${id}`}>
          <button className="gradient-btn mt-2">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ApplyJobCard;
