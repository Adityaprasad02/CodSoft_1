import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0 bg-gray-800 text-white">
            <nav className="border-gray-800 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <div className='flex flex-col'><h1 className='text-3xl'>ShopStore</h1>
                        <h4 className='text-sky-600'>by Aditya Prasad Sahoo </h4>
                        </div>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white hover:bg-gray-700  mx-8 p-2 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            isMobileMenuOpen ? 'block' : 'hidden'
                        } lg:flex lg:items-center lg:w-64 w-52`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    exact="true"
                                    to="/"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={toggleMobileMenu} // Close menu on link click
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={toggleMobileMenu} // Close menu on link click
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={toggleMobileMenu} // Close menu on link click
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:block hover:bg-gray-700 text-center rounded-xl p-3 w-20">
                        <Link
                            to="/login"
                        
                        >Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
