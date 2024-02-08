import React, { useEffect, useState } from "react";
import useFakeDatabase from "../../hooks/useFakeDatabase";
import ApplyJobCard from "../ApplyJobCard/ApplyJobCard";
import PageBanner from "./../PageBanner/PageBanner";

const AppliedJobs = () => {
  const [data, updateData] = useFakeDatabase("appliedJobs");

  return (
    <div>
      <PageBanner title={"Applied Jobs"}></PageBanner>
      <div className="max-w-5xl mx-auto">
        {data?.map((item) => (
          <ApplyJobCard key={item.id} data={item}></ApplyJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
