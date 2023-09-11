import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

 

const JobcategoryList = () => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch('jobCategoryData.json')
    .then(res => res.json())
    .then(data =>dataLengthChecker(data))
  },[])

  const dataLengthChecker = (data) =>{
    if(data.length > 4){
      const sclicedData = data.slice(0,4)
      setCategory(sclicedData);
    }
  }
    return (
        <div className='mt-16'>
          
            <h2 className='text-center'>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
              <div className='mt-14 flex align-center justify-center'>
                {
                  category.map((el, i) => <CategoryCard element={el} key={i}></CategoryCard>)
                }
              </div>
        </div>
    );
};

export default JobcategoryList;