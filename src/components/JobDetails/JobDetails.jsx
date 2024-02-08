import { useParams } from "react-router-dom";
import useJobsHook from "./../../hooks/useJobsHook";
import JobDetailUI from "../JobDetailUI/JobDetailUI";

const JobDetails = () => {
  const [jobs] = useJobsHook();
  const { id } = useParams();

  const searchedJob = jobs?.filter((item) => item.id == id);
  const jobDetailInfo = searchedJob[0];

  return (
    <div>
      {jobDetailInfo ? (
        <JobDetailUI details={jobDetailInfo}></JobDetailUI>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;
