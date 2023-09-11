import React from 'react';
import { MapPinIcon ,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CompanyCard = ({job}) => {
    const {id,jobTitle,companyName,remoteOrOnsite,employmentType,location,salary,companyLogo} = job;
    
    return (
        <div className='border-2 border-sky-800 p-4'>
            <img src={companyLogo} className='h-10 w-16 mb-2' alt="" />
            <p className='text-2xl font-extrabold'>{jobTitle}</p>
            <p className="text-gray-500 text-xl">{companyName}</p>
            <div className='flex gap-4 mt-5'>
                <p className='border-2 p-2'>{remoteOrOnsite}</p>
                <p className='border-2 p-2'>{employmentType}</p>
            </div>
            <div className="flex">
                <p></p>
            </div>
            <div className="flex gap-4 mt-5">
                <span className="flex align-middle"><MapPinIcon className="h-5 w-5 text-gray-500" />{location}</span>
                <span className="flex"><CurrencyDollarIcon className="h-5 w-5 text-gray-500" />Salary: {salary}</span>
            </div>
            <Link to={`jobs/${id}`} ><button className='py-2 mt-3 text-white px-4 bg-[#9873FF]'>View Details</button></Link>
            
        </div>
    );
};

export default CompanyCard;