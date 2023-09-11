import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <h3 className="logo text-3xl"><Link to="/">CareerHub</Link></h3>
            <nav className='nav-link'>
                <li><Link to="/statistic">Statistics</Link></li>
                <li><Link to="/applied">Applied Jobs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </nav>
            <button className='gradient-btn'>Start Applying</button>
        </header>
    );
};

export default Header;