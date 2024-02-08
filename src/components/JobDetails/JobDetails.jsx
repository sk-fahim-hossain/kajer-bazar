import { useParams } from "react-router-dom";
import useJobsHook from "./../../hooks/useJobsHook";
import JobDetailUI from "../JobDetailUI/JobDetailUI";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        const searchedJob = data?.filter((item) => item.id == id);
        const details = searchedJob[0];
        setJobs(details);
      });
  }, []);

  console.log(jobs);
  return <div>{jobs && <JobDetailUI details={jobs}></JobDetailUI>}</div>;
};

export default JobDetails;
