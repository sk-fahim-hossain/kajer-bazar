import { useEffect, useState } from "react";

const useJobsHook = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return [jobs];
};

export default useJobsHook;
