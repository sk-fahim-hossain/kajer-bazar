import React, { useState } from "react";
import {
  CalculatorIcon,
  LightBulbIcon,
  UserGroupIcon,
  CpuChipIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CategoryCard = ({ item }) => {
  const { category, jobs_available } = item;

  return (
    <div className="p-8 bg-[#9873ff1a] m-4 rounded-md">
      {category == "Software Developer" && (
        <CalculatorIcon className="h-10 w-10 rounded-md text-[#9873FF] p-2 bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a]" />
      )}
      {category === "Financial Analyst" && (
        <LightBulbIcon className="h-10 w-10 rounded-md text-[#9873FF] p-2 bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a]" />
      )}
      {category === "Marketing Manager" && (
        <UserGroupIcon className="h-10 w-10 rounded-md text-[#9873FF] p-2 bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a]" />
      )}
      {category === "Registered Nurse" && (
        <HeartIcon className="h-10 w-10 rounded-md text-[#9873FF] p-2 bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a]" />
      )}
      <p className="mt-6">{category}</p>
      <p>{jobs_available} Jobs Available</p>
    </div>
  );
};

export default CategoryCard;
