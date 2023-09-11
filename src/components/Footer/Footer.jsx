import React from 'react';


const Footer = () => {
    return (
        <div className='grid   grid-cols-5  gap-2 bg-black text-white p-4 mt-32 pt-32'>
            <div className=''>
                <h2 className='text-3xl mb-5'>CareerHub</h2>
                <p className="text-base text-[#ffffffb3] mt-3">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            </div>
            <div className='pl-8'>
                <p className='text-xl'>Company</p>
                <div className="text-base text-[#ffffffb3] mt-3">
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
            </div>
            <div>
                <p>Product</p>
                <div className="text-base text-[#ffffffb3] mt-3">
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
            </div>
            <div>
                <p>Support</p>
                <div className="text-base text-[#ffffffb3] mt-3">
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
            </div>
            <div>
                <p>Contact</p>
                <p className="text-base text-[#ffffffb3] mt-3">524 Broadway , NYC <br />
                    +1 777 - 978 - 5570</p>
            </div>
        </div>
    );
};

export default Footer;