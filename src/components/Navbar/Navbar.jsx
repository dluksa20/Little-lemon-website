import React from 'react';
import logo from '../../assets/logos/logo.jpg';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsBasket2 } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
    const linksItems = [
        { url: '/', link: 'Home' },
        { url: '/about', link: 'About' },
        { url: '/menu', link: 'Menu' },
        { url: '/book', link: 'Book Now' },
    ];

    return (
        <header>
            {/* Navigation */}
            <nav className='nav-container'>
                <div className="links-container">
                    {linksItems.map((data, index) => (
                        <a key={index} href={data.url}>{data.link}</a>
                    ))}
                </div>
                {/* Logo */}
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="Website Logo" />
                </div>

                {/* Icon links */}
                <div className="icons-container">
                    <BsBasket2 className="basket-icon" title="Basket" />
                    <div className="icon-box">
                        <span className="login-text">Log In</span>
                        <CgProfile className="profile-icon" title="Profile" />
                    </div>
                </div>
            </nav>
            
        </header>
    );
};

export default Navbar;
