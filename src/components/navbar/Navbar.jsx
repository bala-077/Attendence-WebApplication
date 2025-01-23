import React from 'react';
import logo_dark from '../images/logo-dark.png';



const Navbar = () => {
    const navItem = ["Home", "About", "Service", "Product", "Industries", "Team", "Contact"];

    return (
        <nav className='bg-white shadow-lg w-full flex justify-between items-center px-6 md:px-10 py-4'>
            {/* Logo */}
            <div>
                <img src={logo_dark} alt="digitaly-logo" className='w-16 h-16 md:w-20 md:h-20' />
            </div>

            {/* Navigation Items */}
            <div>
                <ul className='hidden md:flex gap-6 text-gray-700 font-medium'>
                    {navItem.map((item, index) => (
                        <li key={index} className='cursor-pointer hover:text-blue-500 transition duration-300'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Placeholder */}
            <div className='md:hidden'>
                <button className='text-gray-700 text-2xl'>&#9776;</button>
            </div>
        </nav>
    );
};

export default Navbar;

            