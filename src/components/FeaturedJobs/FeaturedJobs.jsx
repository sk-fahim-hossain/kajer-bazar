import React, { useEffect, useState } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import singleLoader from '../Loaders/singleLoader';

const FeaturedJobs = () => {
   

    

   
    return (
        <div>
            <div className="text-center">
                <p>Featured Jobs</p>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* comments are for only testing */}
            {/* <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <CompanyCard key={job.id} job={job}></CompanyCard>)
                }
            </div> */}
        </div>
    );
};

export default FeaturedJobs;