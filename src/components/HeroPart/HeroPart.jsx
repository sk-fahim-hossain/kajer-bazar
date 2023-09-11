import React from 'react';

const HeroPart = () => {
    return (
       <div >
         <div className="h-[calc(100vh-185px)] grid grid-cols-2 items-center  justify-between">
            <div className="info text-left mb-8">
                <h2 className='text-7xl mb-6 text-extrabold'>One Step <br /> Closer To Your <br /> <span className="text-violet-500">Dream Job</span></h2>
                <p className='text-lg mb-8 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='gradient-btn'>Start Applying</button>
            </div>
            <img src="https://i.ibb.co/nD8RB5G/hero-img.png" className=" object-fill" alt="hero-img" border="0" />
        </div>
       </div>
    );
};

export default HeroPart;