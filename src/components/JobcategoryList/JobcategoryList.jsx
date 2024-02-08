import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const JobcategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("jobCategoryData.json")
      .then((res) => res.json())
      .then((data) => dataLengthChecker(data));
  }, []);

  const dataLengthChecker = (data) => {
    if (data.length > 4) {
      const sclicedData = data.slice(0, 4);
      setCategory(sclicedData);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h2 className="text-center">Job Category List</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-14 grid grid-flow-row md:grid-flow-col  lg:grid-flow-col sm:grid-flow-row align-center justify-center">
        {category.map((item, i) => (
          <CategoryCard item={item} key={i}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobcategoryList;
