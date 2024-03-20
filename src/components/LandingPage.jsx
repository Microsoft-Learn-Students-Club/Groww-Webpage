import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

function LandingPage() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const options = {
            strings: [
                'Welcome to our Landing Page.',
                'Discover our products and services.',
                'Experience excellence with us.',
            ],
            typeSpeed: 50, // Adjusted type speed for smoother transition
            backSpeed: 50, // Adjusted back speed for smoother transition
            loop: true,
            showCursor: true,
            cursorChar: '', // Set cursorChar to empty string
        };

        const typed = new Typed('.typed-text', options);

        return () => {
            typed.destroy();
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="bg-gray-200 py-12">
            <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center">
                <div className="w-full md:w-1/2 md:pr-8">
                    <h2 className="text-4xl font-bold text-blue-700 mb-6">Welcome</h2>
                    <p className="text-lg text-gray-800 leading-relaxed typed-text"></p>
                    <p className="text-gray-700 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales orci nec justo posuere sagittis. Sed dictum eleifend metus, eu volutpat nisl congue non. Vivamus sed luctus eros. Cras aliquet, risus at varius convallis, felis risus semper velit, vel congue tortor arcu non justo. Donec nec pharetra magna.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Proin eu est ut nunc lacinia aliquam vitae et libero. Duis interdum nisi vel ipsum molestie, at ultrices mauris bibendum. Integer sed odio vitae nisi efficitur convallis eget id libero. Ut suscipit interdum ex, in sodales nisl facilisis a. Integer nec risus sit amet lectus hendrerit viverra vel in lacus.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Placeholder"
                        className="rounded-md shadow-lg mx-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition-colors duration-300"
                        >
                            Explore
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white w-full shadow-lg rounded-md py-2">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300">Products</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300">Services</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300">About Us</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
