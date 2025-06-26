import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-6 lg:px-0 max-w-[1200px] mx-auto mt-6 mb-6">
      <header className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="w-28 sm:w-36">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#351A60]"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Menu */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white shadow-md z-50 md:shadow-none md:bg-transparent md:static md:flex md:items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full text-center md:text-left py-4 md:py-0">
            <li>
              <a
                href="#features"
                className="block py-2 px-4 text-gray-800 hover:text-[#622BB9] font-Urbanist"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="block py-2 px-4 text-gray-800 hover:text-[#622BB9]"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 text-gray-800 hover:text-[#622BB9]"
              >
                Contact Us
              </a>
            </li>

            {/* Mobile Login Button */}
            <li className="md:hidden mt-2">
              <Link to="/login">
                <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white w-[90%] mx-auto py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-10 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
