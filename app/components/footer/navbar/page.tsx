'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png';
import Button from '../../button/button';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        {/* <a href="#" className="flex items-center">
                            <Image src={logo} alt="Logo" height={50} className='h-8 w-auto sm:h-10'/>
                        </a> */}
                        <span>Logo</span>
                    </div>

                    <div className="hidden md:flex items-center justify-center flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white mx-4">
                            Blog
                        </a>
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white mx-4">
                            Community
                        </a>
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white mx-4">
                            Affiliate
                        </a>
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white mx-4">
                            Models
                        </a>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button onClick={toggleNavbar} type="button" className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Button width="130px" height="40px">Launch App</Button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
                    <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Community</a>
                    <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Affiliate</a>
                    <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About US</a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
