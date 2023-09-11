import React from 'react';
import HeroPart from '../HeroPart/HeroPart';
import JobcategoryList from '../JobcategoryList/JobcategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';



const Home = () => {
   
    return (
        <div>
            <HeroPart></HeroPart>
            <JobcategoryList></JobcategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;