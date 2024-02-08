import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { FiPhone } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";
import PageBanner from "../PageBanner/PageBanner";
import useFakeDatabase from "../../hooks/useFakeDatabase";
const JobDetailUI = ({ details }) => {
  const {
    jobDescription,
    jobResponsibility,
    educationRequirement,
    experience,
    jobTitle,
    location,
    remoteOrOnsite,
    salary,
    contact,
  } = details;

  const [data, updateData] = useFakeDatabase("appliedJobs");

  const handleApply = (data) => {
    updateData(data);
  };
  return (
    <div className=" text-lg">
      <PageBanner title="Job Details"></PageBanner>
      <div className="max-w-5xl mx-auto grid grid-cols-12 gap-4">
        <div className="text-gray-600 text-[18px] col-span-12 p-5 m-3 md:col-span-6 lg:col-span-8 xl:col-span-8">
          <p className="mb-[24px]">
            <span className="font-semibold text-gray-700 ">
              Job Description:{" "}
            </span>
            {jobDescription}
          </p>
          <p className="mb-[24px]">
            <span className="font-semibold text-gray-700">
              Job Responsibility:{" "}
            </span>
            {jobResponsibility}
          </p>
          <p className="font-semibold text-gray-700 mb-[14px]">
            Education Requirements:{" "}
          </p>
          <p className="mb-[24px]">{educationRequirement}</p>
          <p className="font-semibold text-gray-700 mb-[14px]">Experiences: </p>
          <p>{experience}</p>
        </div>
        <div className="bg-[#F4F1FF] text-[19px] p-[30px] m-3 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 rounded-lg">
          <p className="mb-[24px] font-semibold text-gray-500">Job Details</p>
          <div className="w-full border  "></div>
          <div className="flex gap-2 items-center my-4">
            <HiOutlineCurrencyDollar className=" text-[#8E7DFE]" />
            <p>
              <span className="font-semibold">Salary</span>:{salary}(Per Month)
            </p>
          </div>
          <div className="flex gap-2 items-center my-4">
            <RxCalendar className=" text-[#8E7DFE]" />
            <p className="">
              <span className="font-semibold">Job Title</span> :{jobTitle}
            </p>
          </div>
          <p className="mb-[24px] font-semibold text-gray-500">
            Contact Informations
          </p>
          <div className="w-full border  "></div>
          <div className="flex gap-2 items-center my-4 text-gray-500">
            <FiPhone className=" text-[#8E7DFE]" />
            <p>
              <span className="font-semibold text-gray-700">Phone:</span>
              {contact?.phone}
            </p>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <CiMail className=" text-[#8E7DFE]" />
            <p className="text-[17px]">
              <span className="font-semibold  text-gray-700">Email:</span>
              {contact?.email}
            </p>
          </div>
          <div className="flex gap-2 items-center text-gray-500 my-4">
            <CiLocationOn className=" text-[#8E7DFE]" />
            <p>
              <span className="font-bold text-gray-700">Adresss:</span>
              {location}
            </p>
          </div>
          <button
            onClick={() => handleApply(details)}
            className="gradient-btn w-full"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailUI;
