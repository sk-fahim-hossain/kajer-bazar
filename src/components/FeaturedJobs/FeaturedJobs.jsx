import { useEffect, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import useJobsHook from "../../hooks/useJobsHook";

const FeaturedJobs = () => {
  const [jobs] = useJobsHook();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const displayData = () => {
    setData(jobs);
    setShow(!true);
  };

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((fetchData) => {
        const slicedData = fetchData.slice(0, 4);
        setData(slicedData);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <p>Featured Jobs</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div>
        <div className="grid  grid-cols-2 sm:grid-cols-1 sm:m-2 md:grid-cols-2 gap-6">
          {data ? (
            data?.map((job) => (
              <CompanyCard key={job.id} job={job}></CompanyCard>
            ))
          ) : (
            <>Loading..</>
          )}
        </div>
        <div className="w-full flex items-center my-4">
          <button
            onClick={displayData}
            className={`${show ? "gradient-btn mx-auto" : "hidden"} `}
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
