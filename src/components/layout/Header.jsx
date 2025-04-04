import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full md:w-[1200px] mx-auto mt-9 mb-9">
            <header className="flex justify-between items-center p-2 text-gray-800 relative">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo-image w-full" />
                </div>
                
                {/* Mobile Toggle Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                
                {/* Navigation Menu */}
                <nav className={`absolute top-full left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:flex md:space-x-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 text-center">
                        <li><a href="#home" className="block py-2 px-4 text-gray-800 hover:text-gray-400 font-Urbanist">Home</a></li>
                        <li><a href="#about" className="block py-2 px-4 text-gray-800 hover:text-gray-400">About</a></li>
                        <li><a href="#contact" className="block py-2 px-4 text-gray-800 hover:text-gray-400">Contact</a></li>
                    </ul>
                </nav>
                
                {/* Login Button */}
             
                <div className="hidden md:block">
                    <Link to="/sign-up">
                        <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-16 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                            Login
                        </button>
                    </Link>
                    
                </div>
            </header>
        </div>
    );
};

export default Header;
