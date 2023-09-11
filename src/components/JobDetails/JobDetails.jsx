import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
     console.log(jobs)

    
    return (
        <div>
            <h3>this is job details{id}</h3>
        </div>
    );
};

export default JobDetails;