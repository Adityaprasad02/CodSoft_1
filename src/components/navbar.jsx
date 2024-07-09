import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="shadow sticky z-50 top-0 bg-gray-800 text-white">
            <nav className="border-gray-800 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <div className='flex flex-col'>
                            <div className='text-3xl'>ShopStore</div>
                            <div className='text-sky-500 text-sm'> by Aditya Prasad Sahoo </div>
                        </div>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white hover:bg-blue-700 mx-8 p-2 focus:outline-none"
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
                        } w-full lg:flex lg:items-center lg:w-auto`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 w-full">
                            <li>
                                <NavLink
                                    exact="true"
                                    to="/"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-blue-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-blue-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-blue-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                    activeclassname="text-orange-400 font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="lg:hidden block py-2 pr-4 pl-3 duration-200 border-b border-gray-800 hover:bg-blue-700 hover:text-orange-400">
                                <Link
                                    to="/login"
                                    onClick={closeMobileMenu}
                                >
                                    Log in
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <Link
                            to="/login"
                            className="hover:bg-blue-700 text-center rounded-xl p-3"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
