import React, { useState } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState('home');

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="bg-columbia-blue mx-0 p-5 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-xl font-bold text-blue-900" href="#home">Logo Text</a>
                <button className="block lg:hidden focus:outline-none">
                    <svg className="h-6 w-6 fill-current text-blue-900" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1zM3 7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1zm20 10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1z"/>
                    </svg>
                </button>
                <div className="hidden lg:block">
                    <form className="inline-flex">
                        <input type="text" placeholder="Search" className="bg-gray-100 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-400" />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-blue-600">Search</button>
                    </form>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex items-center">
                        <li className="mr-4">
                            <a className={"text-blue-900 hover:text-blue-600" + (activeLink === 'home' ? ' active' : '')} onClick={() => handleNavLinkClick('home')} href="#home">Home</a>
                        </li>
                        <li className="mr-4">
                            <a className={"text-blue-900 hover:text-blue-600" + (activeLink === 'about' ? ' active' : '')} onClick={() => handleNavLinkClick('about')} href="#about">About</a>
                        </li>
                        <li className="mr-4 relative">
                            <a className="text-blue-900 hover:text-blue-600" href="#">Services</a>
                            <ul className="absolute hidden bg-white shadow-lg py-2">
                                <li><a className="text-blue-900 hover:text-blue-600 py-2 px-4 block" href="#11th">11th</a></li>
                                <li><a className="text-blue-900 hover:text-blue-600 py-2 px-4 block" href="#12th">12th</a></li>
                                <li><a className="text-blue-900 hover:text-blue-600 py-2 px-4 block" href="#JEE">JEE</a></li>
                                <li><a className="text-blue-900 hover:text-blue-600 py-2 px-4 block" href="#NEET">NEET</a></li>
                            </ul>
                        </li>
                        <li className="mr-4">
                            <a className={"text-blue-900 hover:text-blue-600" + (activeLink === 'contact' ? ' active' : '')} onClick={() => handleNavLinkClick('contact')} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;